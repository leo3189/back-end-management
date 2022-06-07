/* tslint:disable */
/* eslint-disable */
import { CatalogGroup } from './catalog-group';
import { CatalogType } from './catalog-type';
export interface CatalogItem {
  catalogGroup?: CatalogGroup;
  catalogGroupId?: number;
  catalogType?: CatalogType;
  catalogTypeId?: number;
  description?: null | string;
  id?: number;
  name?: null | string;
  pictureUri?: null | string;
  price?: number;
}
