import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import {
  Card,
  CardAction,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Link } from "react-router"

export function ProductCard({title, price, description, image, category,productId}) {
  return (
    <Card className=" p-0">   
    <div className="h-[30vh] rounded-lg overflow-hidden bg-gray-100">
        <img
        src={image}
        alt={title}
        loading="lazy"
        className=" w-full h-full object-contain"
      />
      </div>   
      
      <CardHeader>
        <CardAction>
          <Badge variant="secondary">{category}</Badge>
        </CardAction>
        <CardTitle className="line-clamp-1">{title}</CardTitle>
        <CardDescription className="line-clamp-2">
            {description}
        </CardDescription>
      </CardHeader>
      <CardFooter className="flex justify-between">
        <span className="font-bold text-lg">${price}</span>
        <Button className="">
          <Link to={`/products/${productId}`}>View Details...</Link>
        </Button>
      </CardFooter>
    </Card>
  )
}
