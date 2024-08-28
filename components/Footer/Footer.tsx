import { Button } from "@/components/ui/button";
const Footer = () => {
  return (
    <footer className="bg-white py-8 border-t border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <h5 className="text-lg font-semibold mb-6">Our Lists</h5>
            <ul className="space-y-4">
              <li>
                <a href="#" className="text-base text-gray-600 hover:text-gray-900">
                  Diam orci
                </a>
              </li>
              <li>
                <a href="#" className="text-base text-gray-600 hover:text-gray-900">
                  Mi feugiat
                </a>
              </li>
              <li>
                <a href="#" className="text-base text-gray-600 hover:text-gray-900">
                  Netus fermentum
                </a>
              </li>
              <li>
                <a href="#" className="text-base text-gray-600 hover:text-gray-900">
                  Suspendisse viverra
                </a>
              </li>
              <li>
                <a href="#" className="text-base text-gray-600 hover:text-gray-900">
                  Id dolor
                </a>
              </li>
              <li>
                <a href="#" className="text-base text-gray-600 hover:text-gray-900">
                  Erat mattis
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h5 className="text-lg font-semibold mb-6">About Us</h5>
            <ul className="space-y-4">
              <li>
                <a href="#" className="text-base text-gray-600 hover:text-gray-900">
                  Nibh
                </a>
              </li>
              <li>
                <a href="#" className="text-base text-gray-600 hover:text-gray-900">
                  Egestas
                </a>
              </li>
              <li>
                <a href="#" className="text-base text-gray-600 hover:text-gray-900">
                  Dictum
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h5 className="text-lg font-semibold mb-6">Blog</h5>
            <ul className="space-y-4">
              <li>
                <a href="#" className="text-base text-gray-600 hover:text-gray-900">
                  Id maecenas
                </a>
              </li>
              <li>
                <a href="#" className="text-base text-gray-600 hover:text-gray-900">
                  Id orci
                </a>
              </li>
              <li>
                <a href="#" className="text-base text-gray-600 hover:text-gray-900">
                  Magna ultricies
                </a>
              </li>
              <li>
                <a href="#" className="text-base text-gray-600 hover:text-gray-900">
                  Quis risus
                </a>
              </li>
            </ul>
          </div>
          <div className="bg-blue-100 p-6 rounded-lg">
            <h5 className="text-lg font-semibold mb-6">Subscribe</h5>
            <div className="flex flex-col space-y-4">
              <input type="email" placeholder="Email address" className="border p-2 rounded-lg" />
              <Button className="bg-blue-600 text-white">Submit</Button>
              <p className="text-sm text-gray-600">
                Stay updated with our latest news and offers! Subscribe to our newsletter now and never miss out. Your
                insights await. Join us!
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
};
export default Footer;

