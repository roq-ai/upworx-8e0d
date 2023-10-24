import { CompanyInterface } from 'interfaces/company';
import { UserInterface } from 'interfaces/user';
import { GetQueryInterface } from 'interfaces';

export interface ContractInterface {
  id?: string;
  contract_duration?: number;
  company_id: string;
  freelancer_id: string;
  created_at?: any;
  updated_at?: any;

  company?: CompanyInterface;
  user?: UserInterface;
  _count?: {};
}

export interface ContractGetQueryInterface extends GetQueryInterface {
  id?: string;
  company_id?: string;
  freelancer_id?: string;
}
