<template>
  <Modal :value="!!letter">
    <p slot="header">編輯貼文</p>
    <Form :model="letter" label-position="left" :label-width="100">
      <FormItem label="Title">
        <Input v-model="newLetter.title"></Input>
      </FormItem>
      <FormItem label="Content">
        <Input v-model="newLetter.content" type="textarea"></Input>
      </FormItem>
    </Form>
    <div slot="footer">
      <Button @click="onEdit" type="primary">編輯</Button>
      <Button @click="onCancel">取消</Button>
    </div>
  </Modal>
</template>

<script>
import { mapActions } from "vuex";
import { makeLetter } from "../utils/letter";
export default {
  name: "EditLetter",
  props: ["letter"],
  data() {
    return {
      newLetter: {
        title: this.letter.title,
        content: this.letter.content,
        author: this.letter.author,
      },
    };
  },
  methods: {
    onEdit() {
      const newLetter = makeLetter(
        this.newLetter.title,
        this.newLetter.content,
        this.newLetter.author,
        this.letter.createdAt,
        this.letter.id
      );
      this.updateLetter(newLetter);
      this.$emit("closeEditor");
    },
    onCancel() {
      this.$emit("closeEditor");
    },
    ...mapActions("lettersModule", ["updateLetter"]),
  },
};
</script>

<style></style>
