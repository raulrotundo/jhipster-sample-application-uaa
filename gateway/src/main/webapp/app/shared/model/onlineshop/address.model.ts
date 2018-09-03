export interface IAddress {
  id?: string;
  address1?: string;
  address2?: string;
  city?: string;
  postcode?: string;
  country?: string;
}

export const defaultValue: Readonly<IAddress> = {};
