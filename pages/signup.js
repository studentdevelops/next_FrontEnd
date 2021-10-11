import { motion } from "framer-motion"

const signup = () => {
  return (
    <motion.div initial='initial' animate='animate' exit={{opacity:0}}>
     <form>
         <label htmlFor="name">Name</label>
         <input id="name" type="text" autoComplete="name" required />
         <button type="submit">Register</button>
     </form>  
    </motion.div>
)
}

export default signup
