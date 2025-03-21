import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface LoaderProps {
  onComplete?: () => void; // Make `onComplete` optional
}

export function Loader({ onComplete = () => {} }: LoaderProps) {
  const [showLoader, setShowLoader] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowLoader(false);
      onComplete(); // Ensure it runs only if defined
    }, 5000);

    return () => clearTimeout(timer);
  }, [onComplete]);

  return (
    <AnimatePresence>
      {showLoader && (
        <motion.div
          className="fixed inset-0 flex items-center justify-center bg-black z-50"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1 }}
        >
          <div className="flex gap-2">
            {[1, 2, 3, 4, 5].map((_, index) => (
              <motion.div
                key={index}
                className="w-2 sm:w-3 bg-red-600 rounded-full"
                initial={{ height: "10px" }}
                animate={{ height: ["10px", "30px", "10px"] }}
                transition={{
                  duration: 0.8,
                  repeat: Infinity,
                  repeatType: "reverse",
                  delay: index * 0.15,
                }}
              />
            ))}
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
