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
      pageUrl: 'pages/welcome.html',
    }
  },
  methods: {
    mainMenuHandlar(obj, url, idx) {
      if(url) {
        this.subList = {};
        this.pageUrl = `${url}`;
      } else {
        this.subList = obj;
      }
      this.currentMainItem = idx;
      this.currentSubItem = '';
      this.currentThirdMenugit = '';
      this.currentThirdItem = '';
    },
    changeSubItem(url, idx) {
      this.currentThirdMenu = '';
      this.currentSubItem = idx;
      this.pageUrl = `${url}`;
    },
    openThirdMenu(menu, idx) {
      this.currentThirdMenu = menu;
      this.currentSubItem = idx;
    },
    changeThirdItem(url, idx) {
      this.currentThirdItem = idx;
      this.pageUrl = `${url}`;
    },
  },
  mounted() {      
  },
})