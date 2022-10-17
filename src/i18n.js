import Vue from 'vue'
import VueI18n from 'vue-i18n'
import ru from './locales/ru.json'
Vue.use(VueI18n)
export const i18n = new VueI18n ({
  locale: 'ru',
  fallbackLocale:'uz',
   messages:{
    ru
    // en:{
    //   home: "Home",
    //   about: "About",
    //   news: "News",
    //   contacts: "Contacts",
    //   avatar: "Avatar",
    //   image: "Image"
    // },
    // ru:{
    //   home: "Главное",
    //   about: "Основное",
    //   news: "Новости",
    //   contacts: "Контакты",
    //   avatar: "Аватар",
    //   image: "Изображение"
    //   }
   }
})

// function loadLocaleMessages () {
//   const locales = require.context('./locales', true, /[A-Za-z0-9-_,\s]+\.json$/i)
//   const messages = {}
//   locales.keys().forEach(key => {
//     const matched = key.match(/([A-Za-z0-9-_]+)\./i)
//     if (matched && matched.length > 1) {
//       const locale = matched[1]
//       messages[locale] = locales(key)
//     }
//   })
//   return messages
// }

// export default new VueI18n({
//   locale:'uz',
//   fallbackLocale: process.env.VUE_APP_I18N_FALLBACK_LOCALE || 'uz',
//   messages: loadLocaleMessages()
// })