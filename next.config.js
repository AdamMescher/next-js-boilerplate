module.exports = {
  webpack: config => {
    // Fixes npm packages that depend on `fs` module
    config.node = {
      fs: 'empty'
    }

    return config
  }
}

module.exports = {
  exportPathMap: function () {
    return {
      // ADD ALL PAGES IN APPLICATION HERE
      '/': { page: '/' }
    }
  }
}

module.exports = {
  // some configuration
  assetPrefix: process.env.NODE_ENV === 'production' ? '/next-js-boilerplate' : '',
  // another configuration
}