<template>
  <div class="note-app">
    <h1>Not Uygulaması</h1>
    <input v-model="newNote" placeholder="Yeni Not Ekle" @keyup.enter="addNote" />
    <button @click="addNote">Ekle</button>
    <ul>
      <li v-for="(note, index) in notes" :key="index">
        {{ note.text }}
        <button @click="deleteNote(note.id)">Sil</button>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  data() {
    return {
      newNote: '',
      notes: []
    }
  },
  created() {
    this.loadNotes()
  },
  methods: {
    async addNote() {
      if (this.newNote !== '') {
        const docRef = await this.$db.collection('notes').add({
          text: this.newNote,
          timestamp: new Date()
        })
        this.notes.push({ id: docRef.id, text: this.newNote })
        this.newNote = ''
      }
    },
    async loadNotes() {
      const querySnapshot = await this.$db.collection('notes').orderBy('timestamp').get()
      querySnapshot.forEach(doc => {
        this.notes.push({ id: doc.id, text: doc.data().text })
      })
    },
    async deleteNote(id) {
      await this.$db.collection('notes').doc(id).delete()
      this.notes = this.notes.filter(note => note.id !== id)
    }
  }
}
</script>
