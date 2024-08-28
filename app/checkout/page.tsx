import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Separator } from "@/components/ui/separator"

export default function Component() {
  // Fake product data for demonstration
  const products = [
    { name: "Product 1", price: 19.99, quantity: 2 },
    { name: "Product 2", price: 29.99, quantity: 1 },
  ]

  const subtotal = products.reduce((sum, product) => sum + product.price * product.quantity, 0)
  const shipping = 5.99
  const total = subtotal + shipping

  return (
    <div className="container mx-auto p-4">
      <div className="lg:flex lg:space-x-8">
        <Card className="w-full lg:w-2/3 mb-8 lg:mb-0">
          <CardHeader>
            <CardTitle>Checkout</CardTitle>
            <CardDescription>Please enter your details to complete your order.</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="name">Name</Label>
              <Input id="name" placeholder="John Doe" required />
            </div>
            <div className="space-y-2">
              <Label htmlFor="email">Email</Label>
              <Input id="email" type="email" placeholder="john@example.com" required />
            </div>
            <div className="space-y-2">
              <Label htmlFor="address">Address</Label>
              <Input id="address" placeholder="123 Main St, City, Country" required />
            </div>
          </CardContent>
          <CardFooter>
            <Button className="w-full">Complete Order</Button>
          </CardFooter>
        </Card>

        <Card className="w-full lg:w-1/3">
          <CardHeader>
            <CardTitle>Order Summary</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            {products.map((product, index) => (
              <div key={index} className="flex justify-between">
                <span>{product.name} x {product.quantity}</span>
                <span>${(product.price * product.quantity).toFixed(2)}</span>
              </div>
            ))}
            <Separator />
            <div className="flex justify-between">
              <span>Subtotal</span>
              <span>${subtotal.toFixed(2)}</span>
            </div>
            <div className="flex justify-between">
              <span>Shipping</span>
              <span>${shipping.toFixed(2)}</span>
            </div>
            <Separator />
            <div className="flex justify-between font-bold">
              <span>Total</span>
              <span>${total.toFixed(2)}</span>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}