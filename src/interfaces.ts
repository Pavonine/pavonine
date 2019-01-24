import { PAVONINE_ADD_ITEM, PAVONINE_ACTION } from "./types";

export interface ITask {
  text: string;
  isCompleted: boolean;
}

export interface IPavonineAction {
  type: PAVONINE_ACTION;
  payload: any;
}

export interface IPavonineActionAddTask extends IPavonineAction {
  actionType: PAVONINE_ADD_ITEM;
  payload: ITask;
}

export interface IPavonineMessage {
  key: string;
  value: {
    previous: string;
    sequence: number;
    author: string;
    timestamp: number;
    hash: string;
    content: any;
    signature: string;
  };
  timestamp: number;
}

export interface IPavonineAddTaskMessage extends IPavonineMessage {
  value: {
    previous: string;
    sequence: number;
    author: string;
    timestamp: number;
    hash: string;
    content: IPavonineActionAddTask;
    signature: string;
  };
}

export interface IPavonine {
  connection: boolean;
  sbot: any; // sbot type defs
  emitAction(type: string, payload: any): IPavonineMessage;
  addTask(task: ITask): IPavonineAddTaskMessage;
  connect(): object; // We dont know the type defs for sbot :/
}
