import { motion } from "framer-motion";

const our_work = () => {
    return (
        <motion.div initial='initial' animate='animate' exit={{opacity:0}}>
            <h1>our work</h1>
        </motion.div>
    )
}

export default our_work
