var app = new Vue({
  el: "#app",
  data() {
    return {
      menuList: menuList,
      subList: {},
      currentMainItem: '',
      currentSubItem: '',
      currentThirdMenu: '',
      currentThirdItem: '',
    }
  },
  methods: {
    changeMainMenu(obj, idx) {
      this.subList = obj;
      this.currentMainItem = idx;
    },
    changeSubItem(url, idx) {
      this.currentThirdMenu = '';
      this.currentSubItem = idx;
      console.log(url);
    },
    openThirdMenu(menu, idx) {
      this.currentThirdMenu = menu;
      this.currentSubItem = idx;
    },
    changeThirdItem(url, idx) {
      this.currentThirdItem = idx;
      console.log(url);
    },
  },
  mounted() {      
  },
})