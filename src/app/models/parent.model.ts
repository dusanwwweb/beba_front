import { Role } from "./role.model";

export interface Parent {
    id: number;
    firstName: string;
    lastName: string;
    email: string;
    password: string;
    created: Date;
    roles: Role[];
    address: string;
    city: string;
}