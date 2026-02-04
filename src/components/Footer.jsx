import React from 'react';

const Footer = () => {
    return (
        <footer className="py-8 bg-[#020305] border-t border-white/5">
            <div className="max-w-7xl mx-auto px-4 text-center">
                <div className="flex items-center justify-center gap-2 mb-4">
                    <div className="w-8 h-8 flex items-center justify-center">
                        <img src="/src/assets/tekno.png" alt="Logo" className="w-full h-full object-contain" />
                    </div>
                    <div className="font-bold tracking-widest text-white">
                        <span>UNIT </span>
                        <span className="text-tekno-primary">TEKNOLOGI</span>
                    </div>
                </div>
                <p className="text-tekno-slate text-sm">
                    © {new Date().getFullYear()} Unit Teknologi. Made with React & Tailwind.
                </p>
            </div>
        </footer>
    );
};

export default Footer;
