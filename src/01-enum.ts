export enum ROLES {
  ADMIN = 'admin',
  SELLER = 'seller',
  CUSTOMER = 'customer',
}

export type user = {
  username: string;
  role: ROLES;
};

const newUser: user = { username: 'Maria Fernanda', role: ROLES.ADMIN };
