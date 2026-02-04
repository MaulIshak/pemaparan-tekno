import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ZoomIn } from 'lucide-react';

const Structure = () => {
    const [isZoomed, setIsZoomed] = useState(false);

    return (
        <section id="struktur" className="py-12 md:py-24 bg-tekno-black/50 border-t border-white/5 relative">
            <div className="max-w-7xl mx-auto px-4 text-center">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="mb-12"
                >
                    <h2 className="text-3xl md:text-5xl font-bold mb-4">Struktur Unit Teknologi</h2>
                    <p className="text-tekno-slate">Organisasi dan Hierarki</p>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    className="relative max-w-5xl mx-auto bg-tekno-black/30 rounded-3xl border border-white/10 p-2 md:p-4 shadow-2xl backdrop-blur-sm group cursor-pointer"
                    onClick={() => setIsZoomed(true)}
                >
                    <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity bg-black/20 rounded-xl z-10 pointer-events-none">
                        <div className="bg-black/50 p-3 rounded-full backdrop-blur-md">
                            <ZoomIn className="w-6 h-6 text-white" />
                        </div>
                    </div>
                    <img
                        src="/src/assets/struktur.png"
                        alt="Struktur Organisasi Unit Teknologi"
                        className="w-full h-auto rounded-xl shadow-lg border border-white/5 hover:scale-[1.01] transition-transform duration-500"
                    />
                </motion.div>
            </div>

            {/* Full Screen Lightbox */}
            <AnimatePresence>
                {isZoomed && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="fixed inset-0 z-[100] flex items-center justify-center bg-black/90 p-4 backdrop-blur-md"
                        onClick={() => setIsZoomed(false)}
                    >
                        <button
                            className="absolute top-4 right-4 p-3 rounded-full bg-white/10 text-white hover:bg-white/20 transition-colors"
                            onClick={() => setIsZoomed(false)}
                        >
                            <X className="w-8 h-8" />
                        </button>
                        <motion.img
                            initial={{ scale: 0.8 }}
                            animate={{ scale: 1 }}
                            exit={{ scale: 0.8 }}
                            src="/src/assets/struktur.png"
                            alt="Struktur Full Screen"
                            className="max-w-full max-h-[90vh] object-contain rounded-lg shadow-2xl"
                            onClick={(e) => e.stopPropagation()} // Prevent close when clicking image
                        />
                    </motion.div>
                )}
            </AnimatePresence>
        </section>
    );
};

export default Structure;
