import React from 'react'
import { motion, AnimatePresence } from 'framer-motion'

export default function DemoRequestModal({ open, onClose }) {
  return (
    <AnimatePresence>
      {open && (
        <motion.div
          className="fixed inset-0 z-60 flex items-center justify-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <div className="absolute inset-0 bg-black/60" onClick={onClose} />
          <motion.div
            className="relative bg-white/5 rounded-lg p-6 max-w-lg w-full"
            initial={{ y: 20 }}
            animate={{ y: 0 }}
            exit={{ y: 20 }}
          >
            <h3 className="text-lg font-semibold">Request a Demo</h3>
            <p className="mt-2 text-sm text-gray-300">Fill out the form to request a demo (placeholder).</p>
            <div className="mt-4 flex justify-end">
              <button onClick={onClose} className="px-3 py-1 bg-blue-600 rounded-md">
                Close
              </button>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
