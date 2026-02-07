import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X } from 'lucide-react';

const Documentation = () => {
    const [selectedImage, setSelectedImage] = useState(null);

    const items = [
        {
            src: "/dokumentasi-api.jpeg",
            caption: "Dokumentasi API"
        },
        {
            src: "/first-meet.jpeg",
            caption: "First Meet"
        },
        {
            src: "/landing-page-himakom.jpeg",
            caption: "Landing Page Himakom"
        },
        {
            src: "/meet-sprint-mingguan.png",
            caption: "Meet Sprint Mingguan"
        }
    ];

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

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6">
                    {items.map((item, index) => (
                        <motion.div
                            key={index}
                            layoutId={`img-${index}`}
                            onClick={() => setSelectedImage({ ...item, id: index })}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className="group relative aspect-video overflow-hidden rounded-2xl border border-white/10 bg-white/5 cursor-pointer"
                        >
                            <motion.img
                                src={item.src}
                                alt={item.caption}
                                className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100 flex items-end p-6">
                                <span className="text-lg font-medium text-white translate-y-4 transition-transform duration-300 group-hover:translate-y-0">
                                    {item.caption}
                                </span>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>

            <AnimatePresence>
                {selectedImage && (
                    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            onClick={() => setSelectedImage(null)}
                            className="absolute inset-0 bg-black/90 backdrop-blur-sm"
                        />
                        <motion.div
                            layoutId={`img-${selectedImage.id}`}
                            className="relative max-w-5xl w-full aspect-video bg-black rounded-lg overflow-hidden z-10 shadow-2xl"
                        >
                            <button
                                onClick={() => setSelectedImage(null)}
                                className="absolute top-4 right-4 z-20 p-2 bg-black/50 text-white rounded-full hover:bg-white/20 transition-colors backdrop-blur-sm"
                            >
                                <X className="w-6 h-6" />
                            </button>
                            <img
                                src={selectedImage.src}
                                alt={selectedImage.caption}
                                className="w-full h-full object-contain"
                            />
                            <div className="absolute bottom-0 inset-x-0 p-6 bg-gradient-to-t from-black/90 via-black/50 to-transparent">
                                <h3 className="text-xl md:text-2xl font-bold text-white text-center">
                                    {selectedImage.caption}
                                </h3>
                            </div>
                        </motion.div>
                    </div>
                )}
            </AnimatePresence>
        </section>
    );
};

export default Documentation;
