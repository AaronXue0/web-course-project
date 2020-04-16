<template>
  <v-app class="game">
    <v-container>
      <v-row justify="center">
        <h1 class="game-title-h1">Games are Works of Art</h1>
      </v-row>
    </v-container>
    <v-container class="games-intro">
      <v-row
        v-for="(item, index) in gameList"
        :key="index"
        class="games-intro-content"
      >
        <v-col cols="3"></v-col>
        <v-col cols="3" class="game-info-col">
          <div v-if="index % 2 == 0">
            <span>{{ item.clue }}</span>
            <h1 class="game-name-h1">{{ item.name }}</h1>
            <br v-for="i in 3" :key="i" />
            <span>{{ item.platform }}</span>
            <br />
            <span> First Released: {{ item.release }}</span>
          </div>
          <div v-else>
            <v-avatar height="250px" width="250px" class="game-avatar-img-left">
              <img :src="item.img" />
            </v-avatar>
          </div>
        </v-col>
        <v-col cols="6">
          <div v-if="index % 2 == 0">
            <v-avatar height="250px" width="250px" class="game-avatar-img">
              <img :src="item.img" />
            </v-avatar>
          </div>
          <div v-else class="info-right">
            <span>{{ item.clue }}</span>
            <h1 class="game-name-h1">{{ item.name }}</h1>
            <br v-for="i in 3" :key="i" />
            <span>{{ item.platform }}</span>
            <br />
            <span> First Released: {{ item.release }}</span>
          </div>
        </v-col>
        <div justify="center" class="chevron-game"></div>
      </v-row>
    </v-container>
  </v-app>
</template>

<script>
export default {
  data() {
    return {
      gameList: [
        {
          type: "App Game",
          name: "Lomo",
          clue: "what happend here?",
          platform: "iOS, Android",
          release: "Nov 2019",
          img: require("@/assets/1585896770673.jpg")
        },
        {
          type: "App Game",
          name: "Writer",
          clue: "what happend here?",
          platform: "iOS, Android",
          release: "Nov 2019",
          img: require("@/assets/1585896785150.jpg")
        },
        {
          type: "App Game",
          name: "Memory Void",
          clue: "what happend here?",
          platform: "PC, PS4, Switch",
          release: "Nov 2020",
          img: require("@/assets/1585896761540.jpg")
        }
      ]
    };
  },
  methods: {
    changeTitle() {
      document.title = "Game | Project Starry";
    }
  },
  mounted() {
    this.changeTitle();
  }
};
</script>

<style>
@import url("https://fonts.googleapis.com/css2?family=Noto+Sans+TC:wght@900&display=swap");
.game {
  font-family: "Noto Sans TC", sans-serif;
}
.game-title-h1 {
  font-size: 80px;
}
.games-intro {
  position: relative;
  padding-bottom: 10%;
}
.games-intro-content {
  position: relative;
  padding-bottom: 2%;
}
.game-info-col {
  position: relative;
  top: 25px;
  float: right;
  z-index: 2;
}
.info-right {
  position: relative;
  top: 3em;
}
.game-name-h1 {
  font-size: 35px;
}
.game-avatar-img {
  position: relative;
  left: -5em;
}
.game-avatar-img-left {
  position: relative;
  right: 0em;
}
.chevron-game {
  position: relative;
  padding-top: 8%;
  padding-bottom: 8%;
}
</style>
