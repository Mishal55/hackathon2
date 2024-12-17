import { useParams } from "next/navigation"
import React from "react";



interface Iproduct{
    title:string,
    price:string,
    id:number,
    ratng?:string,
    img_url:string,
    img1:string,
    img2:string,
    img3:string,


 }
 let product:Iproduct[] =[
    {
        title:"T.Shir With TAPE DETAILS",
        id:1,
        price:"$120",
        img_url:"/image/picture1.png",
        img1:"image/d pic.png",
        img2:"/image/d pics",
        img3:"/image/s.png",
    
        
    },
    {
        title:"SKINNY FIT JEANS",
        id:2,
        price:"$110",
        img_url:"/image/picture 2.png",
        img1:"image/d pic.png",
        img2:"/image/d pics",
        img3:"/image/s.png",
    }, {
        title:"CHECKRED SHIRT",
        id:3,
        price:"$200",
        img_url:"/image/picture3.png",
        img1:"image/d pic.png",
        img2:"/image/d pics",
        img3:"/image/s.png",
    }, {
        title:"SLEEVES STRIPED T.SHIRT",
        id:4,
        price:"$130",
        img_url:"/image/picture4.png",
        img1:"image/d pic.png",
        img2:"/image/d pics",
        img3:"/image/s.png",
    },
 ]



export default function Pro_detail(){
    const params =useParams();
    const id = params.id//
    const item = product.find((items) => items.id ===Number(id))
    if(!item){
        return <h1>Product not found</h1>
    }

    return(
        <div>
            <div>
                <img src={item.img1} alt="productdetail" width={100} height={100} />
                <img src={item.img2} alt="productdetail" width={100} height={100} />
                <img src={item.img3} alt="productdetail" width={100} height={100} />

            </div>

        </div>
    )
}