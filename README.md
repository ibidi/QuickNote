**QuickNote**

QuickNote, basit bir Vue.js not alma uygulaması. Kullanıcıların hızlıca not ekleyip silebileceği, sade ve etkili bir çözüm sunar.

**Özellikler**

**Not Ekleme:** Hızlıca yeni bir not ekle.
**Not Silme:** Eklediğin notları kolayca sil.
**Anında Güncelleme:** Notların anında güncellenir ve görüntülenir.

**Kurulum**
Projeyi klonla ve gerekli bağımlılıkları kur:
```
git clone https://github.com/kullaniciadi/QuickNote.git
cd QuickNote
npm install
```

**Uygulamayı Çalıştırma**

**Uygulamayı yerel sunucuda çalıştırmak için:**
```
npm run serve
```
**Tarayıcıda aç:**

```
http://localhost:8080
```
**Kullanım**

**Yeni Not Ekleme:** Girdi alanına notunu yaz, Enter tuşuna bas veya Ekle butonuna tıkla.
**Not Silme:** Notun yanındaki Sil butonuna tıklayarak notu kaldır.
**Proje Yapısı**
```
├── src/
│   ├── components/
│   │   └── NoteApp.vue    # Not uygulaması bileşeni
│   ├── App.vue            # Ana uygulama bileşeni
│   └── main.js            # Giriş noktası
├── public/
│   └── index.html         # HTML şablonu
└── package.json           # Proje bağımlılıkları ve betikler
```
