import Link from "next/link";
import { IoMenu, IoSearch } from "react-icons/io5";
import { CgShoppingCart } from "react-icons/cg";
import { SheetSide } from "./Sheet";
import { NavigationMenuDemo } from "./Navigation";

export default function Header(){
    return( 
    <header className=" w-full h-[60px] bg-white flex justify-between items-center">
        <div className="flex justify-center items-center" >
        <SheetSide/>

            <h1 className="text-xl sm:text-3xl font-bold pl-5">SHOP.CO</h1>
        </div>
        {/*navbar */}
        <ul className="hidden md:block">
            <li className="space-x-5 flex items-center">
                <Link href={""}><NavigationMenuDemo/></Link>
                <Link href={""}> On Sale</Link>
                <Link href={""}> New Arrivals</Link>

            </li>
        </ul>
                {/*search bar */}
                <div className="hidden md:block">
                    <div className="flex justify-start items-center w-[370px] h-[40px]  rounded-[62px] bg-[#F0F0F0]">
                    <IoSearch  className="text-xl ml-3"/>
                    <input placeholder="Search here.." className=" w-full h-ful  bg-[#F0F0F0] rounded-[62px]" />
     </div>
                    </div>
             {/*search bar */}
<div className=" flex items-center mr-7 space-x-5">
<CgShoppingCart />

</div>
    </header>
    )
}