export type EmployeeRoleUnion = 'cook' | 'manager' | 'waiter' | '';

export type NewEmployeeData = {
  id: number;
  login: string;
  password: string;
  role: EmployeeRoleUnion;
};
