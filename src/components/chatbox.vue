<template>
  <div chatbox>
    <!--
          The Magnificant Ryan Wans Chatbox System

          Three Key Points To Hit:
            - The Chat (obvi)
            - The Message Bar
            - Some form of extra data
                - Whos Online?
                - Whos Typing?
                - Chat Rules // Tips?
                - ONLY ONE

            Only do these three to obtain a SIMPLE and CLEAN chatbox.

            Use Socket.io for seamless socketing

            Some custom JS is always needed, but in this case it should
            be relatively minimal.

            Remeber -> SPEED MATTERS
            Write Efficient Code!
    -->
    <div tab>
      <!-- this is the sidebar // tab (for extra data) -->
    </div>
    <ul chat>
      <!-- the actual chatbox -->
      <p v-if="isConnected">We're connected to the server!</p>
      <p>Message from server: "{{socketMessage}}"</p>
      <button @click="pingServer()">Ping Server</button>
    </ul>
    <div mess>
      <!-- the message form -->
      <form action>
        <input id="m" autocomplete="off" />
        <button>Send</button>
      </form>
    </div>
  </div>
</template>

<script>
export default {
  name: 'chatbox',
  props: [],
  data() {
    return {
      isConnected: false,
      socketMessage: '',
    };
  },

  sockets: {
    connect() {
      // Fired when the socket connects.
      this.isConnected = true;
    },

    disconnect() {
      this.isConnected = false;
    },

    // Fired when the server sends something on the "messageChannel" channel.
    messageChannel(data) {
      this.socketMessage = data;
    },
  },

  methods: {
    pingServer() {
      // Send the "pingServer" event to the server.
      this.$socket.emit('pingServer', 'PING!');
    },
  },
};

console.log('Rendered Index Page Successfully');
</script>

<style lang="scss" scoped>
[chatbox] {
  width: 90%;
  height: 35rem;
  border-style: solid;
  border-width: 2px;
  border-color: lightblue;
  border-radius: 5px;
  margin-left: 5%;
  margin-top: 2%;
}
[tab] {
  height: 100%;
  width: 15%;
  float: left;
  border-right: solid black 1px;
}
[mess] {
  width: 85%;
  height: 10%;
  border-top: solid black 1px;
  float: right;
}
[chat] {
  width: 85%;
  height: 90%;
  float: right;
  margin-bottom: 0 !important;
}
</style>
