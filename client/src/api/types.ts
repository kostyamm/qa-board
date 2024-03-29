export enum Priority {
    Low = 'low',
    Medium = 'medium',
    High = 'high'
}

export enum TaskStatus {
    ToDo = 'to_do',
    InProgress = 'in_progress',
    Done = 'done',
    Cancelled = 'cancelled',
}

export type Task = {
    id: string;
    status: TaskStatus;
    title: string;
    description: string;
    priority: Priority;
    due_date: string;
    due_date_updated: boolean;
    updatedAt: string;
}
