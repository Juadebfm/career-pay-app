import React from "react";
import { motion } from "framer-motion";
import Marquee from "react-fast-marquee";

const Partners = () => {
  const partners = [
    { src: "/image8.png", alt: "Spectranet" },
    { src: "/image9.png", alt: "Partner 2" },
    { src: "/image10.png", alt: "CreditPRO" },
    { src: "/image11.png", alt: "Dega" },
    { src: "/image13.png", alt: "Uridium Technologies" },
    { src: "/image14.png", alt: "Partner 6" },
  ];

  return (
    <section className="min-h-[140px] container_pd py-16">
      <motion.div
        className="relative"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        {/* Optional: Gradient overlays for fade effect at edges */}
        <div className="absolute left-0 top-0 w-16 h-full bg-gradient-to-r from-white via-white/60 to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 top-0 w-16 h-full bg-gradient-to-l from-white via-white/60 to-transparent z-10 pointer-events-none" />

        <Marquee
          speed={50} // Adjust speed (pixels per second)
          pauseOnHover={true} // Pause when user hovers
          gradient={false} // We're using custom gradients above
          direction="left" // Right to left direction
        >
          {partners.map((partner, index) => (
            <motion.div
              key={index}
              className="relative group cursor-pointer mx-8" // mx-8 for spacing between items
              whileHover={{
                scale: 1.15,
                transition: { duration: 0.3 },
              }}
              whileTap={{ scale: 0.95 }}
            >
              <motion.img
                src={partner.src}
                alt={partner.alt}
                className="h-16 w-auto object-contain filter grayscale transition-all duration-300 group-hover:grayscale-0 group-hover:brightness-110"
                style={{
                  maxWidth: "160px",
                  minHeight: "40px",
                  minWidth: "100px",
                }}
              />

              {/* Glow effect on hover */}
              <motion.div
                className="absolute inset-0 rounded-lg bg-gradient-to-r from-blue-500/0 to-purple-500/0 group-hover:from-blue-500/20 group-hover:to-purple-500/20 transition-all duration-300 -z-10 blur-xl"
                initial={{ opacity: 0 }}
                whileHover={{ opacity: 1 }}
              />
            </motion.div>
          ))}
        </Marquee>
      </motion.div>
    </section>
  );
};

export default Partners;
