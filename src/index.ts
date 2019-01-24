import ssbClient from "ssb-client";

ssbClient(function(err, sbot) {
  if (err) throw err;

  sbot.publish(
    {
      type: "PAVONINE_TASK",
      actionType: "PAVONINE_ADD_TASK",
      payload: {
        text: "hello world",
        isCompleted: false
      }
    },
    (err, msg) => {
      if (err) throw err;
      console.log(JSON.stringify(msg));
    }
  );

  sbot.close();
});

export default "1";
