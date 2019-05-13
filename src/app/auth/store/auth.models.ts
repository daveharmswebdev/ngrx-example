export interface ILoginCredential {
  UserName: string;
  Password: string;
}

export interface IAuth {
  token: string;
  nameid: string;
  unique_name: string;
}
