<template>
  <div>
    <textarea v-model="text" placeholder="Enter text here"></textarea>
    <button class="word_query_button" style="" @click="findKeywords">
      开始检测
    </button>
    <div v-html="highlightedText"></div>

    <div>
      <h4>侵权词:</h4>
      <div style="margin-bottom: 54px; color: #f31a1a">
        {{ containedInInfringingWords }}
      </div>

      <h4>敏感词:</h4>
      <div style="margin-bottom: 54px; color: #541af3">
        {{ containedInKeywords }}
      </div>
    </div>
    <div>
      <!-- <div v-for="keyword in mingganci" :key="keyword">{{ keyword }}</div> -->
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
  computed: {
    highlightedText() {
      let highlighted = this.text;
      for (const keyword of this.containedInKeywords) {
        highlighted = highlighted.replace(
          new RegExp(keyword, "gi"),
          `<span style="color: #541af3">${keyword}</span>`
        );
      }
      for (const keyword of this.containedInInfringingWords) {
        highlighted = highlighted.replace(
          new RegExp(keyword, "gi"),
          `<span style="color: #f31a1a">${keyword}</span>`
        );
      }
      return highlighted;
    },
  },
  methods: {
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

.word_query_button {
  height: 54px;
  width: 88px;
  margin-bottom: 88px;
  border: 0;
  font-size: 16px;
  font-weight: 900;
  background-color: #0cb397;
  color: #fff;
}
</style>
