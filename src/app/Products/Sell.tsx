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
        title:"VERTICAL STRIPED SHIRT",
        id:1,
        price:"$232",
        img_url:"/image/shirt.png",
        
    },
    {
        title:"COURAGE GRAPHIC T-SHIRT",
        id:2,
        price:"$145",
        img_url:"/image/tshirt.png"
    }, {
        title:"LOOSE FIT BERMUDA SHORTS",
        id:3,
        price:"$80",
        img_url:"/image/short.png"
    }, {
        title:"FADED SKINNY JEANS",
        id:4,
        price:"$210",
        img_url:"/image/pent.png"
    },
 ]
  let star =[<FaStar />,<FaStar />,<FaStar />,<FaStar />]
 
 
 export default function Sell (){
    return(
        <div className="w-full h-[500px]">
            <h1 className="text-3xl md:text-4xl font-bold text-center mt-4">TOP SELL</h1>
            <div className="flex flex-col md:flex-row justify-center items-center md:justify-between">
            {
                product.map((data) =>{

                
                    return(
                        <div>
                            <div className="w-[250px] h-[230px] mt-5 bg-[#F0EEED] rounded-[20px]">
                            <img src={data.img_url} alt={data.title} width={100} height={100}
                            className="w-full h-full rounded-[20px]"/>
                            </div>
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