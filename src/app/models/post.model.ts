import { ActivityType } from "../enums/activityType.enum";
import { Notebook } from "./notebook.model";


export class Post {
    id!: number;
    activityType!: ActivityType;
    observation!: string;
    startTime!: Date;
    endTime!: Date;
    notebook!: Notebook;
}