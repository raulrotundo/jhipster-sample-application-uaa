import { Moment } from 'moment';

export interface IProduct {
  id?: string;
  title?: string;
  keywords?: string;
  description?: string;
  rating?: number;
  dateAdded?: Moment;
  dateModified?: Moment;
}

export const defaultValue: Readonly<IProduct> = {};
