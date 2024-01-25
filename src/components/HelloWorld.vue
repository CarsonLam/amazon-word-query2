<template>
  <div>
    <textarea v-model="text" placeholder="Enter text here"></textarea>
    <button @click="findKeywords">Find Keywords</button>
    <div v-if="containedKeywords.length > 0">
      <h3>Contained Keywords:</h3>
      <ul>
        <li v-for="keyword in containedKeywords" :key="keyword">
          {{ keyword }}
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import keywords from "../assets/keywords.js";

export default {
  data() {
    return {
      text: "",
      keywords,
      // keywords: [
      //   "Against",
      //   "Mildew",
      //   "All Natural",
      //   "Allergens",
      //   "Anti",
      //   "Anti-Bacteria",
      //   "Antibacterial",
      //   "Anti-Bacterial Vinyl",
      //   "Antibiotic",
      //   "Anti-Flu",
      //   "Antifouling",
      //   "Anti-Fouling",
      //   "Antifungal",
      //   "Antimicrobial",
      //   "Anti-Mildew",
      //   "Anti-Mites",
      //   "Anti-Mold",
      //   "Anti-Oxidation",
      //   "Anti-Toxic",
      //   "Anti-Virus",
      //   "Bacteria",
      //   "Bacteriostatic",
      //   "Bpa-Free",
      //   "Bug",
      //   "Chemical",
      //   "Destroy",
      //   "Destroying",
      //   "Disinfect",
      //   "Drug",
      //   "Dust",
      //   "Dustproof",
      //   "Eco-Friendly",
      //   "Eliminate",
      //   "Environment Friendly",
      //   "Environmental protection",
      //   "Filter Air",
      //   "Filters",
      //   "Fungal",
      //   "Fungus",
      //   "Germs",
      //   "Harmless",
      //   "Healthy",
      //   "Hygience",
      //   "Hypoallergenic",
      //   "Infection",
      //   "Inhibit-Algae",
      //   "Insect Prevention",
      //   "Insect Repellent",
      //   "Insecticidal",
      //   "Insecticide",
      //   "Insects",
      //   "Laser",
      //   "Light",
      //   "Uv",
      //   "Micro-Bio",
      //   "Mildew",
      //   "Mildew Proof",
      //   "Mites",
      //   "Mitigating Any Pest",
      //   "Moisture",
      //   "Mold",
      //   "Mosquitos",
      //   "Mouse",
      //   "Non-Injurious",
      //   "Non-Poisonous",
      //   "Nontoxic",
      //   "Non-Toxic",
      //   "Odourless",
      //   "Pest",
      //   "Pesticide",
      //   "Pests",
      //   "Preservatives",
      //   "Prevent",
      //   "Prevent Or Inhibit The Growth Of Bacteria",
      //   "Preventing",
      //   "Protect",
      //   "Rat",
      //   "Remove",
      //   "Remove Allergens",
      //   "Repel Insects",
      //   "Repel Or Slow Down Any Pest",
      //   "Repelient",
      //   "Repelling",
      //   "Repel-Pesticides",
      //   "Residue",
      //   "Resist Ultraviolet Rays",
      //   "Resistant",
      //   "Resistant to mosquitoes&ants",
      //   "Rodent",
      //   "Safety",
      //   "Sanitize-Blight",
      //   "Sterilization",
      //   "Sterilize",
      //   "Stop-Microbe",
      //   "Mildew",
      //   "Toxic",
      //   "Ultraviolet",
      //   "Used To Prevent",
      //   "Uv",
      //   "Virus",
      //   "Water Filtration",
      //   "Explosion",
      //   "butane",
      //   "bomb",
      //   "hydrogen bomb",
      //   "missile",
      //   "Poison",
      //   "Bane",
      //   "Ozone",
      //   "Asbestos",
      //   "Fireworks",
      //   "Firecracker",
      //   "Weapon",
      //   "Gun",
      //   "Bomb",
      //   "Torture instrument",
      //   "Knife",
      //   "Fork",
      //   "Steel pipe",
      //   "Sword",
      //   "Arrow",
      //   "blade",
      //   "dagger",
      //   "Radioactivity",
      //   "Freon",
      //   "Police",
      //   "Police uniform",
      //   "Military",
      //   "Medal",
      //   "Institutional emblem",
      //   "India",
      //   "Indian tribe",
      //   "Signal jammer",
      //   "Bank card duplicator",
      //   "Signal transmitter",
      //   "Decoder",
      //   "Virtual currency",
      //   "Cultural Relic",
      //   "human organ",
      //   "Remains",
      //   "ivory",
      //   "gamble",
      //   "handbookinger",
      //   "cigarette",
      //   "hookah",
      //   "cigar",
      //   "electronic cigarette",
      // ],
      containedKeywords: [],
    };
  },
  methods: {
    checkKeywords(text, keywords) {
      const containedKeywords = [];
      for (const keyword of keywords) {
        if (text.toLowerCase().includes(keyword.toLowerCase())) {
          containedKeywords.push(keyword);
        }
      }
      return containedKeywords;
    },
    findKeywords() {
      this.containedKeywords = this.checkKeywords(this.text, this.keywords);
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
