<template>
  <div>
    <div v-show="show">
      <div>
        <span class="text-capitalize">
          <strong>Kullanıcı Adı :</strong>
          {{commentUser.userName}}
        </span>
        <span class="ml-2">
          <strong>Kullanıcı E-Maili :</strong>
          {{commentUser.userEmail}}
        </span>
        <br />
        <span class="be-comment-time ml-2">
          <i class="fa fa-clock-o"></i>
          {{commentUser.date}}
        </span>
        <div class="be-comment-content">
          <p class="be-comment-text">{{commentUser.userComments}}</p>
        </div>
        <div class="d-flex justify-content-end">
          <span
            v-show="this.deleted"
            class="badge badge-pill badge-danger px-4"
          >Blog Yazısı Siliniyor...</span>

          <button class="btn btn-danger ml-auto mr-1 mb-5" @click.prevent="deleteComment">Sil</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      show: true,
      deleted: false,
    };
  },
  props: {
    commentUser: {
      required: false,
    },
  },

  methods: {
    deleteComment() {
      this.$store.dispatch("deleteComment", this.commentUser).then((res) => {
        this.deleted = true;
        setTimeout(() => {
          this.show = false;
        }, 1000);
      });
    },
  },
};
</script>
<style scoped>
.be-comment-content {
  margin-left: 0px;
}

.be-comment-time {
  text-align: right;

  font-size: 11px;
  color: #b4b7c1;
}

.be-comment-text {
  font-size: 13px;
  line-height: 18px;
  color: #e6e6e6;
  display: block;
  background: #f6f6f710;
  border: 1px solid #edeff208;
  padding: 15px 20px 20px 20px;
}
</style>
