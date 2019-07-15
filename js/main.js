var localStream, camera, microphone;
var client = AgoraRTC.createClient({ mode: "live", codec: "h264" });
app_id = "88b765a2930f40cf8d0a5790701f043b";
token = "";
var uid_1 = faker.hacker.adjective();
var uid_2 = faker.hacker.verb();
uid = uid_1 + "-" + uid_2;
console.log("Setting UID,  ", uid);
client.init(
  app_id,
  function() {
    console.log("AgoraRTC client initialized");
    $.get(
      "https://tardis-demo.herokuapp.com/access_token?channel=test&uid=" + uid,
      function(data) {
        token = data.token;
        console.log("Data Loaded: " + token);
      }
    );
  },
  function(err) {
    console.log("AgoraRTC client init failed", err);
  }
);
localStream.init(
  function() {
    console.log("getUserMedia successfully");
    localStream.play("agora_local");
  },
  function(err) {
    console.log("getUserMedia failed", err);
  }
);

//tardis-demo.herokuapp.com/access_token?channel=test&uid=1234
client.join(
  token,
  "test",
  uid,
  function(uid) {
    console.log("User " + uid + " join channel successfully");
  },
  function(err) {
    console.log("Join channel failed", err);
  }
);

//publish local stream
client.publish(localStream, function(err) {
  console.log("Publish local stream error: " + err);
});

client.on("stream-published", function(evt) {
  console.log("Publish local stream successfully");
});

//subscribe remote stream
client.on("stream-added", function(evt) {
  var stream = evt.stream;
  console.log("New stream added: " + stream.getId());
  client.subscribe(stream, function(err) {
    console.log("Subscribe stream failed", err);
  });
});

client.on("stream-subscribed", function(evt) {
  var remoteStream = evt.stream;
  console.log("Subscribe remote stream successfully: " + remoteStream.getId());
  remoteStream.play("agora_remote" + remoteStream.getId());
});

client.leave(
  function() {
    console.log("Leave channel successfully");
  },
  function(err) {
    console.log("Leave channel failed");
  }
);
