import React from "react";
import { motion } from "framer-motion";
import { Play, Building2, ChevronDown } from "lucide-react";
import { HeroBackground } from "./HeroBackground";
import { Button } from "./ui/Button";

interface HeroSectionProps {
  onOpenLoan: () => void;
  onOpenVideo: () => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({
  onOpenLoan,
  onOpenVideo,
}) => {
  return (
    <section className="relative w-full min-h-screen snap-start flex items-center justify-center">
      <HeroBackground />

      {/* Header - Top Left (Moved from Right) */}
      <div className="absolute top-0 left-0 p-6 md:p-8 z-30 flex items-center gap-3 text-white">
        <div className="bg-blue-900/80 p-2 rounded-sm backdrop-blur-sm">
          <Building2 size={24} className="text-blue-200" />
        </div>
        <div className="flex flex-col items-start">
          <span className="font-serif font-bold text-lg tracking-wide leading-none">
            Miami Prime
          </span>
          <span className="text-xs uppercase tracking-wider text-blue-200 font-semibold">
            Mortgage LLC
          </span>
        </div>
      </div>

      <div className="relative z-10 w-full max-w-7xl mx-auto px-6 md:px-12 flex flex-col justify-center items-center h-full pt-20 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: false }}
          className="max-w-4xl flex flex-col items-center"
        >
          <div className="inline-block bg-blue-900/90 backdrop-blur-sm px-6 py-2 mb-8 border-b-2 border-blue-400 max-[415px]:px-4 max-[415px]:py-1 max-[415px]:mb-4">
            <span className="text-white tracking-[0.2em] uppercase text-xs font-bold max-[415px]:text-[10px]">
              Préstamos Hipotecarios LLC
            </span>
          </div>

          <h1 className="text-5xl md:text-7xl lg:text-8xl font-serif text-white font-bold leading-tight mb-8 drop-shadow-2xl max-[415px]:text-3xl max-[415px]:mb-4">
            Financia Tu <br />
            <span className="text-blue-200 italic">Sueño en Miami.</span>
          </h1>

          <p className="text-lg md:text-xl text-gray-100 mb-12 max-w-2xl font-light leading-relaxed drop-shadow-lg max-[415px]:text-sm max-[415px]:mb-8">
            Obtener financiamiento para bienes raíces de lujo en Florida nunca
            ha sido tan sencillo. Desde condominios en Brickell hasta mansiones
            en Coral Gables, nos especializamos en soluciones hipotecarias a
            medida.
          </p>

          <div className="flex flex-col sm:flex-row gap-6 items-center justify-center w-full max-[415px]:gap-3">
            <Button
              onClick={onOpenLoan}
              className="shadow-xl shadow-blue-900/30 text-lg py-4 px-12 bg-blue-800 border-blue-800 hover:bg-blue-900 max-[415px]:py-3 max-[415px]:px-8 max-[415px]:text-base max-[415px]:w-full"
            >
              Precalifícate Ahora
            </Button>

            <button
              onClick={onOpenVideo}
              className="group flex items-center gap-4 px-6 py-4 text-white hover:text-blue-200 transition-all max-[415px]:gap-2 max-[415px]:py-2"
            >
              <div className="w-14 h-14 rounded-full border border-white/80 flex items-center justify-center group-hover:bg-white group-hover:text-blue-900 transition-all bg-white/10 backdrop-blur-sm max-[415px]:w-10 max-[415px]:h-10">
                <Play
                  size={20}
                  fill="currentColor"
                  className="ml-1 max-[415px]:w-4 max-[415px]:h-4"
                />
              </div>
              <span className="font-semibold tracking-wide uppercase text-sm max-[415px]:text-xs">
                Ver Video
              </span>
            </button>
          </div>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, y: [0, 10, 0] }}
        transition={{
          delay: 1,
          duration: 2,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 text-white flex flex-col items-center gap-2 cursor-pointer"
        onClick={() =>
          window.scrollBy({ top: window.innerHeight, behavior: "smooth" })
        }
      >
        <span className="text-[10px] uppercase tracking-widest opacity-80 font-semibold">
          Descubre Más
        </span>
        <ChevronDown className="w-6 h-6 opacity-80" />
      </motion.div>
    </section>
  );
};
