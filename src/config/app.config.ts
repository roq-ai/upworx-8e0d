interface AppConfigInterface {
  ownerRoles: string[];
  customerRoles: string[];
  tenantRoles: string[];
  tenantName: string;
  applicationName: string;
  addOns: string[];
  ownerAbilities: string[];
  customerAbilities: string[];
  getQuoteUrl: string;
}
export const appConfig: AppConfigInterface = {
  ownerRoles: ['Owner'],
  customerRoles: ['Freelancer'],
  tenantRoles: ['Owner', 'Recruiter'],
  tenantName: 'Company',
  applicationName: 'Upworx',
  addOns: ['file upload', 'chat', 'notifications', 'file'],
  customerAbilities: [
    'Apply to job offers',
    'Manage own job applications',
    'Read contracts linked to them',
    'Read information about companies',
  ],
  ownerAbilities: ['Manage contracts', 'Manage job applications', 'Manage job offers', 'Manage company information'],
  getQuoteUrl: 'https://app.roq.ai/proposal/0bd12412-2da4-4dab-b520-3973fcf64c30',
};
