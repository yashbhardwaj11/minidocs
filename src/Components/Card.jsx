import React from "react";
import { FaRegFileAlt } from "react-icons/fa";
import { LuDownload } from "react-icons/lu";
import { IoClose } from "react-icons/io5";
import { motion } from "framer-motion";

function Card({ data, reference, index, deleteItem  }) {
  const isValidColor = (color) => {
    const validColors = [
      "blue",
      "green",
      "red",
      "yellow",
      "purple",
      "orange",
      "pink",
      "brown",
      "teal",
      "cyan",
      "magenta",
      "lime",
      "indigo",
      "violet",
      "amber",
      "black",
      "white",
      "gray",
      "silver",
      "gold",
      "navy",
      "maroon",
      "olive",
      "coral",
      "turquoise",
      "zinc",
      "fuchsia",
      "emrald"
    ];
  
    const lowerCaseColor = color.toLowerCase();
    return validColors.includes(lowerCaseColor);
  };
  

  return (
    <motion.div
      key={index}
      drag
      dragConstraints={reference}
      whileDrag={{ scale: 1.2 }}
      dragElastic={0.1}
      dragTransition={{ bounceStiffness: 100, bounceDamping: 30 }}
      className="relative flex-shrink-0 w-60 h-72 rounded-[45px] bg-zinc-900/90 text-white px-8 py-10 overflow-hidden"
    >
      <FaRegFileAlt />
      <p className="text-sm leading-tight mt-5 font-semibold">{data.desc}</p>
      <div className="footer absolute bottom-0 w-full  left-0">
        <div className="flex items-center justify-between px-8  py-3 mb-3">
          <h5>{data.fileSize}</h5>
          <span
            onClick={() => {
              deleteItem(index)
              
            }
            }
            className="w-7 h-7 bg-zinc-600 rounded-full flex items-center justify-center"
          >
            {data.close ? (
              <IoClose size=".7em" color="#fff" />
            ) : (
              <LuDownload size=".7em" color="#fff" />
            )}
          </span>
        </div>
        {data.tag && data.tag.tagColor && (
          <div
            className={`tag w-full py-4 ${
              isValidColor(data.tag.tagColor)
                ? `bg-${data.tag.tagColor}-600`
                : "bg-red-600"
            } flex items-center justify-center`}
          >
            <h3 className="text-sm font-bold">{data.tag.tagTitle}</h3>
          </div>
        )}
      </div>
    </motion.div>
  );
}

export default Card;
