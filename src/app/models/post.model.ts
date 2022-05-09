import { ActivityType } from "../enums/activityType.enum";
import { Notebook } from "./notebook.model";


export interface Post {
    id: number;
    activityType: ActivityType;
    observation: string;
    startTime: any;
    endTime: any;
    notebook: Notebook;
}