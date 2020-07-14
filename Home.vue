<template>
  <div class="home">
    <div>
      <button @click="clickButton">send</button>
    </div>
  </div>
</template>

<script>
// Introduction | Socket.IO
// https://socket.io/docs/

// socket.io-client/API.md at 661f1e7fac2488b6d3d206f96bb59073c4c98b1c · socketio/socket.io-client · GitHub
// https://github.com/socketio/socket.io-client/blob/HEAD/docs/API.md

// https://panjiachen.github.io/vue-element-admin/#/components/drag-dialog

// https://github.com/mauricius/vue-draggable-resizable

// https://nikitasnv.github.io/vue-resizable/

// https://github.com/bradtraversy/chatcord/blob/master/server.js

import io from "socket.io-client";
const socket = io("http://localhost:3000");

export default {
  name: "Home",

  created() {
    socket.on("connect", () => {
      console.log("connected 🤝");
    });
    socket.on("disconnect", () => {
      console.log("disconnected 👋");
    });

    socket.on("customEmit", data => {
      console.log(data);
    });

    socket.on("connect_error", error => {
      console.log(error);
    });

    socket.on("ping", () => {
      console.log("ping 🏓");
    });
  },
  methods: {
    clickButton: function() {
      socket.emit("emit_method", "你好吗 server");
    }
  }
};
</script>
