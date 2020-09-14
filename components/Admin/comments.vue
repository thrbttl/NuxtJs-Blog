<template>
  <div>
    <div v-show="commentsBlog.comments">
      <div class>
        {{this.getComments[3].id}}
        <div class="p-3">
          <div>
            <router-link
              tag="h4"
              class="text-success text-uppercase"
              :to="'/Blog/' + commentsBlog.id"
            >
              <div v-for="item in commentsBlog.comments" :key="item.name">{{item.name}}</div>
              <p class="pointer">{{commentsBlog.title}}</p>
            </router-link>
          </div>
          <commentUser
            class="text-info"
            :commentUser="userComment"
            v-for="userComment in commentsBlog.comments"
            :key="userComment.userName"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import commentUser from "./commentUser";

export default {
  components: {
    commentUser,
  },
  props: {
    commentsBlog: {
      required: false,
    },
  },

  computed: {
    getComments() {
      return Object.values(this.commentsBlog);
    },
  },
};
</script>

<style scoped>
.pointer {
  cursor: pointer;
}

.pointer:hover {
  color: rgb(0, 111, 31);
}
</style>