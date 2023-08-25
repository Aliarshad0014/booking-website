import React from "react";
import Girl from "../Components/Images/Girl.png"
import dress1 from "../Components/Images/dress1.png"
import dress2 from "../Components/Images/dress2.png"
import dress3 from "../Components/Images/dress3.png"

export default function Main() {
    const boxes = [
        {
            id: 1,
            title: "Style",
            paragraph:"Shop The Trendy fashion outfits",
            style:"mt-16 text-black",
            

        },
        {
            id: 2,
            title: "Style",
            paragraph:" Empire Waist",
            image: dress1,
            style:"hover:scale-110 rounded-md transition-all hover:bg-yellow-800 duration-500",

        },
        {
            id: 3,
            title: "Style",
            paragraph:"Assessories yourself",
            image: dress2,
            style:"hover:scale-110 rounded-md transition-all hover:bg-blue-950 duration-500",
        },
        {
            id: 4,
            title: "Style",
            paragraph:"Trendy Jackets",
            image: dress3,
            style:"hover:scale-110 transition-all rounded-md hover:bg-red-950 duration-500"

        },
    ]
    return (
        <div className="mt-16 flex relative justify-around p-5">
            <div className="w-1/2 bg-blue-20 mx-16 p-10 mt-20 relative">
                <div className="absolute w-44 h-40 bg-purple-50 rounded-full"></div>
                <p className="text-6xl relative z-10">The Joy <br />of Dressing</p>
                <p className="py-3 relative">Matching style and class with luxury and comfort</p>
                <button className="rounded-full py-2 px-4 text-white text-sm bg-gradient-to-r from-purple-500 to-purple-700 hover:scale-105 transition-all"> Start Shopping ⇀</button>
            </div>
            <div className="w-1/2 h-[90vh] mt-5  bg-blue-3">
                <img src={Girl} className="w-[100vh]  object-contain" alt="Shopping" />
            </div>

            <div className="flex justify-around w-1/2 h-1/3 bg-gray-200 rounded-3xl absolute bottom-0 left-1/2 transform -translate-x-1/2 translate-y-11 bg-gradient-to-r from-gray-300 to-purple-500 text-white ">

                {boxes.map(({ id, title, paragraph, image, style }, index) => (
                    <div key={id} className={`h-full ml-14 w-1/4 float-left p-4 ${style}`}>
                        {index !== 0 ? (
                            <>
                                <img className="mt-5 w-16" src={image} alt="" />
                                <p className="flex mt-8 text-sm max-w-0 ">{paragraph}</p>
                                <button className="text-xs mt-2 hover:underline rounded-full">Shop Now +</button>
                            </>
                        ) : (
                            <>
                                <p>Shop Your Favourite stores now </p>
                                
                            </>
                        )}
                    </div>
                ))}

            </div>
        </div>
    )
}
