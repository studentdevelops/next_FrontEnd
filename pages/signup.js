import { motion } from "framer-motion";

function Form(){
    const signup = event => {
        event.preventDefault()
        
        const res = await fetch('/api/register.js', {
            body: JSON.stringify({
              name: event.target.name.value
            }),
            headers: {
              'Content-Type': 'application/json'
            },
            method: 'POST'
          })
      
        const result = await res.json()
        // result.user => 'Ada Lovelace'

    }

    return (
           <motion.div initial='initial' animate='animate' exit={{opacity:0}}>
            <form onSubmit={registerUser}>
                <label htmlFor="name">Name</label>
                <input id="name" type="text" autoComplete="name" required />
                <button type="submit">Register</button>
            </form>  
           </motion.div>
    )
}

export default signup
