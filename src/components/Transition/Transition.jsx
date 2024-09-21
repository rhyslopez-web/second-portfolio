import { motion } from "framer-motion"

const Transition = (OgComponent) => {
  return () => (
    <>
    <OgComponent/>
    <motion.div
    className="slide-in fixed top-0 left-0 w-full h-screen origin-bottom bg-black z-50"
    initial={{scaleY: 0}}
    animate={{scaleY: 0}}
    exit={{scaleY: 1}}
    transition={{duration: 1, ease: [0.22, 1, 0.36, 1]}}
    />
    <motion.div
    className="slide-out fixed top-0 left-0 w-full h-screen origin-top bg-black z-50"
    initial={{scaleY: 1}}
    animate={{scaleY: 0}}
    exit={{scaleY: 0}}
    transition={{duration: 1, ease: [0.22, 1, 0.36, 1]}}
    />
</>
  )
}

export default Transition