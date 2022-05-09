
import { AllergyType } from "../enums/allergyType.enum";
import { Notebook } from "./notebook.model";
import { Parent } from "./parent.model";

export interface Child {
    id: number;
    firstName: string;
    lastName: string;
    address: string;
    city: string;
    dateOfBirth: Date; 
    weight: number;
    sex: string;
    allergyType: AllergyType;
    profilePhoto: string;
    updated: Date; 
    notebook: Notebook;
    parents: Parent[];
}