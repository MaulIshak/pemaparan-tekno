import React from 'react';
import { motion } from 'framer-motion';
import { GraduationCap, Code, Instagram } from 'lucide-react';

const Activities = () => {
    const activities = [
        {
            title: "Teknocamp",
            icon: <GraduationCap className="w-10 h-10 text-tekno-primary" />,
            description: "Program pelatihan intensif selama 1 bulan untuk staff muda terpilih sebelum terjun ke proyek riil. Kawah candradimuka bagi talenta baru.",
            color: "from-tekno-primary/20 to-tekno-primary/5"
        },
        {
            title: "Himakom App Development (HAD)",
            icon: <Code className="w-10 h-10 text-tekno-lightBlue" />,
            description: "Pergerakan inti (Core Movement). Menciptakan solusi digital berupa aplikasi untuk internal Himakom, institusi Polban, hingga pihak eksternal seperti UMKM dan Perusahaan.",
            color: "from-tekno-lightBlue/20 to-tekno-lightBlue/5"
        },
        {
            title: "Tech Spotlight",
            icon: <Instagram className="w-10 h-10 text-pink-500" />,
            description: "Wajah Unit Teknologi di media sosial. Tidak hanya promosi, tetapi juga menyajikan konten edukatif, informatif, dan hiburan (meme) seputar teknologi.",
            color: "from-purple-500/20 to-pink-500/5"
        }
    ];

    return (
        <section id="pergerakan" className="py-12 md:py-24 bg-tekno-black relative">
            <div className="max-w-7xl mx-auto px-4 relative z-10">
                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    className="mb-16 text-center"
                >
                    <span className="text-tekno-primary tracking-widest uppercase text-sm font-bold">Pergerakan</span>
                    <h2 className="text-3xl md:text-5xl font-bold mt-2">Ada Apa di Unit Teknologi?</h2>
                </motion.div>

                <div className="grid md:grid-cols-3 gap-6">
                    {activities.map((act, index) => (
                        <motion.div
                            key={act.title}
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.2 }}
                            className={`p-1 rounded-3xl bg-gradient-to-b ${act.color} from-transparent p-[1px]`}
                        >
                            <div className="h-full bg-[#0A0E14] rounded-[22px] p-8 hover:bg-[#0F141C] transition-colors">
                                <div className="mb-6 bg-white/5 w-fit p-4 rounded-2xl">
                                    {act.icon}
                                </div>
                                <h3 className="text-2xl font-bold mb-4 text-white">{act.title}</h3>
                                <p className="text-tekno-slate leading-relaxed">
                                    {act.description}
                                </p>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Activities;
