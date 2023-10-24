import { JobApplicationInterface } from 'interfaces/job-application';
import { CompanyInterface } from 'interfaces/company';
import { GetQueryInterface } from 'interfaces';

export interface JobOfferInterface {
  id?: string;
  company_id: string;
  salary_range?: string;
  created_at?: any;
  updated_at?: any;
  job_application?: JobApplicationInterface[];
  company?: CompanyInterface;
  _count?: {
    job_application?: number;
  };
}

export interface JobOfferGetQueryInterface extends GetQueryInterface {
  id?: string;
  company_id?: string;
  salary_range?: string;
}
