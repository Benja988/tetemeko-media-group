// "use client";

// import { motion } from "framer-motion";
// import { useEffect, useState, useRef } from "react";
// import { Button } from "@/components/ui/button";
// import Typewriter from "typewriter-effect";

// export function Hero() {
//   const videoRef = useRef<HTMLVideoElement>(null);
//   const [offsetY, setOffsetY] = useState(0);

//   // Parallax effect on scroll
//   useEffect(() => {
//     const handleScroll = () => setOffsetY(window.scrollY * 0.5);
//     window.addEventListener("scroll", handleScroll);
//     return () => window.removeEventListener("scroll", handleScroll);
//   }, []);

//   // Pause video when out of view
//   useEffect(() => {
//     const observer = new IntersectionObserver(
//       ([entry]) => {
//         if (videoRef.current) {
//           if (entry.isIntersecting) {
//             videoRef.current.play();
//           } else {
//             videoRef.current.pause();
//           }
//         }
//       },
//       { threshold: 0.3 }
//     );

//     if (videoRef.current) observer.observe(videoRef.current);
//     return () => observer.disconnect();
//   }, []);

//   return (
//     <section className="relative w-full min-h-screen flex flex-col justify-center items-center text-center bg-black text-white px-6 md:px-10 overflow-hidden">
//       {/* Gradient Background */}
//       <div className="absolute inset-0 bg-gradient-to-b from-black via-gray-900 to-black opacity-80"></div>

//       {/* Parallax Video Background */}
//       <video
//         ref={videoRef}
//         autoPlay
//         loop
//         muted
//         playsInline
//         poster="/background1.jpg"
//         className="absolute inset-0 w-full h-full object-cover opacity-10"
//         style={{ transform: `translateY(${offsetY * 0.1}px)` }}
//         aria-hidden="true"
//       >
//         <source src="/test1.mp4" type="video/mp4" />
//       </video>

//       <div className="relative z-10 max-w-4xl">
//         {/* Hero Title with Typed Effect */}
//         <motion.h1
//           className="text-4xl sm:text-6xl md:text-7xl font-extrabold leading-tight tracking-tight"
//           initial={{ opacity: 0, y: 20 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.7 }}
//         >
//           <Typewriter
//             options={{
//               strings: ["The Future of Media is Here", "Experience a New Era of Broadcasting"],
//               autoStart: true,
//               loop: true,
//               delay: 75,
//               deleteSpeed: 40,
//             }}
//           />
//         </motion.h1>

//         <p className="text-lg md:text-xl text-gray-400 mt-4 max-w-2xl mx-auto">
//           Experience seamless live streaming, up-to-the-minute news, and exclusive content like never before.
//         </p>

//         {/* CTA Buttons with Glow Effect */}
//         <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
//           <Button className="px-6 py-3 text-lg font-semibold bg-blue-600 hover:bg-blue-500 rounded-full shadow-lg transition-all duration-300 transform hover:scale-105 hover:shadow-blue-500/50">
//             Get Started
//           </Button>
//           <Button className="px-6 py-3 text-lg font-semibold bg-gray-800 hover:bg-gray-700 rounded-full shadow-lg transition-all duration-300 transform hover:scale-105 hover:shadow-gray-500/50">
//             Learn More
//           </Button>
//         </div>
//       </div>

//       {/* Feature Cards with Glassmorphism */}
//       <motion.div
//         className="mt-12 flex flex-col gap-6 w-full max-w-3xl"
//         initial={{ opacity: 0, y: 30 }}
//         animate={{ opacity: 1, y: 0 }}
//         transition={{ duration: 0.8, delay: 0.3 }}
//       >
//         <FeatureCard title="🎧 Live Streaming" description="Tune in to real-time broadcasts anywhere, anytime." />
//         <FeatureCard title="📰 Latest News" description="Stay updated with breaking stories and exclusive insights." />
//         <FeatureCard title="📅 Upcoming Shows" description="Explore upcoming content and exclusive premieres." />
//       </motion.div>
//     </section>
//   );
// }

// // Feature Card with Glassmorphism
// function FeatureCard({ title, description }: { title: string; description: string }) {
//   return (
//     <motion.div
//       whileHover={{ scale: 1.02, backgroundColor: "rgba(31, 41, 55, 0.6)", backdropFilter: "blur(10px)" }}
//       className="w-full bg-gray-900/50 border border-gray-700 p-6 rounded-xl shadow-lg text-left backdrop-blur-md transition-all duration-300"
//     >
//       <h3 className="text-2xl font-semibold text-white">{title}</h3>
//       <p className="mt-2 text-gray-400">{description}</p>
//     </motion.div>
//   );
// }
