const menuList = [
  {
    name: "Item1",
    subList: {
      subItem1: {
        name: "subItem1_1",
        url: "subItem1_1.html"
      },
      subItem2: {
        name: "subItem1_2",
        url: "subItem1_2.html"
      },
      subItem3: {
        name: "subItem1_3",
        url: "subItem1_3.html"
      },
    },
  },
  {
    name: "Item2",
    subList: {
      subItem1: {
        name: "subItem2_1",
        subList: {
          subItem1: {
            name: "subItem2_1_1",
            url: "subItem2_1_1.html"
          },
          subItem2: {
            name: "subItem2_1_2",
            url: "subItem2_1_2.html"
          },
        }
      },
      subItem2: {
        name: "subItem2_2",
        url: "subItem2_2.html"
      },
      subItem3: {
        name: "subItem2_3",
        subList: {
          subItem1: {
            name: "subItem2_3_1",
            url: "subItem2_3_1.html"
          },
          subItem2: {
            name: "subItem2_3_2",
            url: "subItem2_3_2.html"
          },
          subItem3: {
            name: "subItem2_3_2",
            url: "subItem2_3_2.html"
          },
        }
      },
    }
  },
  {
    name: "Item3",
    subList: {
      subItem1: {
        name: "subItem3_1",
        url: "subItem3_1.html"
      },
      subItem2: {
        name: "subItem3_2",
        url: "subItem3_2.html"
      },
    }
  },

]

export default { 
  menuList: function(){
    return menuList
  }
}