export interface IPavonineTask {
  text: string;
  isCompleted: boolean;
}

export interface IAddTask {
  (text: string, isCompleted?: boolean): IPavonineTask;
}

export interface IPavonine {
  addTask: IAddTask;
}
