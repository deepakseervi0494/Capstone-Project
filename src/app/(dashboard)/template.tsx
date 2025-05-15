"use client";

import React, { ReactNode } from "react";
import { motion } from "framer-motion";

interface AnimateOnLoadProps {
  children: ReactNode;
  animate?: boolean;
}

const AnimateOnLoad: React.FC<AnimateOnLoadProps> = ({ children, animate = true }) => {
  return animate ? (
    <motion.div
      initial={{ scale: 0.9, opacity: 0, filter: "blur(10px)" }}
      animate={{ scale: 1, opacity: 1, filter: "blur(0px)" }}
      transition={{ duration: 0.35 }}
    >
      {children}
    </motion.div>
  ) : (
    <div>{children}</div> // No animation if animate is false
  );
};

export default AnimateOnLoad;
