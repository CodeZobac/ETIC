"use client"

import { motion } from "framer-motion"

const BasicAnimation = () => {
    return (
        <motion.div
        initial={{ opacity: 0, x: -100 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1 }}
        className="w-32 h-32 bg-blue-500 rounded-lg">
        </motion.div>
    )
}
export default BasicAnimation