<template>
  <div id="letter">
    <div class="title">{{ title }}</div>
    <div class="content">{{ content }}</div>
    <div class="footer">
      <div>
        <strong>{{ author }} </strong>
        <i>created at: {{ createdAt.toLocaleString() }}</i>
      </div>
      <Button @click="onEdit"><Icon name="edit" />Edit</Button>
      <Button @click="onDelete"><Icon name="delete" />Delete</Button>
    </div>
  </div>
</template>

<script>
import { mapActions } from "vuex";
import { makeLetter } from "../utils/letter";
export default {
  name: "Letter",
  props: ["title", "content", "author", "createdAt", "id"],
  methods: {
    onEdit() {
      this.$emit(
        "onEdit",
        makeLetter(
          this.title,
          this.content,
          this.author,
          this.createdAt,
          this.id
        )
      );
    },
    onDelete() {
      this.deleteLetter(this.id);
    },
    ...mapActions("lettersModule", ["deleteLetter"]),
  },
};
</script>

<style lang="scss" scoped>
#letter {
  display: flex;
  width: 400px;
  height: auto;
  background: white;
  border: 1px solid #eee;
  border-radius: 2px;
  padding: 0.5rem;
  margin: 0.5rem;
  flex-direction: column;
  .title {
    font-size: 1.2rem;
    font-weight: bold;
  }
  .content {
    padding: 0.5rem;
  }
  .footer {
    color: gray;
    font-size: 0.8rem;
    font-style: italic;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
}
</style>
