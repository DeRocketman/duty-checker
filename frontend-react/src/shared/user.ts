import {CheckOptions} from "./check-options";

export interface User {
  id?: string,
  email?: string,
  password?: string,
  firstName?: string,
  lastName?: string,
  role?: string,
  confirmed?: boolean,
  checkOptions?: CheckOptions;
}

