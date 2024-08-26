import Hero from "@/components/Hero/Hero";
import Section_title from "@/components/Section_title/Section_title";
import { Metadata } from "next";
import Image from "next/image";
import latest from '../public/assets/images/Home/latest.png'
import best_seller from '../public/assets/images/Home/best.png'
import Exchange from '../public/assets/icon/Exchange.png'
import Returns from '../public/assets/icon/Return.png'
import Support from '../public/assets/icon/support.png'
import Subscription from "@/components/Subscription/Subscription";


export const metadata: Metadata = {
  title: "Bangladesh Easy E-commerce",
  description: "Generated by create next app",
};

export default function Home() {
  return (
    <div>

      {/* Hero Section */}
      <div>
       <Hero />
      </div>

      {/* LATEST COLLECTIONS */}
      <div className="my-20 space-y-5">
        <Section_title subTitle="LATEST" title="COLLECTIONS" description={"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the."} />
        <div >
          <Image src={latest} alt="" />
        </div>
      </div>

      
      {/* LATEST COLLECTIONS */}
      <div className="my-10 lg:my-20 space-y-5">
        <Section_title subTitle="BEST " title="SELLERS" description={"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the."} />
        <div >
          <Image src={best_seller} alt="" />
        </div>
      </div>

      {/* Policy */}

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 p-5">
          <div className="flex flex-col items-center justify-center space-y-2">
            <Image src={Exchange} width={50} alt="" />
            <h4 className="font-semibold">Easy Exchange Policy</h4>
            <p className="text-gray-500">We offer hassle free exchange policy</p>
          </div>

          <div className="flex flex-col items-center justify-center space-y-2 p-5 border-l border-r">
            <Image src={Returns} width={50} alt="" />
            <h4 className="font-semibold">7 Days Return Policy</h4>
            <p className="text-gray-500">We provide 7 days free return policy</p>
          </div>

          <div className="flex flex-col items-center justify-center space-y-2 p-5">
            <Image src={Support} width={50} alt="" />
            <h4 className="font-semibold">Best customer support</h4>
            <p className="text-gray-500">we provide 24/7 customer support</p>
          </div>
      </div>

      {/* Subscribe  */}

      <div>
        <Subscription />
      </div>
    </div>
  )
}
