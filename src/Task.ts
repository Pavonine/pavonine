import { ITask } from "./interfaces";

export default class Task implements ITask {
  text: string;
  isCompleted: boolean = false;
  constructor(text: string) {
    this.text = text;
  }
}
