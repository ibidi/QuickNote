<template>
  <div class="note-app">
    <h1>Not Uygulaması</h1>
    <div v-if="!isAuthenticated">
      <input v-model="pin" placeholder="PIN Kodu" type="password" />
      <button @click="authenticate">Giriş Yap</button>
    </div>
    <div v-if="isAuthenticated">
      <input v-model="newNote" placeholder="Yeni Not Ekle" @keyup.enter="addNote" />
      <button @click="addNote">Ekle</button>
      <ul>
        <li v-for="(note, index) in notes" :key="index">
          {{ note.text }}
          <button @click="deleteNote(note.id)">Sil</button>
        </li>
      </ul>
      <button @click="logout">Çıkış Yap</button>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      newNote: '',
      notes: [],
      pin: '',
      isAuthenticated: false
    }
  },
  created() {
    this.loadNotes()
  },
  methods: {
    async authenticate() {
      if (this.pin.length === 4 && !isNaN(this.pin)) {
        const usersRef = this.$db.collection('users')
        const userDoc = await usersRef.doc(this.pin).get()

        if (userDoc.exists) {
          this.isAuthenticated = true
        } else {
          alert('Geçersiz PIN!')
        }
      } else {
        alert('PIN sadece 4 rakamlı olmalı!')
      }
    },
    async addNote() {
      if (this.newNote !== '') {
        const docRef = await this.$db.collection('notes').add({
          text: this.newNote,
          timestamp: new Date(),
          pin: this.pin
        })
        this.notes.push({ id: docRef.id, text: this.newNote })
        this.newNote = ''
      }
    },
    async loadNotes() {
      const querySnapshot = await this.$db.collection('notes').where('pin', '==', this.pin).orderBy('timestamp').get()
      querySnapshot.forEach(doc => {
        this.notes.push({ id: doc.id, text: doc.data().text })
      })
    },
    async deleteNote(id) {
      await this.$db.collection('notes').doc(id).delete()
      this.notes = this.notes.filter(note => note.id !== id)
    },
    logout() {
      this.isAuthenticated = false
      this.pin = ''
      this.notes = []
    }
  }
}
</script>

<style>
.note-app {
  max-width: 400px;
  margin: 0 auto;
  text-align: center;
}
input {
  width: 100%;
  padding: 10px;
  margin-bottom: 10px;
}
button {
  padding: 10px;
  margin-top: 5px;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  padding: 10px;
  background: #f4f4f4;
  margin-bottom: 5px;
}
</style>
