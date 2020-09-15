<template name="component-name">
  <div class="font pb-5">
    <legend class="col-md-12 d-flex flex-wrap justify-content-center text-info">
      <b>Yeni Blog Yazısı</b>
    </legend>
    <div class="col-md-12 text-info">
      <span class="text-success d-flex justify-content-center">Kapak Fotoğrafı</span>
      <span class="text-warning">
        <PhotoUpload @photoUp="savePhoto($event)" />
      </span>
    </div>
    <div class="pb-5 d-flex flex-wrap justify-content-center">
      <form class="col-12" @submit.prevent="onSubmit">
        <fieldset class="text-info">
          <div class="form-group">
            <input
              v-model="blog.title"
              type="text"
              class="form-control"
              placeholder="Yazının baslıgını giriniz.."
              maxlength="70"
              required
            />
          </div>

          <div class="form-group">
            <textarea
              v-model="blog.subTitle"
              class="form-control border"
              rows="3"
              maxlength="170"
              placeholder="Yazının alt başlıgını giriniz.."
              required
            ></textarea>
          </div>
          <div class="row">
            <div class="col-12">
              <div class="bg-white p-3 tool">
                <button @click.prevent="execCmd('bold')" class="btn btn-white text-info">
                  <i class="fa fa-bold"></i>
                </button>
                <button @click.prevent="execCmd('italic')" class="btn btn-white text-info">
                  <i class="fa fa-italic"></i>
                </button>
                <button @click.prevent="execCmd('underline')" class="btn btn-white text-info">
                  <i class="fa fa-underline"></i>
                </button>
                <button @click.prevent="execCmd('strikeThrough')" class="btn btn-white text-info">
                  <i class="fa fa-strikethrough"></i>
                </button>
                <button @click.prevent="execCmd('justifyLeft')" class="btn btn-white text-info">
                  <i class="fa fa-align-left"></i>
                </button>
                <button @click.prevent="execCmd('justifyCenter')" class="btn btn-white text-info">
                  <i class="fa fa-align-center"></i>
                </button>
                <button @click.prevent="execCmd('justifyRight')" class="btn btn-white text-info">
                  <i class="fa fa-align-right"></i>
                </button>
                <button @click.prevent="execCmd('justifyFull')" class="btn btn-white text-info">
                  <i class="fa fa-align-justify"></i>
                </button>
                <button @click.prevent="execCmd('cut')" class="btn btn-white text-info">
                  <i class="fa fa-cut"></i>
                </button>
                <button @click.prevent="execCmd('copy')" class="btn btn-white text-info">
                  <i class="fa fa-copy"></i>
                </button>
                <button @click.prevent="execCmd('indent')" class="btn btn-white text-info">
                  <i class="fa fa-indent"></i>
                </button>
                <button @click.prevent="execCmd('outdent')" class="btn btn-white text-info">
                  <i class="fa fa-dedent"></i>
                </button>
                <button @click.prevent="execCmd('subscript')" class="btn btn-white text-info">
                  <i class="fa fa-subscript"></i>
                </button>
                <button @click.prevent="execCmd('superscript')" class="btn btn-white text-info">
                  <i class="fa fa-superscript"></i>
                </button>
                <button @click.prevent="execCmd('undo')" class="btn btn-white text-info">
                  <i class="fa fa-undo"></i>
                </button>
                <button @click.prevent="execCmd('redo')" class="btn btn-white text-info">
                  <i class="fa fa-repeat"></i>
                </button>
                <button
                  @click.prevent="execCmd('insertUnorderedList')"
                  class="btn btn-white text-info"
                >
                  <i class="fa fa-list-ul"></i>
                </button>
                <button
                  @click.prevent="execCmd('insertOrderedList')"
                  class="btn btn-white text-info"
                >
                  <i class="fa fa-list-ol"></i>
                </button>
                <button @click.prevent="execCmd('insertParagraph')" class="btn btn-white text-info">
                  <i class="fa fa-paragraph"></i>
                </button>
                <select
                  @change="execCommandWithArg('formatBlock', $event)"
                  class="btn btn-white text-info"
                >
                  <option value="H1">H1</option>
                  <option value="H2">H2</option>
                  <option value="H3">H3</option>
                  <option value="H4">H4</option>
                  <option value="H5">H5</option>
                  <option value="H6">H6</option>
                </select>
                <button
                  @click.prevent="execCmd('insertHorizontalRule')"
                  class="btn btn-white text-info"
                >HR</button>
                <button @click.prevent="execCommand('createLink')" class="btn btn-white text-info">
                  <i class="fa fa-link"></i>
                </button>
                <button @click.prevent="execCmd('unlink')" class="btn btn-white text-info">
                  <i class="fa fa-unlink"></i>
                </button>
                <button
                  @click.prevent="execCommandImg('insertImage')"
                  class="btn btn-white text-info"
                >
                  <i class="fa fa-file-image-o"></i>
                </button>
                <hr />
                <div class="display">
                  <span class="border p-2 m-2">
                    <i class="fas fa-font"></i>
                    <select @change="execCommandWithArg('fontName', $event)" class="btn btn-white">
                      <option value="Arial">Arial</option>
                      <option value="Comic Sans MS">Comic Sans MS</option>
                      <option value="Courier">Courier</option>
                      <option value="Georgia">Georgia</option>
                      <option value="Thoma">Thoma</option>
                      <option value="Times New Roman">Times New Roman</option>
                      <option value="Verdana">Verdana</option>
                    </select>
                  </span>
                  <span class="border p-2 m-2">
                    <i class="fas fa-text-height"></i>
                    <select @change="execCommandWithArg('fontSize', $event)" class="btn btn-white">
                      <option value="1">1</option>
                      <option value="2">2</option>
                      <option value="3">3</option>
                      <option value="4">4</option>
                      <option value="5">5</option>
                      <option value="6">6</option>
                      <option value="7">7</option>
                    </select>
                  </span>
                  <span class="border p-2 m-2">
                    <i class="fas fa-eye-dropper"></i>
                    <input type="color" @change="execCommandWithArg('foreColor', $event)" />
                  </span>
                  <span class="border p-2 m-2">
                    <i class="fas fa-paint-roller"></i>
                    <input type="color" @change="execCommandWithArg('hiliteColor', $event)" />
                  </span>
                  <button
                    @click.prevent="execCmd('selectAll')"
                    class="btn btn-white border bg-info text-white m-2"
                  >Select All</button>
                </div>
              </div>
              <div id="output" name="richTextField" contenteditable="true" class="textArea"></div>
            </div>
          </div>
          <div class="form-group">
            <label for="exampleFormControlSelect1">Kategoriler</label>
            <br />
            <input type="checkbox" id="yazilim" value="yazilim" v-model="blog.categories" checked />
            <label for="yazilim">Yazılım</label>
            <input type="checkbox" id="teknoloji" value="teknoloji" v-model="blog.categories" />
            <label for="teknoloji">Teknoloji</label>
            <input type="checkbox" id="tasarim" value="tasarim" v-model="blog.categories" />
            <label for="tasarim">Tasarım</label>
          </div>
          <div class="form-group">
            <label>Yazar Adı</label>
            <input
              v-model="blog.author"
              type="text"
              class="form-control border border-success readonly"
              placeholder="Yazarın adını giriniz.."
              readonly
            />
            <label>Blog Index</label>
            <input
              v-model="blog.indexBlog"
              type="text"
              class="form-control border border-success readonly"
              placeholder="index"
              readonly
            />
          </div>
          <hr />
          <router-link tag="button" to="/admin" class="btn btn-danger">İptal</router-link>
          <button type="submit" class="btn btn-primary">Kaydet</button>
        </fieldset>
      </form>
    </div>
  </div>
