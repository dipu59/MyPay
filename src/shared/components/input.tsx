"use client"
import React from 'react'
import {motion} from 'framer-motion'
interface InputProps{
  placeholder: string;
  type: string;
  label: string;
}
const Input = ({placeholder , type , label}: InputProps) => {
  return (
    <div className="max-w-[364px] w-full mb-8 z-40">
      <motion.label
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, ease: "easeInOut" }}
        viewport={{ once: false, amount: 0.31 }}
        className=" inputLabel "
      >
        {label}
      </motion.label>
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeInOut" }}
        viewport={{ once: false, amount: 0.31 }}
      >
        <motion.input
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeInOut" }}
          viewport={{ once: false, amount: 0.31 }}
          className=" infoInput inputGradient"
          placeholder={placeholder}
          type={type}
        />
      </motion.div>
    </div>
  );
}

export default Input
