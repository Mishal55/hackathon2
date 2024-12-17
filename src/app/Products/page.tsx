import Link from "next/link"
import { FaStar } from "react-icons/fa"

 
 interface Iproduct{
    title:string,
    price:string,
    id:number,
    ratng?:string,
    img_url:string,
    
 }
 let product:Iproduct[] =[
    {
        title:"T.Shir With TAPE DETAILS",
        id:1,
        price:"$120",
        img_url:"/image/picture1.png",
        
    },
    {
        title:"SKINNY FIT JEANS",
        id:2,
        price:"$110",
        img_url:"/image/picture 2.png"
    }, {
        title:"CHECKRED SHIRT",
        id:3,
        price:"$200",
        img_url:"/image/picture3.png"
    }, {
        title:"SLEEVES STRIPED T.SHIRT",
        id:4,
        price:"$130",
        img_url:"/image/picture4.png"
    },
 ]
  let star =[<FaStar />,<FaStar />,<FaStar />,<FaStar />]
 
 
 export default function Product(){
    return(
        <div className="w-full h-[500px]">
            <h1 className="text-3xl md:text-4xl font-bold text-center mt-4">NEW ARRIVALS</h1>
            <div className="flex flex-col md:flex-row justify-center items-center md:justify-between">
            {
                product.map((data) =>{

                
                    return(
                        <div key={data.id}>
                            <Link href={`/Products ${data.id}`}>
                            <div className="w-[250px] h-[230px] mt-5 bg-[#F0EEED] rounded-[20px]">
                            <img src={data.img_url} alt={data.title} width={100} height={100}
                            className="w-full h-full rounded-[20px]"/>
                            </div>
                            </Link>
                            <div>
                            <p className="text-lg mt-2 font-bold">{data.title}</p>
                            <p className=" flex text-yellow-300">{star}</p>
                            <p>{data.price}</p>
                            </div>
                        </div>
                    )
 })
            }
        </div>
</div>
    )
}