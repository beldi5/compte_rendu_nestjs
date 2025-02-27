export class Task {
    id: number;
    title: string;
    description: string;
    is_finished: boolean;

    constructor(id: number, title?: string, description?: string, is_finished?: boolean) {
        this.id = id;
        this.title = title;
        this.description = description;
        this.is_finished = is_finished;
    }
}
