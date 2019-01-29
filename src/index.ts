import {
  IPavonine,
  IPavonineMessage,
  ITask,
  IPavonineMessageAddTask,
  IPavonineMessageEditTask,
  IPavonineMessageRemoveTask
} from "./interfaces";

class Pavonine implements IPavonine {
  sbot: any = null;
  constructor(sbot: any) {
    this.sbot = sbot;
  }

  emitAction(type: string, payload: any): IPavonineMessage {
    return null;
  }

  addTask(task: ITask): IPavonineMessageAddTask {
    return null;
  }

  editTask(task: ITask): IPavonineMessageEditTask {
    return null;
  }

  removeTask(task: ITask): IPavonineMessageRemoveTask {
    return null;
  }
}

export default Pavonine;
