<template>
  <div>
    <textarea v-model="text" placeholder="Enter text here"></textarea>
    <button style="height: 54px; width: 88px; margin-bottom: 88px;" @click="findKeywords">Find Keywords</button>
    <div v-if="containedKeywords.length > 0">
      <h1 >Contained Keywords:</h1>
      
        <!-- <div v-for="keyword in containedKeywords" :key="keyword">
          {{ keyword }}
        </div> -->

        <div style="margin-bottom: 54px; color: #f31a1a;">
          {{ containedKeywords }}
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
import mingganci from "../assets/mingganci.js";

export default {
  data() {
    return {
      text: "",
      keywords,
      mingganci,
      containedKeywords: [],
    };
  },
  methods: {
    // checkKeywords(text, keywords) {
    //   const containedKeywords = [];
    //   for (const keyword of keywords) {
    //     if (text.toLowerCase().includes(keyword.toLowerCase())) {
    //       containedKeywords.push(keyword);
    //     }
    //   }
    //   return containedKeywords;
    // },
    // findKeywords() {
    //   this.containedKeywords = this.checkKeywords(this.text, this.keywords);
    // },

    checkKeywords(text, keywords) {
  const containedKeywords = [];
  for (const keyword of keywords) {
    if (text.toLowerCase().includes(keyword.toLowerCase())) {
      containedKeywords.push(keyword);
    }
  }
  if (containedKeywords.length === 0) {
    return "无敏感词";
  }
  return containedKeywords;
},
findKeywords() {
  this.containedKeywords = this.checkKeywords(this.text, this.keywords);
}





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
