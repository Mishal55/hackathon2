export default function Hero(){
    return( 
    <main className="w-full h-full md:h-[500px] flex flex-col md:flex-row justify-between  items-start bg-[#F2F0F1]">
        {/*left sec */}
        <div className=" w-full md:w-[500px] mt-3 md:mt-10 md:ml-10 pl-3">
            <h1 className="text-2xl md:text-4xl font-extrabold ">FIND CLOTHES THAT MATCHES YOUR STYLE</h1>
            <p className="text-sm md:mt-3">Browser through our divers range of meticulously crafted garments,
             Designed to bring out your individuality and cater to your sense of style.</p>
             <button className="bg-black py-2 px-8 text-sm text-white rounded-[16px] mt-5">Shop Now</button>
        </div>

           {/*right sec */}
           <div className="relative">
        <img src="/image/Hero.png" alt="profile"
        className=" w-[500px] mr"
        height={200}
        width={200} />


                 {/*star*/}
                 <img src="/image/stars.png" alt="star"
        className=" w-[50px] md:w-[100px] absolute top-[100px] left-10 md:top-[300px]  md:left-[-100px]"
        height={200}
        width={200} />

<img src="/image/star.png" alt="star"
        className="w-[60px] md:[100px] absolute top-0 md:to-[50px] right-[100px] md:right-[30px]"
        height={100}
        width={100} />
           </div>
    </main>
    )
}
