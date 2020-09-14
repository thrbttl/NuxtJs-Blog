import Vuex from "vuex";
import Cookie from "js-cookie";
import axios from "axios";

const createStore = () => {
  return new Vuex.Store({
    state: {
      fetchedBlog: [],
      fetchedAdminData: [],
      blogIndex: null,
      authKey: null,
      adminId: null,
      adminName: "Admin",
      adminEmail: null,
      comments: [],
      todos: []
    },
    mutations: {
      addBlog(state, blog) {
        state.fetchedBlog.push(blog);
      },
      setBlogs(state, blogs) {
        state.fetchedBlog = blogs;
      },

      updateBlog(state, edittedBlog) {
        let blog_index = state.fetchedBlog.findIndex(
          blog => blog.id == edittedBlog.id
        );
        state.fetchedBlog[blog_index] = edittedBlog;
      },
      deleteBlog(state, deleteBlog) {
        let blogId_index = state.fetchedBlog.findIndex(
          blog => blog.id == deleteBlog.id
        );
        state.fetchedBlog[blogId_index] = {};
      },

      setAuthKey(state, authKey) {
        state.authKey = authKey;
      },
      createAdminData(state, createdAdminData) {
        state.fetchedAdminData.push(createdAdminData);
      },
      editAdminData(state, editedAdminData) {
        let admin_index = state.fetchedAdminData.findIndex(
          adminData => adminData.id == editedAdminData.id
        );
        state.fetchedAdminData[admin_index] = editedAdminData;
      },
      setAdminId(state, adminId) {
        state.adminId = adminId;
      },
      setAdminData(state, adminData) {
        state.fetchedAdminData = adminData;
      },
      setAdminEmail(state, adminEmail) {
        state.adminEmail = adminEmail;
      },

      addComments(state, comments) {
        state.comments.push(comments);
      },

      addLike(state, likes) {
        let blog_index = state.fetchedBlog.findIndex(
          blog => blog.id == likes.id
        );
        state.fetchedBlog[blog_index].likes = likes
      },

      deleteComment(state, deleteComment) {
        let blogId_index = state.fetchedBlog.findIndex(
          blog => blog.id == deleteComment.id
        );
        state.fetchedBlog[blogId_index] = {};
      },

      setTodos(state, todos) {
        state.todos = todos;
      },
      addTodo(state, todos) {
        state.todos.push(todos);
      },
      deleteTodo(state, todo) {
        let todoIndex = state.todos.findIndex(t => t.id == todo.id);
        state.todos.splice(todoIndex, 1);
      },
      updateTodo(state, todo) {
        let todoIndex = state.todos.findIndex(t => t.id == todo.id);
        if (todoIndex > -1) {
          state.todos.splice(todoIndex, 1, todo); 
        }
      }
    },
    actions: {
      async nuxtServerInit(vuexcontext, context) {
        const res = await axios.get(
          process.env.firebaseDatabaseURL + "/blogs.json"
        );
        let data = res.data;
        let blogArray = [];
        for (let key in data) {
          blogArray.push({ id: key, ...data[key] });
        }
        vuexcontext.commit("setBlogs", blogArray);

        const resAuth = await axios.get(
          process.env.firebaseDatabaseURL + "/adminData.json"
        );
        let adminData = resAuth.data;
        let adminDataArray = [];
        for (let key in adminData) {
          adminDataArray.push({ id: key, ...adminData[key] });
        }
        vuexcontext.commit("setAdminData", adminDataArray);

        const resTodo = await axios.get(
          process.env.firebaseDatabaseURL + "/todos.json"
        );
        let todoData = resTodo.data;
        let todoArray = [];
        for (let key in todoData) {
          todoArray.push({ id: key, ...todoData[key] });
        }
        vuexcontext.commit("setTodos", todoArray);
      },

      addBlog(vuexcontext, blog) {
        return axios
          .post(process.env.firebaseDatabaseURL + "/blogs.json", blog)
          .then(res => {
            vuexcontext.commit("addBlog", { ...blog, id: res.data.name });
          });
      },
      updateBlog(vuexcontext, edittedBlog) {
        return axios
          .put(
            process.env.firebaseDatabaseURL + "/blogs/" +
              edittedBlog.id +
              ".json",
            edittedBlog
          )
          .then(res => {
            vuexcontext.commit("updateBlog", edittedBlog);
          })
          .catch(e => {
            console.log(e);
          });
      },
      deleteBlog(vuexContext, deleteBlog) {
        return axios
          .delete(
            process.env.firebaseDatabaseURL + "/blogs/" + deleteBlog.id + ".json",
            deleteBlog
          )
          .then(res => {
            vuexContext.commit("deleteBlog", deleteBlog);
          })
          .catch(e => {
            console.log(e);
          });
      },

      initAuth(vuexContext, req) {
        let token;
        let adminId;
        let adminEmail;

        if (req) {
          if (!req.headers.cookie) {
            return;
          }
          token = req.headers.cookie
            .split(";")
            .find(c => c.trim().startsWith("authKey="));
          if (token) {
            token = token.split("=")[1];
          }

          adminId = req.headers.cookie
            .split(";")
            .find(i => i.trim().startsWith("adminId="));
          if (adminId) {
            adminId = adminId.split("=")[1];
          }

          adminEmail = req.headers.cookie
            .split(";")
            .find(e => e.trim().startsWith("adminEmail="));
          if (adminEmail) {
            adminEmail = adminEmail.split("=")[1];
          }
        } else {
          // Client Üzerinde ÇAlışıyoruz...

          token = localStorage.getItem("authKey");
          if (!token) {
            return;
          }

          adminId = localStorage.getItem("adminId");
          adminEmail = localStorage.getItem("adminEmail");
        }

        vuexContext.commit("setAuthKey", token);
        vuexContext.commit("setAdminId", adminId);
        vuexContext.commit("setAdminEmail", adminEmail);
      },
      async authAdmin(vuexContext, authData) {
        let authLink =
          "https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=";

        const res = await axios.post(authLink + process.env.firebaseAPIKey, {
          email: authData.admin.email,
          password: authData.admin.password,
          returnSecureToken: true
        });

        Cookie.set("authKey", res.data.idToken);
        localStorage.setItem("authkey", res.data.idToken);
        vuexContext.commit("setAuthKey", res.data.idToken);

        Cookie.set("adminId", res.data.localId);
        localStorage.setItem("adminId", res.data.localId);
        vuexContext.commit("setAdminId", res.data.localId);

        Cookie.set("adminEmail", res.data.email);
        localStorage.setItem("adminEmail", res.data.email);
        vuexContext.commit("setAdminEmail", res.data.email);

      },

      createAdminData(vuexcontext, createdAdminData) {
        return axios
          .post(
            process.env.firebaseDatabaseURL + "/adminData.json",
            createdAdminData
          )
          .then(res => {
            vuexcontext.commit("createAdminData", {
              ...createdAdminData,
              id: res.data.name
            });
          });
      },
      setAdminData(vuexContext, adminData) {
        vuexContext.commit("setAdminData", adminData);
      },

      editAdminData(vuexContext, editedAdminData) {
        return axios
          .put(
            process.env.firebaseDatabaseURL + "/adminData/" +
              editedAdminData.id +
              ".json",
            editedAdminData
          )
          .then(res => {
            vuexContext.commit("editAdminData", editedAdminData);
          })
          .catch(e => {
            console.log(e);
          });
      },
      addTodo(vuexcontext, todo) {
        let todos = { todo };
        return axios
          .post(process.env.firebaseDatabaseURL + "/todos.json", todos)
          .then(res => {
            vuexcontext.commit("addTodo", { ...todos, id: res.data.name });
          });
      },
      deleteTodo(vuexContext, todo) {
        return axios
          .delete(
            process.env.firebaseDatabaseURL + "/todos/" + todo.id + ".json",
            todo
          )
          .then(res => {
            vuexContext.commit("deleteTodo", todo);
          })
          .catch(e => {
            console.log(e);
          });
      },
      updateTodo(vuexContext, todo) {
        return axios
          .put(
            process.env.firebaseDatabaseURL + "/todos/" + todo.id + ".json",
            todo
          )
          .then(res => {
            vuexContext.commit("updateTodo", todo);
          })
          .catch(e => {
            console.log(e);
          });
      },

      addLike(vuexcontext, likes) {
        return axios
          .put(
            process.env.firebaseDatabaseURL + "/blogs/" +
              likes.id +
              "/likes.json",
            likes
          )
          .then(res => {
            vuexcontext.commit("addLike", likes);
          })
          .catch(e => {
            console.log(e);
          });
      },
      addComments(vuexcontext, comments) {
        return axios
          .post(
            process.env.firebaseDatabaseURL + "/blogs/" +
              comments.blogId +
              "/comments.json",
            comments
          )
          .then(res => {
            vuexcontext.dispatch("addCommentsId", {
              ...comments,
              commentId: res.data.name
            });
          })
          .catch(e => {
            console.log(e);
          });
      },
      addCommentsId(vuexcontext, comments) {
        return axios
          .put(
            process.env.firebaseDatabaseURL + "/blogs/" +
              comments.blogId +
              "/comments/" +
              comments.commentId +
              ".json",
            comments
          )
          .then(res => {
            vuexcontext.commit("addComments", comments);
          })
          .catch(e => {
            console.log(e);
          });
      },
      deleteComment(vuexContext, deleteComment) {
        return axios
          .delete(
            process.env.firebaseDatabaseURL + "/blogs/" +
              deleteComment.blogId +
              "/comments/" +
              deleteComment.commentId +
              ".json",
            deleteComment
          )
          .then(res => {
            vuexContext.commit("deleteComment", deleteComment);
          })
          .catch(e => {
            console.log(e);
          });
      }
    },
    getters: {
      getBlogs(state) {
        return state.fetchedBlog;
      },
      getBlogIndex(state) {
        return state.blogIndex;
      },
      getAdminId(state) {
        return state.adminId;
      },
      getAdminName(state) {
        return state.adminName;
      },
      getAdminEmail(state) {
        return state.adminEmail;
      },
      getAdminData(state) {
        return state.fetchedAdminData;
      },
      isAuthenticated(state) {
        return state.authKey != null;
      },
      getAuthKey(state) {
        return state.authKey;
      },
      getTodos(state) {
        return state.todos;
      },
      getComments(state) {
        return state.comments;
      }
    }
  });
};
export default createStore;
