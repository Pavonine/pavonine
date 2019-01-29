import {
  ITask,
  IPavonine,
  IPavonineAction,
  IPavonineMessage,
  IPavonineMessageAddTask,
  IPavonineMessageEditTask,
  IPavonineMessageRemoveTask,
  IPavonineActionAddTask
} from "./interfaces";

import { PAVONINE_ADD_TASK, PAVONINE_ACTION } from "./actions";

class Pavonine implements IPavonine {
  sbot: any = null;
  constructor(sbot: any) {
    this.sbot = sbot;
  }

  addTask(task: ITask): Promise<IPavonineMessageAddTask> {
    const action: IPavonineActionAddTask = {
      actionType: PAVONINE_ADD_TASK,
      type: PAVONINE_ACTION,
      payload: task
    };

    return new Promise((resolve, reject) => {
      this.sbot.publish(action, (err: Error, msg: IPavonineMessageAddTask) => {
        if (err)
          reject({
            err,
            text: "Error publishing message"
          });
        resolve(msg);
      });
    });
  }

  editTask(task: ITask): IPavonineMessageEditTask {
    return null;
  }

  removeTask(task: ITask): IPavonineMessageRemoveTask {
    return null;
  }
}

export default Pavonine;
