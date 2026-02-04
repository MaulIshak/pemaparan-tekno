import React from 'react';
import { motion } from 'framer-motion';

const About = () => {
    return (
        <section id="definisi" className="py-12 md:py-24 bg-tekno-black relative overflow-hidden">
            {/* Decorative */}
            <div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-l from-tekno-slate/5 to-transparent skew-x-12" />

            <div className="max-w-4xl mx-auto px-4 relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="text-center"
                >
                    <h2 className="text-sm font-bold tracking-[0.2em] text-tekno-primary uppercase mb-6">Apa Itu Unit Teknologi?</h2>
                    <p className="text-3xl md:text-5xl font-medium leading-tight text-white">
                        <span className="text-tekno-primary">Unit Teknologi</span>, berfokus meningkatkan kualitas keilmuan di bidang informatika dan mengembangkan minat dan bakatnya di bidang teknologi.
                    </p>
                </motion.div>
            </div>
        </section>
    );
};

export default About;
