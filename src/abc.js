/**
 * Created by truckbubba1 on 2017/6/17.
 */
const STORAGE_KEY2 = 'todos-vuejs'
export default {
  fetch () {
    return JSON.parse(window.localStorage.getItem(STORAGE_KEY) || '[]')
  },
  save (items) {
    window.localStorage.setItem(STORAGE_KEY, JSON.stringify(items))
  },
  aa () {

  }
}
