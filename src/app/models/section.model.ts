import { SectionType } from "../enums/section.enum";
import { Child } from "./child.model";
import { Employee } from "./employee.model";


export interface Section {
    id: number;
    name: string;
    sectionType : SectionType;
    children: Child[];
    employees: Employee[];
}