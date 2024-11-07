import React from 'react';
import { FaPhone, FaWhatsapp } from 'react-icons/fa';

const FloatingBtn = () => {
    return (
        <div>
            <div className="fixed bottom-4 left-4 flex gap-4 w-11/12 mx-auto justify-between">
                {/* Phone Call Button */}
                <button className="bg-green-500 p-3 rounded-full text-white shadow-lg hover:bg-green-600 transition duration-300">
                    <a
                        href="tel:+8801988650873"
                        className="flex items-center text-white text-xs sm:text-base flex-col"
                    >
                        <FaPhone size={24} />
                    </a>
                </button>
                
                {/* WhatsApp Button */}
                <button className="bg-green-500 p-3 rounded-full text-white shadow-lg hover:bg-green-600 transition duration-300">
                    <a
                        href="https://wa.me/+8801988650873"
                        className="text-white text-lg sm:text-2xl"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <FaWhatsapp />
                    </a>
                </button>
            </div>
        </div>
    );
};

export default FloatingBtn;
