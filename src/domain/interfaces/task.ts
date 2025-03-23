export enum TaskStatus {
  TODO = 'todo',
  IN_PROGRESS = 'in_progress',
  DONE = 'done',
}

export interface Task {
  id: number
  description: string
  status: TaskStatus
  createdAt: Date
  updatedAt: Date
}

export type CreateTask = Pick<Task, 'description'>
export type UpdateTask = Partial<Pick<Task, 'description' | 'status'>>
