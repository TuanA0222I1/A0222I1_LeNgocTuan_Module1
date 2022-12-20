import {Category} from "./Category";

export interface Produces{
  id?: number,
  name?: string,
  rating?: number,
  status?: string,

  category?: Category
}
