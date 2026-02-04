import React from 'react';
import { motion } from 'framer-motion';

const Hero = () => {
    return (
        <section className="relative h-screen flex items-center justify-center overflow-hidden pt-20">
            {/* Background Effects */}
            <div className="absolute inset-0 overflow-hidden -z-10">
                <div className="absolute top-[20%] left-[10%] w-72 h-72 bg-tekno-primary/20 rounded-full blur-[100px] animate-pulse" />
                <div className="absolute bottom-[20%] right-[10%] w-96 h-96 bg-tekno-secondary/10 rounded-full blur-[100px]" />
            </div>

            <div className="max-w-7xl mx-auto px-4 text-center z-10">
                <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    className="mb-8"
                >
                    {/* Actual Logo */}
                    <div className="w-40 h-40 mx-auto flex items-center justify-center mb-6">
                        <img src="/tekno.png" alt="Unit Teknologi Logo" className="w-full h-full object-contain drop-shadow-[0_0_15px_rgba(26,129,232,0.5)]" />
                    </div>
                </motion.div>

                <motion.h1
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3, duration: 0.8 }}
                    className="text-5xl md:text-7xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-tekno-white via-tekno-secondary to-tekno-primary"
                >
                    UNIT TEKNOLOGI
                </motion.h1>

                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.5, duration: 0.8 }}
                    className="text-xl md:text-2xl text-tekno-slate max-w-2xl mx-auto font-light"
                >
                    Meningkatkan kualitas keilmuan dan mengembangkan inovasi digital masa depan.
                </motion.p>
            </div>
        </section>
    );
};

export default Hero;
