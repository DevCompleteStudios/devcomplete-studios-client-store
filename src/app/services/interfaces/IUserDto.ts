import { IRoleDto } from "../../interfaces/IRoleDto";


export interface IUserDto {

  id: number;
  createdAt: Date;
  updatedAt: Date;
  isActive: boolean;
  email: string;
  roles: IRoleDto[];
  authCode?: {
    code: string;
  };
  purchaseScripts: any[]
  purchaseSubscriptions: any[]

}

