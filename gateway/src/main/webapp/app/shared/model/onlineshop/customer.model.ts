export interface ICustomer {
  id?: string;
  firstName?: string;
  lastName?: string;
  email?: string;
  telephone?: string;
}

export const defaultValue: Readonly<ICustomer> = {};
