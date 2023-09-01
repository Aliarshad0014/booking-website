import React from "react";
import bestSeller from "../Components/Images/bestseller.png"
import bestprice from "../Components/Images/bestprice.png"
import hot from "../Components/Images/hot.png"

export default function Packages() {
    const packs = [
        {
            id: 1,
            style: "",
            img: bestprice,
            heading: "Best Price"

        },
        {
            id: 2,
            style: "",
            img: bestSeller,
            heading: "Best Seller"


        },
        {
            id: 3,
            style: "",
            img: hot,
            heading: "Hot"

        },
    ]
    return (
        <div className="h-screen flex flex-col items-center justify-center mt-56">
            <div className="h-1/3 w-full  flex justify-center items-center">
                <h1 className="text-4xl mt-6 text-[#2B124C] font-comfortaa ">Our Packages</h1>
                
            <div className="f text-4xl bg-yellow-400"></div>
            </div>
            <div className="absolute lg:h-2/3 lg:w-2/3 flex-col lg:flex-row h-full w-full flex justify-center items-center">
                {
                    packs.map(({ id, style, img,heading }) => (

                        <div key={id} className={`lg:h-4/5 h-1/2 w-1/2 lg:w-full bg-[#522B5B] rounded-xl m-12 ${style} `}>
                            <h1 className="flex justify-center text-xl text-purple-50 font-semibold  mt-4 font-ops">{heading}</h1>
                            <p className="flex mt-8 text-white p-6 text-sm">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Temporibus laborum aut blanditiis ducimus assumenda nulla unde rerum consequatur neque corrupti voluptas, officia, eligendi repudiandae.</p>
                            <button key={id} className="absolute bottom-0 w-24 h-24 ml-32 transform -translate-x-1/2 bg-white hover:bg-[#2B124C] hover:scale-110 duration-300 py-2 px-4 translate-y-2 text-white rounded-full">
                                <img className="ml-2" src={img} width={50} alt="" />
                            </button>

                        </div>

                    ))

                }
            </div>
            <div className="h-full w-full bg-gradient-to-b from-white to-purple-200">
                
            </div>
        </div>

    )
}