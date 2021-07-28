<template>
  <div id="write-letter">
    <h3>發個 Leteer...</h3>
    <divider />
    <Form :model="letter" label-position="left" :label-width="100">
      <FormItem label="Title">
        <Input v-model="letter.title"></Input>
      </FormItem>
      <FormItem label="Content">
        <Input v-model="letter.content" type="textarea"></Input>
      </FormItem>
      <FormItem>
        <Button type="primary" @click="onSubmit">Submit</Button>
        <Button style="margin-left: 8px" @click="onClear">Clear</Button>
      </FormItem>
    </Form>
  </div>
</template>

<script>
import { mapActions } from "vuex";
import { makeLetter } from "../utils/letter";
export default {
  name: "WriteLetter",
  data() {
    return {
      letter: {
        title: "",
        content: "",
        author: "deryk",
      },
    };
  },
  methods: {
    onClear() {
      this.letter.title = "";
      this.letter.content = "";
    },
    onSubmit() {
      const letter = makeLetter(
        this.letter.title,
        this.letter.content,
        this.letter.author
      );
      this.postLetter(letter);
      this.onClear();
    },
    ...mapActions("lettersModule", ["postLetter"]),
  },
};
</script>

<style lang="scss" scoped>
#write-letter {
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
  }
}
</style>
