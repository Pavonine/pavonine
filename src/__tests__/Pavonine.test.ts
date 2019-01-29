import * as ssbClient from "ssb-client";
import Pavonine from "../index";

test("Pavonine initializes without error", () => {
  ssbClient(function(err, sbot) {
    if (err) throw err;

    const myPavonineCore = new Pavonine(sbot);
    expect(myPavonineCore.sbot).toBeDefined();
    expect(myPavonineCore.addTask).toBeDefined();
    expect(myPavonineCore.editTask).toBeDefined();
    expect(myPavonineCore.removeTask).toBeDefined();

    sbot.close();
  });
});
