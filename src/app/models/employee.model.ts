import { Notebook } from "./notebook.model";
import { Role } from "./role.model";


export interface Employee {
    id: number;
    firstName: string;
    lastName: string;
    email: string;
    password: string;
    created: Date;
    roles: Role[];
    address: string;
    city: string;
    notebooks: Notebook[];
}