</template>

<script>
import PhotoUpload from "../Admin/AdminPhoto/PhotoUpload";
import indexVue from "../../pages/index.vue";

export default {
  data() {
    return {
      blog: {
        id: null,
        indexBlog: this.blogIn,
        title: null,
        subTitle: null,
        author: this.adminData[0].author,
        text: null,
        photo: null,
        date: null,
        categories: ["yazilim"],
        likes: [],
      },
    };
  },
  components: {
    PhotoUpload,
  },
  props: {
    adminData: {
      required: true,
    },
    blogIn: {
      required: false,
    },
  },
  methods: {
    onSubmit() {
      if (this.blog.photo == null) {
        alert("Kapak Fotoğrafı Seçiniz...");
      } else {
        var text = document.getElementById("output").innerHTML;
        this.blog.text = text;

        const options = { year: "numeric", month: "long", day: "numeric" };

        this.blog.date = new Date().toLocaleDateString("tr", options);

        this.$emit("submit", this.blog);
      }
    },
    savePhoto(photo) {
      this.blog.photo = photo[0];
    },

    execCmd(command) {
      document.execCommand(command, false, null);
    },
    execCommand(command) {
      let url = prompt("Enter the link here: ", "http://");
      document.execCommand(command, false, url);
    },
    execCommandImg(command) {
      let imgUrl;
      if(!(imgUrl = prompt("Enter the link here: ", "http://"))) return;
      document.execCommand(command, false, imgUrl);
      var img = document.querySelector("img[src='" + imgUrl + "']");
        img.className = "col-10"
        img.alt = "NuxtJs Blog"
    },

    execCommandWithArg(command, event) {
      document.execCommand(command, false, event.target.value);
    },
  },
  created() {
    this.blog = this.blog
      ? this.blog
      : {
          id: null,
          indexBlog: this.blogIn,
          title: null,
          subTitle: null,
          author: this.adminData[0].author,
          text: null,
          photo: null,
          date: null,
          categories: ["yazilim"],
        };
  },
};
</script>
<style scoped>
.font {
  font-family: "Courier New";
}

.tool {
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.19), 0 6px 6px rgba(0, 0, 0, 0.23);
}
#output {
  height: 400px;
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.19), 0 6px 6px rgba(0, 0, 0, 0.23);
  margin: 0 0 1rem 0;
  padding: 1rem;
  background-color: #fff;
  overflow: scroll;
}
#output:focus {
  outline: none;
}
.form-control:focus {
  outline: none !important;
  box-shadow: none;
}
.display {
  display: flex;
  overflow: scroll;
  text-align: center;
}
</style>
