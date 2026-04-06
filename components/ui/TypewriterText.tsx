"use client";

import { motion } from "framer-motion";

export default function TypewriterText({
  text,
  speed = 0.05,
  className = "",
}: {
  text: string;
  speed?: number;
  className?: string;
}) {
  const chars = text.split("");

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
          variants={{
            hidden: { opacity: 0, y: 4 },
            visible: { opacity: 1, y: 0 },
          }}
          transition={{ duration: 0.15 }}
        >
          {char}
        </motion.span>
      ))}
    </motion.span>
  );
}
