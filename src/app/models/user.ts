export class User {
    id: number;
    email: string;
    displayName: string;
    password: string;
    firstName: string;
    lastName: string;
    token: string;
    isAdmin: boolean;

  constructor(email?: string, password?: string) {}
}
