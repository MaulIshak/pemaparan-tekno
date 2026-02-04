import React from 'react';
import { motion } from 'framer-motion';
import { Image as ImageIcon } from 'lucide-react';

const Documentation = () => {
    // Generate 6 placeholders
    const items = Array.from({ length: 6 });

    return (
        <section id="dokumentasi" className="py-12 md:py-24 bg-tekno-black relative">
            <div className="max-w-7xl mx-auto px-4">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="mb-16"
                >
                    <h2 className="text-3xl md:text-5xl font-bold mb-4">Dokumentasi</h2>
                    <p className="text-tekno-slate">Galeri Project dan Kegiatan</p>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {items.map((_, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className="aspect-[4/3] bg-white/5 rounded-2xl border border-white/5 flex flex-col items-center justify-center hover:bg-white/10 transition-colors cursor-pointer group"
                        >
                            <ImageIcon className="w-10 h-10 text-tekno-slate/50 group-hover:text-tekno-white transition-colors mb-3" />
                            <span className="text-sm text-tekno-slate/50 font-medium">Project Screenshot {index + 1}</span>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Documentation;
