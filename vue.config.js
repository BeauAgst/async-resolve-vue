const { WebpackManifestPlugin } = require('webpack-manifest-plugin')
const nodeExternals = require('webpack-node-externals')


module.exports = {
  chainWebpack: config => {
    config.plugin('manifest').use(new WebpackManifestPlugin({ fileName: 'manifest.json' }))

    config.target('node')
    config.output.libraryTarget('commonjs2')

    config.externals(nodeExternals({ allowlist: /\.(css|vue)$/ }))

    config.module.rule('vue').uses.delete('cache-loader')
    config.module.rule('js').uses.delete('cache-loader')
    config.module.rule('ts').uses.delete('cache-loader')
    config.module.rule('tsx').uses.delete('cache-loader')
    config.optimization.delete('splitChunks')
    config.plugins.delete('hmr')
    config.plugins.delete('preload')
    config.plugins.delete('prefetch')
  },
}
