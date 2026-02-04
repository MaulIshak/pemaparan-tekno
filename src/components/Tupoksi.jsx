import React from 'react';
import { motion } from 'framer-motion';
import { Target, Briefcase } from 'lucide-react';

const Tupoksi = () => {
    const list = [
        {
            id: 1,
            icon: <Target className="w-8 h-8 text-tekno-primary" />,
            text: "Menciptakan produk berdasarkan kebutuhan-kebutuhan himpunan atau pihak external.",
        },
        {
            id: 2,
            icon: <Briefcase className="w-8 h-8 text-tekno-secondary" />,
            text: "Menjadi wadah untuk anggota himakom yang ingin merasakan pengalaman di dunia industri.",
        }
    ];

    return (
        <section id="tupoksi" className="py-12 md:py-24 bg-tekno-black/50 border-t border-white/5">
            <div className="max-w-7xl mx-auto px-4">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="mb-16 text-center"
                >
                    <h2 className="text-3xl md:text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-tekno-white to-tekno-slate">Tupoksi Unit Teknologi</h2>
                </motion.div>

                <div className="grid md:grid-cols-2 gap-8">
                    {list.map((item, index) => (
                        <motion.div
                            key={item.id}
                            initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.2, duration: 0.6 }}
                            className="p-8 rounded-2xl bg-white/5 border border-white/5 hover:border-tekno-primary/50 transition-colors group"
                        >
                            <div className="bg-white/5 w-16 h-16 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                                {item.icon}
                            </div>
                            <h3 className="text-xl md:text-2xl font-light text-tekno-white">
                                {item.text}
                            </h3>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Tupoksi;
