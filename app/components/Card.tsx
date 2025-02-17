"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ThumbsUp, Share2, Download } from "lucide-react";

export default function InteractiveCard() {
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    if (showModal) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  }, [showModal]);

  return (
    <div className="flex justify-center mt-6">
      <motion.div
        whileHover={{ scale: 1.05, boxShadow: "0px 5px 15px rgba(0,0,0,0.2)" }}
        whileTap={{ scale: 0.95 }}
        className="cursor-pointer"
        onClick={() => setShowModal(true)}
      >
        <div className="w-80 h-32 bg-orange-500 opacity-90 shadow-lg rounded-lg p-4 flex flex-col justify-between transition-all duration-300 hover:opacity-100 text-white">
          <h2 className="text-lg font-bold">Support Our Mission</h2>
          <p className="text-black text-sm">Click to learn more</p>
          <div className="flex justify-around text-white mt-2">
            <ThumbsUp className="w-5 h-5 cursor-pointer hover:text-gray-200 object-fill transition-all duration-300" />
            <Share2 className="w-5 h-5 cursor-pointer hover:text-gray-200 transition-all duration-300" />
            <Download className="w-5 h-5 cursor-pointer hover:text-gray-200 transition-all duration-300" />
          </div>
        </div>
      </motion.div>

      <AnimatePresence>
        {showModal && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50"
            onClick={() => setShowModal(false)}
          >
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              className="bg-white p-6 rounded-lg shadow-2xl max-w-md w-full"
              onClick={(e) => e.stopPropagation()}
            >
              <h3 className="text-2xl font-bold mb-4">Support Us</h3>
              <p className="text-gray-600">Help us protect and care for cows by contributing to our foundation.</p>
              <button
                className="mt-4 w-full bg-red-500 hover:bg-red-600 text-white py-2 px-4 rounded-lg transition-all duration-300"
                onClick={() => setShowModal(false)}
              >
                Close
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
