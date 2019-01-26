import Task from "../Task";

test("Task properly initializes", () => {
  const myTask = new Task("Hello world");

  expect(myTask.text).toBe("Hello world");
  expect(myTask.isCompleted).toBeFalsy();
});
