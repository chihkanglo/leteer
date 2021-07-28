<template>
  <div id="home" :key="`home-${state}`">
    <write-letter />
    <letter
      v-for="(letter, index) in letters"
      :key="`letter-${index}`"
      :title="letter.title"
      :content="letter.content"
      :author="letter.author"
      :createdAt="letter.createdAt"
      :id="letter.id"
      @onEdit="onEditLetter"
    />
    <edit-letter
      v-if="updateLetter"
      :key="`update-letter-${updateLetter.id}`"
      :letter="updateLetter"
      @closeEditor="onCloseLetterEditor"
    />
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import EditLetter from "../components/EditLetter.vue";
import Letter from "../components/Letter.vue";
import WriteLetter from "../components/WriteLetter.vue";

export default {
  components: { Letter, WriteLetter, EditLetter },
  name: "Home",
  data() {
    return {
      updateLetter: null,
      state: 0,
    };
  },
  computed: {
    ...mapGetters("lettersModule", ["letters"]),
  },
  methods: {
    onEditLetter(letter) {
      this.updateLetter = letter;
    },
    onCloseLetterEditor() {
      this.updateLetter = null;
      this.state += 1;
    },
  },
};
</script>
<style lang="scss" scoped>
#home {
  display: flex;
  flex-direction: column;
  align-items: center;
  min-height: 100%;
  height: auto;
  overflow: auto;
  padding: 1rem;
}
</style>
