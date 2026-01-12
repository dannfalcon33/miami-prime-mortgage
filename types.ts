export enum PropertyType {
  PRIMARY = "Vivienda Principal",
  SECONDARY = "Segunda Vivienda / Vacacional",
  INVESTMENT = "Propiedad de Inversión"
}

export enum CreditScore {
  EXCELLENT = "Excelente (740+)",
  GOOD = "Bueno (700 - 739)",
  FAIR = "Regular (620 - 699)",
  POOR = "Necesita Mejora (<620)"
}

export enum DownPayment {
  ZERO_TO_THREE = "0% - 3.5%",
  FIVE_TO_TEN = "5% - 10%",
  TEN_TO_TWENTY = "10% - 20%",
  TWENTY_PLUS = "20%+"
}

export interface LoanFormData {
  fullName: string;
  email: string;
  phone: string;
  downPayment: DownPayment;
  creditScore: CreditScore;
  requestedAmount: string;
  propertyType: PropertyType;
}

export interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
}