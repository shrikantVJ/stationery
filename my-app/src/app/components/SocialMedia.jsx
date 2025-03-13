export default function SocialMedia() {
  return (
    <section className="px-4 mb-16 bg-gray-100 py-12">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-xl font-bold text-gray-800 mb-6">FACEBOOK:</h3>
            <div className="bg-white p-4 shadow-sm">
              <div className="flex items-center gap-2 mb-4">
                <img
                  src="/placeholder.svg?height=50&width=50"
                  alt="Facebook profile"
                  className="w-12 h-12 rounded-full"
                />
                <div>
                  <h4 className="font-bold">Stationery Store</h4>
                  <p className="text-sm text-gray-600">12,345 followers</p>
                </div>
              </div>

              <div className="grid grid-cols-4 gap-2">
                {[...Array(12)].map((_, index) => (
                  <img
                    key={index}
                    src={`/placeholder.svg?height=80&width=80&text=${index + 1}`}
                    alt={`Facebook image ${index + 1}`}
                    className="w-full h-auto"
                  />
                ))}
              </div>
            </div>
          </div>

          <div>
            <h3 className="text-xl font-bold text-gray-800 mb-6">INSTAGRAM:</h3>
            <div className="bg-white p-4 shadow-sm">
              <div className="grid grid-cols-3 gap-2">
                {[...Array(9)].map((_, index) => (
                  <img
                    key={index}
                    src={`/placeholder.svg?height=120&width=120&text=IG${index + 1}`}
                    alt={`Instagram image ${index + 1}`}
                    className="w-full h-auto"
                  />
                ))}
              </div>
            </div>
          </div>

          <div>
            <h3 className="text-xl font-bold text-gray-800 mb-6">TWITTER:</h3>
            <div className="bg-white p-4 shadow-sm">
              {[...Array(3)].map((_, index) => (
                <div key={index} className="border-b border-gray-200 pb-4 mb-4 last:border-0 last:mb-0 last:pb-0">
                  <div className="flex items-start gap-2">
                    <img
                      src="/placeholder.svg?height=50&width=50"
                      alt="Twitter profile"
                      className="w-10 h-10 rounded-full"
                    />
                    <div>
                      <div className="flex items-center gap-1">
                        <h4 className="font-bold">Stationery_Sale</h4>
                        <span className="text-gray-500 text-sm">@stationery_sale</span>
                        <span className="text-gray-500 text-sm">· 5 hrs</span>
                      </div>
                      <p className="text-sm">
                        Check out our latest collection of premium art supplies! Limited time offer with 20% discount.
                        <a href="#" className="text-blue-500 hover:underline">
                          {" "}
                          #artsupplies #stationery
                        </a>
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

