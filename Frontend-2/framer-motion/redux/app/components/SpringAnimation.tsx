"use client"

import { motion } from "framer-motion"

const SpringAnimation = () => {
    return (
        <div className="min-h-screen flex items-center justify-center">
            <motion.div
            initial={{ scale : 0.5 }}
            animate={{ scale : 1 }}
            transition={{ type: 'spring', stiffness: 100, damping: 10 }}
            className="w-32 h-32 bg-blue-500 rounded-lg">
            </motion.div>
        </div>
    )
}
export default SpringAnimation  