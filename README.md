# NuxtJs Blog

- Baştan sona NuxtJs (dolayısıyla VueJs) ile geliştirilmiş ve geliştirilmeye devam eden bir Blog sitesi.
- Database ve Authentication işlemleri için Firebase kullanıldı.
- Gerçek hayattaki örneği ve demosu için : [NuxtJs Blog](https://blognuxt1.ey.r.appspot.com/)
- Ziyaret ederek sayfa tasarımını, admin panelini gözden geçirebilirsiniz.

### Gereksinimler

* Sisteminizde [Node.Js](https://nodejs.org) kurulu olması gerekmektedir.
* Firebase bağlantısı yapacağımız için [gmail](https://mail.google.com) adresi gerekmektedir.

## Projede kullanılan paketler : 
    "@nuxtjs/axios": "^5.3.6",
    "chart.js": "^2.9.3",
    "firebase": "^7.19.1",
    "js-cookie": "^2.2.1",
    "moment": "^2.27.0",
    "nuxt": "^2.0.0",
    "vue-chartjs": "^3.5.1",
    "vuelidate": "^0.7.5"
    
    *** Bu paketler $ npm install komutu ile otamatik olarak yüklenecektir.


## Kurulum

 - Kurulum için öncelikle Firebase işlemlerini gerçekleştirmeniz gerekmektedir. Bunun için kullanabileceğiniz dökümanlar :  
 [Blog Sistesinin Kurulumu Ve Firebase Işlemleri (2/1)](https://blognuxt1.ey.r.appspot.com/Blog/-MHGcC94Ri0xXmNi2765),  [Blog Sitesinin Local Kurulumu Ve Auth Işlemleri (2/2)](https://blognuxt1.ey.r.appspot.com/Blog/-MHISmcydA_DGXdxsG7K)
 - Firebase Web App ayarlarındaki "firebaseConfig" objesinin içeriğini, gitHub'dan indirdiğiniz projenin "nuxt.config.js" dosyasının içerisindeki "env" objesinde karşılık gelen yerlere yazınız.
 - Firebase "Storage" bağlantısı için, firebase sayfasından "Storage" sekmesine gidin ve başlatın. "Storage" içerisinden "Rules" sekmesine giderek ``` "allow read, write: if request.auth != null;" ``` kodundaki "null" silip yerine "true" yazınız.
 
 ### Proje Klasöründe Terminal Üzerinden
 (Projeyi açtığınız editörün (Visual Studio Code gibi) terminali kullanılabilir.)

``` bash
# bağımlılıkları yüklemek için:
$ npm install

# localhost:3000 üzerinden yayınlamak için:
$ npm run dev
``` 

### Firebase Sayfasından

- Firebase "Authentication" işlemi için, firebase sayfasından "Authentication" sekmesine gidin ve "E-posta/Şifre" yazan başlığı seçerek kaydetme işlemini yapınız.
- Authentication sekmesinden kullanıcı ekleyiniz.
- Admin girişi ve "Authentication" işlemini gerçekleştirmek için sayfanın en altında "Admin" yazan buton ile admin paneline gidiniz.

![Admin](https://firebasestorage.googleapis.com/v0/b/blognuxt1.appspot.com/o/npm%20auth%2FEkran%20Resmi%202020-09-16%2010.44.01.png?alt=media&token=4febefed-fcde-4bde-b09c-aad381e24ad0)

- E-posta ve Şifreniz ile giriş yapınız.
- Admin panelinden Profil bilgilerinizi eksiksiz olarak girip kaydediniz.
- Panelden istediğiniz gibi içerik ekleyerek, düzenlemeler yaparak Blog sitesini kullanabilirsiniz.

``` bash
# build for production and launch server
$ npm run build
$ npm run start

# generate static project
$ npm run generate
```

For detailed explanation on how things work, check out [Nuxt.js docs](https://nuxtjs.org).
