import {
  PAVONINE_ACTION,
  PAVONINE_ADD_TASK,
  PAVONINE_EDIT_TASK,
  PAVONINE_REMOVE_TASK
} from "./types";

export interface ITask {
  text: string;
  isCompleted: boolean;
}

/**
 * @description Structure of the Pavonine action
 * @export
 * @interface IPavonineAction
 */
export interface IPavonineAction {
  type: PAVONINE_ACTION;
  payload: any;
}

/**
 * @description Structure of Action published to create a new message / action.
 * @export
 * @interface IPavonineActionAddTask
 * @extends {IPavonineAction}
 */
export interface IPavonineActionAddTask extends IPavonineAction {
  actionType: PAVONINE_ADD_TASK;
  payload: ITask;
}

/**
 * @description Structure of Action published to edit a previous message / action.
 * @export
 * @interface IPavonineActionEditTask
 * @extends {IPavonineAction}
 */
export interface IPavonineActionEditTask extends IPavonineAction {
  actionType: PAVONINE_EDIT_TASK;
  origin: string;
  payload: ITask;
}

export interface IPavonineActionRemoveTask extends IPavonineAction {
  actionType: PAVONINE_REMOVE_TASK;
  origin: string;
}

/**
 * @description Structure of the action message in SSB database once IPavonineAction is published.
 * @export
 * @interface IPavonineMessage
 */
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

/**
 * @description Structure of the action message in SSB database once IPavonineActionAddTask is published
 * @export
 * @interface IPavonineMessageAddTask
 * @extends {IPavonineMessage}
 */
export interface IPavonineMessageAddTask extends IPavonineMessage {
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

/**
 * @description Structure of the action message in SSB database once IPavonineActionEditTask is published
 * @export
 * @interface IPavonineMessageEditTask
 * @extends {IPavonineMessage}
 */
export interface IPavonineMessageEditTask extends IPavonineMessage {
  value: {
    previous: string;
    sequence: number;
    author: string;
    timestamp: number;
    hash: string;
    content: IPavonineActionEditTask;
    signature: string;
  };
}

export interface IPavonineMessageRemoveTask extends IPavonineMessage {
  value: {
    previous: string;
    sequence: number;
    author: string;
    timestamp: number;
    hash: string;
    content: IPavonineActionRemoveTask;
    signature: string;
  };
}

/**
 * @description Structure of pavonine core.
 * @export
 * @interface IPavonine
 */
export interface IPavonine {
  sbot: any; // sbot type defs
  emitAction(type: string, payload: any): IPavonineMessage;
  addTask(task: ITask): IPavonineMessageAddTask;
  editTask(task: ITask): IPavonineMessageEditTask;
  removeTask(task: ITask): IPavonineMessageRemoveTask;
}
