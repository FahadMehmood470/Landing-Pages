export interface NewCompany {
  company: string; // instead of companyName
  companyType: string;
  email: string;
  number: string;
  website: string;
  address: string;
  status: string;
  logo: File | null;
}
