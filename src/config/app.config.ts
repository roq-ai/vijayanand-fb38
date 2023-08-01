interface AppConfigInterface {
  ownerRoles: string[];
  customerRoles: string[];
  tenantRoles: string[];
  tenantName: string;
  applicationName: string;
  addOns: string[];
}
export const appConfig: AppConfigInterface = {
  ownerRoles: ['Blog Owner'],
  customerRoles: [],
  tenantRoles: ['Blog Owner'],
  tenantName: 'Organization',
  applicationName: 'Vijayanand',
  addOns: ['file upload', 'chat', 'notifications', 'file'],
};
