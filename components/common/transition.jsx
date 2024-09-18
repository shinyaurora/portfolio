"use client";

import { motion } from "framer-motion";

export default function Transition({ children }) {
    return (
        <motion.div
            initial={{ x: -window.innerWidth, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ ease: "easeInOut", duration: 0.75 }}
        >
            {children}
        </motion.div>
    );
}