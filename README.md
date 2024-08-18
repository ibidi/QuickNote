<p align="center">
  <h1 align="center">ibidi QuickNote Vue.JS</h1>
</p>

QuickNote, Vue.js ile geliştirilmiş basit bir not alma uygulamasıdır. Kullanıcıların PIN kodu ile giriş yaparak not ekleyip silmelerini sağlar. Her kullanıcı yalnızca kendi notlarını görür ve yönetir.

> 🚧 Bu proje şu anda geliştirilme aşamasındadır.

> Öncelikle README.md'yi okuyun. Ardından kurulum işlemini gerçekleştirin.

### 🔥 Özellikler

- [x] [`YENİ`](/#) **PIN Koduyla Giriş:** Kullanıcıların sadece 4 rakamlı PIN kodu ile giriş yapmasını sağlar.
- [x] [`YENİ`](/#) **Not Ekleme ve Silme:** Kullanıcılar, not ekleyebilir ve mevcut notları silebilir.
- [x] [`YENİ`](/#) **Kullanıcı Bazlı Notlar:** Her kullanıcının notları sadece kendi PIN kodlarıyla erişilebilir.

### ❓ Kurulum

Projeyi klonla ve gerekli bağımlılıkları kur:
```js
git clone https://github.com/ibidi/QuickNote.git
cd QuickNote
npm install
```

### 🛠 Firebase Yapılandırması

> Firebase Console üzerinden yeni bir proje oluştur.
> Firestore Database'i etkinleştir.
> `src/main.js` dosyasına Firebase yapılandırmasını ekle.

```js
import { createApp } from 'vue'
import App from './App.vue'
import firebase from 'firebase/app'
import 'firebase/firestore'

// Firebase yapılandırması
const firebaseConfig = {
  apiKey: "YOUR_API_KEY",
  authDomain: "YOUR_PROJECT_ID.firebaseapp.com",
  projectId: "YOUR_PROJECT_ID",
  storageBucket: "YOUR_PROJECT_ID.appspot.com",
  messagingSenderId: "YOUR_MESSAGING_SENDER_ID",
  appId: "YOUR_APP_ID"
}

// Firebase'i başlat
firebase.initializeApp(firebaseConfig)
const db = firebase.firestore()

// Firebase'i Vue bileşenlerine ekleyelim
const app = createApp(App)
app.config.globalProperties.$db = db
app.mount('#app')
```
> Firebase Veritabanı Yapılandırması:
`users` koleksiyonunda kullanıcı PIN kodlarını saklayın.
`notes` koleksiyonunda notları saklayın ve her notun pin özelliğini kullanıcı PIN koduna göre ayarlayın.

### 📩 Kullanım

- Giriş Yap: Uygulama açıldığında PIN kodunu girerek giriş yapın.
- Not Ekleme: Giriş yaptıktan sonra, yeni not eklemek için metin kutusuna yazın ve Ekle butonuna tıklayın veya Enter tuşuna basın.
- Not Silme: Notun yanında bulunan Sil butonuna tıklayarak notu kaldırın.
- Çıkış Yap: Çıkış Yap butonuna tıklayarak oturumu kapatın.

### 🐛 Proje Yapısı

```
QuickNote/
├── src/
│   ├── components/
│   │   └── NoteApp.vue    # Not uygulaması bileşeni
│   ├── App.vue            # Ana uygulama bileşeni
│   └── main.js            # Giriş noktası
├── public/
│   └── index.html         # HTML şablonu
└── package.json           # Proje bağımlılıkları ve betikler
```


### 💖 Katkıda Bulunma

<p align="center">
  <a href="https://github.com/sponsors/ibidi">
    <img src='https://cdn.jsdelivr.net/gh/ibidi/.github/sponsors.svg'/>
  </a>
</p>
