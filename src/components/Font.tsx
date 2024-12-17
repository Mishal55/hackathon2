//import font
import{Playfair_Display,Cinzel,Bodoni_Moda,Prata,Montserrat} from 'next/font/google'
const Playfair = Playfair_Display({subsets:['latin']});
const Cinze = Cinzel({subsets:['latin']});
const Monserra = Montserrat({subsets:['latin']});
const Prat = Prata({subsets:['latin'],weight:'400'});
const Bodoni = Bodoni_Moda ({subsets:['latin']});

export default function Fonts(){
    return ( 

    
    <div className="bg-black w-full h-[122px] flex justify-center space-x-5 md:justify-between items-center px-6 flex-wrap">
        <h1 className={`${Playfair.className} text-white text-2xl md:text-4xl`}>VERCASE</h1>
        <h1 className={`${Cinze.className} text-white text-2xl md:text-4xl`}>ZARA</h1>
        <h1 className={`${Bodoni.className} text-white text-2xl md:text-4xl`}>GUCCI</h1>
        <h1 className={`${Prat.className} text-white text-2xl md:text-4xl`}>PRADA</h1>
        <h1 className={`${Monserra.className} text-white text-2xl md:text-4xl`}>Calvin klein</h1>

    </div>
    )
}