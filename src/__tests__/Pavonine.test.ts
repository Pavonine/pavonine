import * as ssbClient from "ssb-client";
import Pavonine from "../index";
import Task from "../Task";
import { PAVONINE_ADD_TASK, PAVONINE_ACTION } from "../actions";

describe("Pavonine", () => {
  test("Pavonine initializes without error", done => {
    ssbClient(function(err, sbot) {
      if (err) throw err;

      const core = new Pavonine(sbot);
      expect(core.sbot).toBeDefined();
      expect(core.addTask).toBeDefined();
      expect(core.editTask).toBeDefined();
      expect(core.removeTask).toBeDefined();

      sbot.close();
      done();
    });
  });

  test("Pavonine.addTask", done => {
    ssbClient(async function(err, sbot) {
      if (err) throw err;

      const core = new Pavonine(sbot);
      const task = new Task("Hello world, from Pavonine");

      try {
        const message = await core.addTask(task);
        expect(message).toBeDefined();
        expect(message.value.content.type).toEqual(PAVONINE_ACTION);
        expect(message.value.content.actionType).toEqual(PAVONINE_ADD_TASK);
        expect(message.value.content.payload.text).toEqual(task.text);
        expect(message.value.content.payload.isCompleted).toEqual(
          task.isCompleted
        );
      } catch (e) {
        if (e) throw e;
      } finally {
        sbot.close();
        done();
      }
    });
  });
});
