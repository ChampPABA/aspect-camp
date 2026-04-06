"use client";

import { useMemo } from "react";
import { motion } from "framer-motion";

const charVariants = {
  hidden: { opacity: 0, y: 4 },
  visible: { opacity: 1, y: 0 },
};

export default function TypewriterText({
  text,
  speed = 0.05,
  className = "",
}: {
  text: string;
  speed?: number;
  className?: string;
}) {
  const chars = useMemo(() => text.split(""), [text]);

  return (
    <motion.span
      className={className}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0 }}
      variants={{
        hidden: {},
        visible: { transition: { staggerChildren: speed } },
      }}
    >
      {chars.map((char, i) => (
        <motion.span
          key={i}
          variants={charVariants}
          transition={{ duration: 0.15 }}
        >
          {char}
        </motion.span>
      ))}
    </motion.span>
  );
}
