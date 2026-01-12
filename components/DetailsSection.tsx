import React from "react";
import { motion } from "framer-motion";
import {
  ArrowRight,
  DollarSign,
  Home,
  Percent,
  ChevronDown,
} from "lucide-react";
import { Button } from "./ui/Button";

interface DetailsSectionProps {
  onOpenLoan: () => void;
}

export const DetailsSection: React.FC<DetailsSectionProps> = ({
  onOpenLoan,
}) => {
  const steps = [
    {
      icon: DollarSign,
      title: "Verificación de Ingresos",
      desc: "Carga digital simple de tu historial financiero.",
    },
    {
      icon: Home,
      title: "Tasación de Propiedad",
      desc: "Valoración experta de tu propiedad elegida en Miami.",
    },
    {
      icon: Percent,
      title: "Fijación de Tasa",
      desc: "Asegurando las mejores tasas de interés del mercado.",
    },
  ];

  return (
    <section className="w-full h-screen snap-start bg-white flex items-center overflow-hidden relative">
      <div className="w-full h-full flex flex-col md:flex-row">
        {/* Left Content */}
        <div className="w-full md:w-1/2 h-full flex flex-col justify-center px-6 md:px-16 lg:px-24 bg-white z-10">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: false }}
          >
            <h2 className="text-blue-900 font-bold tracking-widest uppercase mb-4 text-sm max-[415px]:mb-2 max-[415px]:text-xs">
              El Proceso
            </h2>
            <h2 className="text-4xl md:text-5xl font-serif text-gray-900 font-bold mb-8 leading-tight max-[415px]:text-3xl max-[415px]:mb-4">
              Camino Sencillo hacia <br /> Tu Propiedad
            </h2>
            <p className="text-gray-600 mb-10 leading-relaxed text-lg font-light max-[415px]:text-sm max-[415px]:mb-6">
              Navegar el panorama hipotecario de Miami requiere experiencia
              local. Simplificamos las complejidades de préstamos jumbo,
              carteras de inversión y primeras compras en un viaje transparente
              de tres pasos.
            </p>

            <div className="space-y-8 mb-10">
              {steps.map((step, idx) => (
                <div
                  key={idx}
                  className="flex items-start gap-4 max-[415px]:gap-2"
                >
                  <div className="p-3 bg-blue-50 rounded-none text-blue-900 max-[415px]:p-2">
                    <step.icon
                      size={24}
                      className="max-[415px]:w-5 max-[415px]:h-5"
                    />
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900 text-lg max-[415px]:text-base">
                      {step.title}
                    </h4>
                    <p className="text-gray-500 text-sm max-[415px]:text-xs">
                      {step.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            <Button
              onClick={onOpenLoan}
              variant="primary"
              className="shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all"
            >
              Inicia Tu Solicitud <ArrowRight className="inline ml-2 w-4 h-4" />
            </Button>
          </motion.div>
        </div>

        {/* Right Image */}
        <div className="hidden md:block w-1/2 h-full relative">
          <motion.div
            className="absolute inset-0 bg-gray-200"
            initial={{ clipPath: "inset(0 100% 0 0)" }}
            whileInView={{ clipPath: "inset(0 0% 0 0)" }}
            transition={{ duration: 1, ease: "circOut", delay: 0.2 }}
            viewport={{ once: false }}
          >
            <img
              src="https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?q=80&w=2653&auto=format&fit=crop"
              alt="Miami Luxury Interior"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-l from-black/20 to-transparent" />
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1, y: [0, 10, 0] }}
        transition={{
          delay: 0.5,
          duration: 2,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute bottom-6 left-1/2 -translate-x-1/2 z-20 text-gray-400 flex flex-col items-center gap-2 cursor-pointer md:hidden lg:flex"
        onClick={() =>
          window.scrollBy({ top: window.innerHeight, behavior: "smooth" })
        }
      >
        <span className="text-[10px] uppercase tracking-widest opacity-80 font-semibold">
          Conócenos
        </span>
        <ChevronDown className="w-6 h-6 opacity-80" />
      </motion.div>
    </section>
  );
};
