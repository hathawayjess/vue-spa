import Vue from 'vue'

Vue.component('app', {
  template: `
      <div id="app">
        <nav class="nav has-shadow">
          <div class="container"></div>
            <a href="/">
            <img src="http://bit.ly/vue-img"
                  alt="Vue SPA">
            </a>
        </nav>
        <section class="main-section section"></section>
        <footer class="footer">
          <div class="container">
            <div class="content has-text-centered">
              Follow us on
              <a href="https://twitter.com/hathawayj3ss"
              target="_blank">Twitter</a>
            </div>
          </div>
        </footer>
      </div>
`
})

const app = new Vue({
  render: h => h('app')
})

export { app }
