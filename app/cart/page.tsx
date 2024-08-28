import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import Image from "next/image"
import ProcessCheckoutBtn from "../checkout/ProcessCheckoutBtn/ProcessCheckoutBtn"

export default function Component() {
  return (
    <div className="container mx-auto my-8 px-4 md:px-6">
      <h1 className="text-2xl font-bold mb-4">Shopping Cart</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <div className="bg-white rounded-lg shadow-md overflow-hidden">
          <div className="relative">
            <Image
              src="/placeholder.svg"
              alt="Product Image"
              width="300"
              height="200"
              className="w-full h-48 object-cover"
              style={{ aspectRatio: "300/200", objectFit: "cover" }}
            />
            <div className="absolute top-2 right-2 bg-gray-900 text-white px-2 py-1 rounded-md text-xs">$29.99</div>
          </div>
          <div className="p-4">
            <h3 className="text-lg font-medium mb-2">Acme Widgets</h3>
            <div className="flex items-center mb-2">
              <Input type="number" min="1" defaultValue="1" className="w-16 px-2 py-1 border rounded-md" />
              <Button variant="outline" size="sm" className="ml-2">
                Update
              </Button>
            </div>
            <Button variant="outline" size="sm" className="w-full">
              Remove
            </Button>
          </div>
        </div>
        <div className="bg-white rounded-lg shadow-md overflow-hidden">
          <div className="relative">
            <Image
              src="/placeholder.svg"
              alt="Product Image"
              width="300"
              height="200"
              className="w-full h-48 object-cover"
              style={{ aspectRatio: "300/200", objectFit: "cover" }}
            />
            <div className="absolute top-2 right-2 bg-gray-900 text-white px-2 py-1 rounded-md text-xs">$49.99</div>
          </div>
          <div className="p-4">
            <h3 className="text-lg font-medium mb-2">Acme Gizmos</h3>
            <div className="flex items-center mb-2">
              <Input type="number" min="1" defaultValue="1" className="w-16 px-2 py-1 border rounded-md" />
              <Button variant="outline" size="sm" className="ml-2">
                Update
              </Button>
            </div>
            <Button variant="outline" size="sm" className="w-full">
              Remove
            </Button>
          </div>
        </div>
        <div className="bg-white rounded-lg shadow-md overflow-hidden">
          <div className="relative">
            <Image
              src="/placeholder.svg"
              alt="Product Image"
              width="300"
              height="200"
              className="w-full h-48 object-cover"
              style={{ aspectRatio: "300/200", objectFit: "cover" }}
            />
            <div className="absolute top-2 right-2 bg-gray-900 text-white px-2 py-1 rounded-md text-xs">$19.99</div>
          </div>
          <div className="p-4">
            <h3 className="text-lg font-medium mb-2">Acme Doodads</h3>
            <div className="flex items-center mb-2">
              <Input type="number" min="1" defaultValue="1" className="w-16 px-2 py-1 border rounded-md" />
              <Button variant="outline" size="sm" className="ml-2">
                Update
              </Button>
            </div>
            <Button variant="outline" size="sm" className="w-full">
              Remove
            </Button>
          </div>
        </div>
      </div>
      <div className="mt-8 bg-white rounded-lg shadow-md p-4">
        <h2 className="text-xl font-bold mb-4">Order Summary</h2>
        <div className="flex justify-between items-center mb-2">
          <span>Subtotal</span>
          <span>$99.97</span>
        </div>
        <div className="flex justify-between items-center mb-2">
          <span>Shipping</span>
          <span>$4.99</span>
        </div>
        <div className="flex justify-between items-center mb-4">
          <span>Total</span>
          <span className="text-lg font-bold">$104.96</span>
        </div>
        <ProcessCheckoutBtn />
      </div>
    </div>
  )
};

const processCheckout = () => {

}