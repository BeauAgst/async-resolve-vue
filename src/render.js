const path = require('path')
const { createSSRApp } = require('vue')
const { renderToString } = require('@vue/server-renderer')
const manifest = require('../dist/manifest.json')



;(async () => {
  const filepath = path.join(__dirname, '../dist', manifest['app.js'])
  const Component = require(filepath).default
  const App = createSSRApp(Component)
  const str = await renderToString(App)
  console.log(str)
})()