import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, CheckCircle, Calendar, MessageCircle } from "lucide-react";
import { Button } from "./ui/Button";
import {
  ModalProps,
  LoanFormData,
  PropertyType,
  CreditScore,
  DownPayment,
} from "../types";

// SVGs for specific brands since Lucide icons are generic
const WhatsAppIcon = () => (
  <svg
    viewBox="0 0 24 24"
    width="20"
    height="20"
    fill="currentColor"
    className="mr-2"
  >
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
  </svg>
);

export const LoanModal: React.FC<ModalProps> = ({ isOpen, onClose }) => {
  const [formData, setFormData] = useState<LoanFormData>({
    fullName: "",
    email: "",
    phone: "",
    downPayment: DownPayment.FIVE_TO_TEN,
    creditScore: CreditScore.GOOD,
    requestedAmount: "",
    propertyType: PropertyType.PRIMARY,
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate API call
    setTimeout(() => {
      setIsSubmitted(true);
    }, 1000);
  };

  const handleClose = () => {
    setIsSubmitted(false);
    onClose();
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center px-4">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={handleClose}
            className="absolute inset-0 bg-black/60 backdrop-blur-sm"
          />
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            className="relative w-full max-w-lg bg-white shadow-2xl rounded-lg max-h-[85vh] flex flex-col"
          >
            <div className="p-4 sm:p-6 md:p-8 overflow-y-auto custom-scrollbar">
              <button
                onClick={handleClose}
                className="absolute top-4 right-4 text-gray-400 hover:text-gray-900 transition-colors z-10"
              >
                <X size={24} />
              </button>

              {isSubmitted ? (
                <div className="flex flex-col items-center justify-center py-8 text-center">
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ type: "spring", stiffness: 200, damping: 10 }}
                  >
                    <CheckCircle className="w-20 h-20 text-green-500 mb-6" />
                  </motion.div>

                  <h3 className="text-3xl font-serif font-bold text-gray-900 mb-3">
                    ¡Solicitud Recibida!
                  </h3>
                  <p className="text-gray-600 mb-8 max-w-xs mx-auto">
                    Nuestro equipo de asesores revisará tu información y te
                    contactará en menos de 24 horas.
                  </p>

                  <div className="w-full space-y-3 mb-8">
                    <p className="text-xs uppercase tracking-widest text-gray-400 font-bold mb-4">
                      ¿Quieres respuesta inmediata?
                    </p>

                    <a
                      href="https://wa.me/13055550198"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-center w-full py-3 px-4 bg-green-50 text-green-700 hover:bg-green-100 border border-green-200 rounded-md transition-colors font-semibold"
                    >
                      <WhatsAppIcon />
                      Contactar por WhatsApp
                    </a>

                    <a
                      href="#"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-center w-full py-3 px-4 bg-blue-50 text-blue-700 hover:bg-blue-100 border border-blue-200 rounded-md transition-colors font-semibold"
                    >
                      <Calendar size={20} className="mr-2" />
                      Agendar Reunión (Calendly)
                    </a>
                  </div>

                  <Button
                    onClick={handleClose}
                    variant="primary"
                    className="bg-blue-900 hover:bg-blue-800 text-white w-full shadow-lg"
                  >
                    Cerrar Ventana
                  </Button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="text-center mb-6">
                    <h3 className="text-2xl font-serif font-bold text-gray-900">
                      Precalifícate
                    </h3>
                    <p className="text-gray-500 text-sm">
                      Miami Prime Mortgage LLC
                    </p>
                  </div>

                  <div className="space-y-3">
                    <div className="space-y-1">
                      <label className="text-xs text-gray-500 font-semibold uppercase">
                        Nombre Completo
                      </label>
                      <input
                        required
                        name="fullName"
                        placeholder="Ej. Juan Pérez"
                        value={formData.fullName}
                        onChange={handleChange}
                        className="w-full px-4 py-3 bg-gray-50 border border-gray-200 focus:border-blue-900 focus:ring-1 focus:ring-blue-900 outline-none transition-all text-gray-900 placeholder:text-gray-400"
                      />
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                      <div className="space-y-1">
                        <label className="text-xs text-gray-500 font-semibold uppercase">
                          Correo
                        </label>
                        <input
                          required
                          type="email"
                          name="email"
                          placeholder="tu@email.com"
                          value={formData.email}
                          onChange={handleChange}
                          className="w-full px-4 py-3 bg-gray-50 border border-gray-200 focus:border-blue-900 focus:ring-1 focus:ring-blue-900 outline-none transition-all text-gray-900 placeholder:text-gray-400"
                        />
                      </div>
                      <div className="space-y-1">
                        <label className="text-xs text-gray-500 font-semibold uppercase">
                          Teléfono
                        </label>
                        <input
                          required
                          type="tel"
                          name="phone"
                          placeholder="(305) 555-0000"
                          value={formData.phone}
                          onChange={handleChange}
                          className="w-full px-4 py-3 bg-gray-50 border border-gray-200 focus:border-blue-900 focus:ring-1 focus:ring-blue-900 outline-none transition-all text-gray-900 placeholder:text-gray-400"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                      <div className="space-y-1">
                        <label className="text-xs text-gray-500 font-semibold uppercase">
                          Pago Inicial (Down)
                        </label>
                        <select
                          name="downPayment"
                          value={formData.downPayment}
                          onChange={handleChange}
                          className="w-full px-4 py-3 bg-gray-50 border border-gray-200 focus:border-blue-900 focus:ring-1 focus:ring-blue-900 outline-none transition-all text-gray-900"
                        >
                          {Object.values(DownPayment).map((v) => (
                            <option key={v} value={v}>
                              {v}
                            </option>
                          ))}
                        </select>
                      </div>
                      <div className="space-y-1">
                        <label className="text-xs text-gray-500 font-semibold uppercase">
                          Crédito
                        </label>
                        <select
                          name="creditScore"
                          value={formData.creditScore}
                          onChange={handleChange}
                          className="w-full px-4 py-3 bg-gray-50 border border-gray-200 focus:border-blue-900 focus:ring-1 focus:ring-blue-900 outline-none transition-all text-gray-900"
                        >
                          {Object.values(CreditScore).map((v) => (
                            <option key={v} value={v}>
                              {v}
                            </option>
                          ))}
                        </select>
                      </div>
                    </div>

                    <div className="space-y-1">
                      <label className="text-xs text-gray-500 font-semibold uppercase">
                        Monto Estimado ($)
                      </label>
                      <input
                        required
                        type="number"
                        name="requestedAmount"
                        placeholder="Ej. 500000"
                        value={formData.requestedAmount}
                        onChange={handleChange}
                        className="w-full px-4 py-3 bg-gray-50 border border-gray-200 focus:border-blue-900 focus:ring-1 focus:ring-blue-900 outline-none transition-all text-gray-900 placeholder:text-gray-400"
                      />
                    </div>

                    <div className="space-y-1">
                      <label className="text-xs text-gray-500 font-semibold uppercase">
                        Uso de la Propiedad
                      </label>
                      <select
                        name="propertyType"
                        value={formData.propertyType}
                        onChange={handleChange}
                        className="w-full px-4 py-3 bg-gray-50 border border-gray-200 focus:border-blue-900 focus:ring-1 focus:ring-blue-900 outline-none transition-all text-gray-900"
                      >
                        {Object.values(PropertyType).map((v) => (
                          <option key={v} value={v}>
                            {v}
                          </option>
                        ))}
                      </select>
                    </div>
                  </div>

                  <Button type="submit" fullWidth className="mt-4">
                    Enviar Solicitud
                  </Button>
                </form>
              )}
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};
