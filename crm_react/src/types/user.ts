

export interface Company {
  id: number;
  title: string;
  image: string | null;
  address: string;
  email: string;
  phone: string;
  status: number;
}

export interface User {
  agent_directline?: number;
  id: number;
  name: string;
  email: string;
  utype: string;
  status: number;
  phone?: string;
  image?: string |null;
  companies?: Company[];
}
