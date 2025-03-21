import { motion } from "framer-motion";

export function Loader() {
  return (
    <div className="flex items-center justify-center w-full h-screen bg-primary">
      <div className="flex gap-2">
        {[1, 2, 3, 4, 5].map((bar, index) => (
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
    </div>
  );
}
