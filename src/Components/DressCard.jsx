import React from "react";

export default function DressCard(props) {
    return (
        <div className="w-40 cursor-pointer">
            <div className="h-56 flex p-8 items-center border-2 border-gray-200">
                <img className=" flex hover:scale-110 duration-500" src={props.img} alt="" />
            </div>
            <div className="mt-2">
                <p className="text-xs text-gray-400">{props.title}</p>
                <p className="text-xs max-w-xs font-semibold">{props.disc}</p>
                <p className="">{props.price}</p> 
            </div>
        </div>

    );
}
