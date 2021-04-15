<template>
  <div>
    <v-img :src="poster" />
    <v-container>
      <v-row>
        <h1 class="text-left">Soul of Butterflies</h1>
        <br />
        <v-card-subtitle>INCUBATION</v-card-subtitle>
      </v-row>
    </v-container>
    <v-row>
      <v-card-actions> 故事概要 </v-card-actions>
      <v-card-text>
        殞落貴族-愛德華(EDWARDS)家族的後代-安德斯(Anders)
        <br />在12歲時，父母離奇死亡後，便一直照顧著體弱多病的妹妹奈拉(Nara)
        <br />為了救治染上了怪病的妹妹，在戰後經濟落魄的時代，Anders艱難的扛起撫養和醫療的鉅額費用，
        <br />並在某天接到一份位於銀橋森林邊上歡樂鎮的一神秘旅社的徵人邀請…
        <br />就此接觸了一系列龐大、驚悚的陰謀及秘密
      </v-card-text>
    </v-row>
    <v-row>
      <v-card-actions> 玩法特色 </v-card-actions>
      <v-card-text>
        這是Soul of Butterflies世界觀的起源之作<br />在驚悚科幻的冒險之中，藉由一步步的冒險和故事，玩家將體驗整套完整的精彩世界觀
      </v-card-text>
      <v-card-text>
        在這款獨立開發的多元互動式冒險驚悚解謎遊戲中，你將藉由點擊、拖移等相當多元豐富的遊戲方式慢慢深入故事核心<br />跟隨著主角-Anders的腳步逐漸深入旅社內部挖掘出更龐大的世界觀和故事線
      </v-card-text>
    </v-row>
  </div>
</template>

<script>
export default {
  props: ["contents"],
  components: {},
  data() {
    return {
      poster: require("@/assets/poster3.png"),
    };
  },
  methods: {
    rndPoster() {
      let rndPoster = Math.floor(Math.random() * 3) + 1;
      this.poster = require("@/assets/poster" + rndPoster + ".png");
    },
  },
  mounted() {
    this.rndPoster();
  },
};
</script>
