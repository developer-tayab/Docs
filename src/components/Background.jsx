import {motion} from 'framer-motion'
export default function Background() {
  
  return (
    <>
      <div className="fixed w-full h-full top-0 left-0 z-[2]">
        <div className="absolute top-[5%] w-full text-[26px] text-zinc-600 text-center ">
          Documents
        </div>
        <motion.h1
        initial={{opacity:0}}
        animate={{opacity:1 ,color:"#A77A28"   }}
        transition={{duration:1.5, repeat:Infinity ,repeatType:"reverse"}}
        
        className="absolute top-1/2 left-1/2 -translate-x-[50%] -translate-y-[50%]  text-[13vw]  text-zinc-900 font-semibold">
          Docs.
        </motion.h1>
      </div>
    </>
  );
}
