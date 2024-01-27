<template>
  <div>
    <textarea v-model="text" placeholder="Enter text here"></textarea>
    <button
      style="height: 54px; width: 88px; margin-bottom: 88px"
      @click="findKeywords"
    >
      Find Keywords
    </button>
    <div v-if="containedKeywords.length > 0">
      <h4>敏感词:</h4>
      <div style="margin-bottom: 54px; color: #541af3">
        {{ containedInKeywords }}
      </div>
      <h4>侵权词:</h4>
      <div style="margin-bottom: 54px; color: #f31a1a">
        {{ containedInInfringingWords }}
      </div>
    </div>
    <div>
      <div v-for="keyword in mingganci" :key="keyword">
        {{ keyword }}
      </div>
    </div>
  </div>
</template>

<script>
import keywords from "../assets/keywords.js";
import infringingwords from "../assets/infringingwords.js";
import mingganci from "../assets/mingganci.js";

export default {
  data() {
    return {
      text: "",
      keywords,
      infringingwords,
      mingganci,
      containedKeywords: [],
      containedInKeywords: [],
      containedInInfringingWords: [],
    };
  },
  methods: {
    // findKeywords() {
    //   const allKeywords = [...this.keywords, ...this.infringingwords];
    //   const containedKeywords = [];
    //   for (const keyword of allKeywords) {
    //     if (this.text.toLowerCase().includes(keyword.toLowerCase())) {
    //       containedKeywords.push(keyword);
    //     }
    //   }
    //   if (containedKeywords.length === 0) {
    //     this.containedKeywords = "无敏感词";
    //   } else {
    //     this.containedKeywords = containedKeywords;
    //   }
    // },

    findKeywords() {
      const allKeywords = [...this.keywords, ...this.infringingwords];
      const containedKeywords = [];
      const containedInKeywords = [];
      const containedInInfringingWords = [];

      for (const keyword of allKeywords) {
        if (this.text.toLowerCase().includes(keyword.toLowerCase())) {
          containedKeywords.push(keyword);
          if (this.keywords.includes(keyword)) {
            containedInKeywords.push(keyword);
          } else if (this.infringingwords.includes(keyword)) {
            containedInInfringingWords.push(keyword);
          }
        }
      }

      if (containedKeywords.length === 0) {
        this.containedKeywords = "无敏感词";
      } else {
        this.containedKeywords = containedKeywords;
        this.containedInKeywords = containedInKeywords;
        this.containedInInfringingWords = containedInInfringingWords;
      }
      console.log(this.containedKeywords);
      console.log(this.containedInKeywords);
      console.log(this.containedInInfringingWords);
    },
  },
};
</script>

<style>
textarea {
  width: 100%;
  height: 100px;
  margin-bottom: 10px;
}
</style>
