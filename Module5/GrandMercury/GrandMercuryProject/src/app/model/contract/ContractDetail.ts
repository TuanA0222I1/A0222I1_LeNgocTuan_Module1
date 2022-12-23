import {Contract} from "./Contract";
import {AttachService} from "./AttachService";

export interface ContractDetail {
  id?: number
  contract?: Contract;

  attach?: AttachService;

  quantity?: number
}
