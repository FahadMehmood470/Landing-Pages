export interface CreateCompanyPayload {
  company: string;
  // companyType: string;
  email: string;
  number: string;
  website: string;
  address: string;
  status: string;
  subscribe_link?: string | null;
  logo: File | null;
}
