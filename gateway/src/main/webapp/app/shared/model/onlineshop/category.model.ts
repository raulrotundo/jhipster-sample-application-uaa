import { Moment } from 'moment';

export const enum CategoryStatus {
  AVAILABLE = 'AVAILABLE',
  RESTRICTED = 'RESTRICTED',
  DISABLED = 'DISABLED'
}

export interface ICategory {
  id?: string;
  description?: string;
  sortOrder?: number;
  dateAdded?: Moment;
  dateModified?: Moment;
  status?: CategoryStatus;
}

export const defaultValue: Readonly<ICategory> = {};
