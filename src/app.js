import Vue from "vue";

const app = new Vue({
  data: {
    hello: "Hallo"
  },
  template: '<div id="app"> {{ hello }} </div>div>'
});

export { app };
