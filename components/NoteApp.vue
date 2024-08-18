<template>
  <div class="note-app">
    <h1>Not Uygulaması</h1>
    <input v-model="newNote" placeholder="Yeni Not Ekle" @keyup.enter="addNote" />
    <button @click="addNote">Ekle</button>
    <ul>
      <li v-for="(note, index) in notes" :key="index">
        {{ note }}
        <button @click="deleteNote(index)">Sil</button>
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
  methods: {
    addNote() {
      if (this.newNote !== '') {
        this.notes.push(this.newNote);
        this.newNote = '';
      }
    },
    deleteNote(index) {
      this.notes.splice(index, 1);
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
