module.exports = {
  pwa: {
      name: "Poster Maker",
      themeColor: "#f7f7f7",
      msTileColor: "#303030",
      appleMobileWebAppCapable: true,
      appleMobileWebAppStatusBarStyle: "default",
      manifestPath: "manifest.json",
      manifestOptions: {
        name: "Poster Maker",
        short_name: "Poster Maker",
        theme_color: "#f7f7f7",
        background_color: "#303030",
        orientation: "portrait",
        start_url: ".",
      },
      iconPath: {
        favicon32: 'public/img/icons/favicon-32x32.png',
        favicon16: 'public/img/icons/favicon-16x16.png',
        appleTouchIcon: 'public/img/icons/apple-touch-icon-180x180.png',
        msTileImage: 'public/img/icons/msapplication-icon-144x144.png'
      }
  }
}
