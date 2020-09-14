<template>
  <div class="row d-flex justify-content-end mr-1">
    <button @click="likeCount" class="btn btn-info">
      <i class="far fa-thumbs-up"></i>
      <span>{{this.likes.like}}</span>
    </button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      likes: {
        id: this.blogId,
        like: this.likeBlog.like ? this.likeBlog.like : 0,
      },
      likeStatus: false,
    };
  },
  props: {
    blogId: {
      required: true,
    },
    likeBlog: {
      required: false,
    },
  },

  methods: {
    likeCount() {
      if (this.likeStatus == true) {
        this.likes.like--;
        this.likeStatus = false;
        this.$store.dispatch("addLike", this.likes).then((res) => {
        });
      } else if (this.likeStatus == false) {
        this.likes.like++;
        this.likeStatus = true;
        this.$store.dispatch("addLike", this.likes).then((res) => {
        });
      }
    },
  },
};
</script>