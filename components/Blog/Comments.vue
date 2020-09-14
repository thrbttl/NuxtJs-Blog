<template>
  <div class>
    <div class="be-comment-block">
      <h1 class="comments-title">Yorumlar ({{getComments.length}})</h1>
      <div v-for="(item, index) in getComments" :key="index" class="be-comment">
        <div class="be-comment-content">
          <span class="be-comment-name text-capitalize">{{item.userName}}</span>
          <span class="be-comment-time">
            <i class="fa fa-clock-o"></i>
            {{item.date}}
          </span>
          <p class="be-comment-text">{{item.userComments}}</p>
        </div>
      </div>
      <div
        v-for="commentState in getCommentsState"
        :key="commentState.commentId"
        class="be-comment"
      >
        <div class="be-comment-content">
          <span class="be-comment-name text-capitalize">{{commentState.userName}}</span>
          <span class="be-comment-time">
            <i class="fa fa-clock-o"></i>
            {{commentState.date}}
          </span>
          <p class="be-comment-text">{{commentState.userComments}}</p>
        </div>
      </div>
      <div class="border-top">
        <h6 class="py-3 text-muted">Yorum yapmak için aşağıdaki bilgileri doldurunuz.</h6>
      </div>
      <form @submit.prevent="onSubmit" class="form-block">
        <div class="row">
          <div class="col-xs-12 col-sm-6">
            <div class="form-group fl_icon">
              <div class="icon">
                <i class="fa fa-user"></i>
              </div>
              <input
                v-model="comments.userName"
                class="form-input text-capitalize"
                type="text"
                placeholder="İsim Soyisim"
                required
              />
            </div>
          </div>
          <div class="col-xs-12 col-sm-6 fl_icon">
            <div class="form-group fl_icon">
              <div class="icon">
                <i class="fa fa-envelope-o"></i>
              </div>
              <input
                v-model="comments.userEmail"
                class="form-input"
                type="email"
                placeholder="E-Mail Adresiniz"
                required
              />
            </div>
          </div>
          <div class="col-12">
            <div class="form-group">
              <textarea
                v-model="comments.userComments"
                class="form-control"
                placeholder="Yorumunuz"
                rows="4"
                required
              ></textarea>
            </div>
          </div>
        </div>
        <div class="d-flex justify-content-end">
          <button type="submit" class="btn btn-info">Kaydet</button>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      comments: {
        blogId: this.blogId,
        userName: null,
        userEmail: null,
        userComments: null,
        date: null,
      },
      show: false,
    };
  },
  props: {
    blogId: {
      required: true,
    },
    commentsBlog: {
      required: false,
    },
  },
  methods: {
    onSubmit() {
      this.$store.dispatch("addComments", this.comments).then((res) => {
        this.show = true;
        this.comments = {};
      });
      const options = { year: "numeric", month: "short", day: "numeric" };

      this.comments.date = new Date().toLocaleDateString("tr", options);
    },
  },
  computed: {
    getComments() {
      return Object.values(this.commentsBlog);
    },
    getCommentsState() {
      return this.$store.getters.getComments;
    },
  },
};
</script>

<style scoped>
.be-comment-block {
  margin-bottom: 50px !important;
  border: 1px solid #edeff2;
  border-radius: 2px;
  padding: 0px;
  border: 1px solid #ffffff;
}

.comments-title {
  font-size: 16px;
  color: #262626;
  margin-bottom: 15px;
  font-family: "Conv_helveticaneuecyr-bold";
}

.be-img-comment {
  font-size: 50px;
}

.be-ava-comment {
  width: 60px;
  height: 60px;
  border-radius: 50%;
}

.be-comment-content {
  margin-left: 0px;
}

.be-comment-content span {
  display: inline-block;
  width: 49%;
  margin-bottom: 15px;
}

.be-comment-name {
  font-size: 23px;
  color: #383b43;
  font-family: "Conv_helveticaneuecyr-bold";
}

.be-comment-content a {
  color: #383b43;
}

.be-comment-content span {
  display: inline-block;
  width: 49%;
  margin-bottom: 15px;
}

.be-comment-time {
  text-align: right;
}

.be-comment-time {
  font-size: 11px;
  color: #b4b7c1;
}

.be-comment-text {
  font-size: 13px;
  line-height: 18px;
  color: #7a8192;
  display: block;
  background: #f6f6f7;
  border: 1px solid #edeff2;
  padding: 15px 20px 20px 20px;
}

.form-group.fl_icon .icon {
  position: absolute;
  top: 1px;
  left: 16px;
  width: 48px;
  height: 48px;
  background: #f6f6f7;
  color: #b5b8c2;
  text-align: center;
  line-height: 50px;
  -webkit-border-top-left-radius: 2px;
  -webkit-border-bottom-left-radius: 2px;
  -moz-border-radius-topleft: 2px;
  -moz-border-radius-bottomleft: 2px;
  border-top-left-radius: 2px;
  border-bottom-left-radius: 2px;
}

.form-group .form-input {
  font-size: 13px;
  line-height: 50px;
  font-weight: 400;
  color: #b4b7c1;
  width: 100%;
  height: 50px;
  padding-left: 20px;
  padding-right: 20px;
  border: 1px solid #edeff2;
  border-radius: 3px;
}

.form-group.fl_icon .form-input {
  padding-left: 70px;
}

.form-group textarea.form-input {
  height: 150px;
}
</style>