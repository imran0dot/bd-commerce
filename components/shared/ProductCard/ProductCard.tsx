import { Card, CardContent, CardFooter } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import Image from "next/image";

const ProductCard = ({data}: {data: any}) => {
  return (
    <Card className="w-full max-w-sm overflow-hidden">
      <div className="aspect-square relative">
        <img 
        alt={data?.attributes?.product_image?.data?.attributes?.alternativeText} 
        src={process.env.BACKEND_URI + data?.attributes?.product_image?.data?.attributes?.url} />
      </div>
      <CardContent className="p-4">
        <h2 className="text-lg font-semibold mb-2">{data?.attributes?.title}</h2>
        <p className="text-2xl font-bold text-primary">${data?.attributes?.new_price}</p>
      </CardContent>
      <CardFooter className="p-4">
        <Button className="w-full">Add to Cart</Button>
      </CardFooter>
    </Card>
  )
};

export default ProductCard;