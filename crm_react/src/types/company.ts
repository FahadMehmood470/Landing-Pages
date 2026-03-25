export interface NewCompany {
  id: number;
  title: string;
  image: string;
  address: string;
  email: string;
  phone: string;
  // company:string
  status: number;
  subscribe_link?: string | null;
  web_address: string | null;
}
