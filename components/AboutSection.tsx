import React from 'react';
import { motion } from 'framer-motion';
import { Building2, Mail, MapPin, Phone, Facebook, Instagram, Linkedin, Youtube } from 'lucide-react';
import { Button } from './ui/Button';

// Custom TikTok Icon
const TikTokIcon = ({ className = "" }) => (
  <svg 
    xmlns="http://www.w3.org/2000/svg" 
    width="24" 
    height="24" 
    viewBox="0 0 24 24" 
    fill="none" 
    stroke="currentColor" 
    strokeWidth="2" 
    strokeLinecap="round" 
    strokeLinejoin="round" 
    className={className}
  >
    <path d="M9 12a4 4 0 1 0 4 4V4a5 5 0 0 0 5 5" />
  </svg>
);

interface AboutSectionProps {
  onOpenLoan: () => void;
}

export const AboutSection: React.FC<AboutSectionProps> = ({ onOpenLoan }) => {
  const currentYear = new Date().getFullYear();

  return (
    <section className="w-full min-h-screen snap-start bg-slate-900 text-white flex flex-col justify-between relative">
      {/* Background decoration */}
      <div className="absolute top-0 left-0 w-1/3 h-full bg-blue-900/10 pointer-events-none" />

      {/* Main Content */}
      <div className="flex-grow flex items-center justify-center px-6 pt-20 pb-10 md:px-12 relative z-10">
        <div className="max-w-7xl w-full grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-20 items-center">
          
          {/* Left Column - CEO Image */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: false }}
            className="relative h-[500px] md:h-[600px] w-full rounded-sm overflow-hidden shadow-2xl"
          >
             <img 
               src="https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=2574&auto=format&fit=crop" 
               alt="CEO Real Estate" 
               className="w-full h-full object-cover"
             />
             <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
             <div className="absolute bottom-6 left-6">
                <p className="text-xl font-serif font-bold text-white">Roberto Alvarez</p>
                <p className="text-sm text-blue-300 uppercase tracking-widest">Fundador & CEO</p>
             </div>
          </motion.div>

          {/* Right Column - Content */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: false }}
            className="flex flex-col justify-center"
          >
             <div className="w-16 h-1 bg-blue-500 mb-8" />
             <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold mb-8">Nuestra Historia</h2>
             <p className="text-gray-300 text-lg leading-relaxed mb-6 font-light">
               <strong className="text-white font-semibold">Miami Prime Mortgage LLC</strong> nace de la visión de transformar la experiencia hipotecaria en el sur de la Florida.
               Como marca personal y empresarial, nos hemos consolidado como el puente de confianza entre el capital y tus sueños inmobiliarios.
             </p>
             <p className="text-gray-300 text-lg leading-relaxed font-light mb-10">
               A diferencia de las instituciones tradicionales, nuestro enfoque es personal. Entendemos que detrás de cada solicitud hay una historia de éxito, una familia o una inversión estratégica. 
               Nuestro compromiso es brindarte la agilidad y la asesoría experta que mereces.
             </p>
             
             <div>
               <Button onClick={onOpenLoan} variant="primary" className="bg-blue-600 hover:bg-blue-700 border-blue-600 px-10 py-4 text-base">
                 Precalifícate Ahora
               </Button>
             </div>
          </motion.div>

        </div>
      </div>

      {/* Footer with Contact Info */}
      <motion.footer 
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        className="w-full bg-black/40 border-t border-white/5 relative z-10"
      >
        <div className="max-w-7xl mx-auto px-6 py-10">
          
          {/* Contact Details Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-10 border-b border-white/10 pb-10">
            <div className="flex flex-col items-center md:items-start text-center md:text-left gap-2">
              <div className="p-3 bg-white/5 rounded-full mb-1">
                <MapPin className="text-blue-400 w-5 h-5" />
              </div>
              <p className="text-gray-400 text-sm font-semibold uppercase tracking-wider">Dirección</p>
              <p className="text-white">1200 Brickell Ave, Suite 1400<br/>Miami, FL 33131</p>
            </div>

            <div className="flex flex-col items-center md:items-start text-center md:text-left gap-2">
              <div className="p-3 bg-white/5 rounded-full mb-1">
                <Phone className="text-blue-400 w-5 h-5" />
              </div>
              <p className="text-gray-400 text-sm font-semibold uppercase tracking-wider">Teléfono</p>
              <p className="text-white">+1 (305) 555-0198</p>
            </div>

            <div className="flex flex-col items-center md:items-start text-center md:text-left gap-2">
              <div className="p-3 bg-white/5 rounded-full mb-1">
                <Mail className="text-blue-400 w-5 h-5" />
              </div>
              <p className="text-gray-400 text-sm font-semibold uppercase tracking-wider">Correo</p>
              <p className="text-white">info@miamiprimemortgage.com</p>
            </div>

            <div className="flex flex-col items-center md:items-start text-center md:text-left gap-2">
              <div className="p-3 bg-white/5 rounded-full mb-1">
                <Building2 className="text-blue-400 w-5 h-5" />
              </div>
              <p className="text-gray-400 text-sm font-semibold uppercase tracking-wider">Licencia</p>
              <p className="text-white">NMLS #123456789</p>
            </div>
          </div>

          {/* Socials & Copyright */}
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            <p className="text-gray-500 text-sm text-center md:text-left">
              &copy; {currentYear} Miami Prime Mortgage LLC. Todos los derechos reservados. <br className="md:hidden" /> Prestamista de Vivienda Equitativa.
            </p>

            <div className="flex gap-4">
              <a href="#" className="p-2 text-gray-400 hover:text-white hover:bg-white/10 rounded-full transition-all">
                <Instagram size={20} />
              </a>
              <a href="#" className="p-2 text-gray-400 hover:text-white hover:bg-white/10 rounded-full transition-all">
                <Youtube size={20} />
              </a>
              <a href="#" className="p-2 text-gray-400 hover:text-white hover:bg-white/10 rounded-full transition-all">
                <TikTokIcon className="w-5 h-5" />
              </a>
              <a href="#" className="p-2 text-gray-400 hover:text-white hover:bg-white/10 rounded-full transition-all">
                <Facebook size={20} />
              </a>
              <a href="#" className="p-2 text-gray-400 hover:text-white hover:bg-white/10 rounded-full transition-all">
                <Linkedin size={20} />
              </a>
            </div>
          </div>
        </div>
      </motion.footer>
    </section>
  );
};