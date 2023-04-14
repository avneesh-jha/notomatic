import axios from "axios";

const BASE_URL = "http:/localhost:3200/notes";

export class NoteAPI {
  static async create(note) {
    return await axios.post(`${BASE_URL}`, note);
  }

  static async fetchAll() {
    return await axios.get(`${BASE_URL}`);
  }
  static async fetchById(noteId) {
    return await axios.get(`${BASE_URL}/${noteId}`);
  }
  static async deleteById(noteId) {
    return await axios.delete(`${BASE_URL}/${noteId}`);
  }
  static async updateById(note) {
    return await axios.patch(`${BASE_URL}/${noteId}`, note);
  }
}
