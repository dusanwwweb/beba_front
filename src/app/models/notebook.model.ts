import { Post } from "./post.model";

export class Notebook {
    id!: number;
    name!: string;
    created!: Date;
    posts!: Post[];
}