"use client"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { IoMenu, IoSearch } from "react-icons/io5";

import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet"
import Link from "next/link";
import { NavigationMenuDemo } from "./Navigation";

const SHEET_SIDES = ["left"] as const

type SheetSide = (typeof SHEET_SIDES)[number]

export function SheetSide() {
  return (
    <div className="grid gap-2">
      {SHEET_SIDES.map((side) => (
        <Sheet key={side}>
          <SheetTrigger asChild>
            <Button className=" bg-white text-black lg:hidden">
            <IoMenu/>
            </Button>
          </SheetTrigger>
          <SheetContent side={side}>
            
          <SheetHeader>
            <SheetTitle>SHOP.CO</SheetTitle>

          </SheetHeader>
             {/*navbar */}
        <ul className="">
            <li className="grid grid-cols-1 gap-y-4 pt-4">
            <Link href={""}> <NavigationMenuDemo/></Link>
                <Link href={""}> New Arrivals</Link>
                <Link href={""}> New Arrivals</Link>
                <Link href={""}> New Arrivals</Link>

            </li>
        </ul>
          </SheetContent>
        </Sheet>
      ))}
    </div>
  )
}
