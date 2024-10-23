import { FaFileAlt } from "react-icons/fa";
import { MdDownloadForOffline } from "react-icons/md";
import { IoMdCloseCircleOutline } from "react-icons/io";
import { motion, useDragControls } from "framer-motion";


export default function Card({ data }) {
  const controls = useDragControls();
  return (
    <motion.div
      drag
      dragControls={controls}
      dragConstraints={{ left: 30, right: 650, top: 10, bottom: 450 }}
      dragElastic={0.5}
      whileDrag={{ scale: 1.1 }}
      dragTransition={{ bounceStiffness: 200, bounceDamping: 20 }}
      className="relative cursor-pointer flex-shrink-0 overflow-hidden top-0 left-0 w-60 h-[280px] pt-5  px-[30px] rounded-[45px] bg-zinc-900/90 text-white"
    >
      <div className="">
        <FaFileAlt />
      </div>

      <p className="mt-5 font-bold font-roboto text-sm  leading-tight ">
        {data.disc}
      </p>

      <div className="footer w-[100%] absolute left-0 bottom-[50px]  px-[30px] ">
        <div className="flex justify-between items-center  ">
          <h4 className="text-lg">{data.mb}</h4>
          <div className="rounded-[50%] flex items-center justify-center bg-zinc-700">
            {data.close == true ? (
              <MdDownloadForOffline size="1.3em" color="#fff" />
            ) : (
              <IoMdCloseCircleOutline size="1.3em" color="#fff" />
            )}
          </div>
        </div>
      </div>
      {data.tag.isOpen == true ? (
        <div className="absolute left-0 bottom-0 w-full h-[40px] bg-green-600">
          <h4 className="text-center leading-9">{data.tag.tagName}</h4>
        </div>
      ) : (
        <div className="absolute text-center left-0 bottom-0 w-full h-[40px] bg-blue-600">
          <h4 className="leading-9">{data.tag.tagName} </h4>
        </div>
      )}
    </motion.div>
  );
}
