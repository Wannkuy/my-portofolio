import { createApp } from 'vue'
import './style.css'
import App from './App.vue'

import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

import { faBars, faXmark, faDownload, faCode, faChartLine, faPaintBrush, faAnglesLeft, faAnglesRight, faAnglesUp } from '@fortawesome/free-solid-svg-icons'
import { faInstagram, faWhatsapp, faTwitter, faLinkedinIn } from '@fortawesome/free-brands-svg-icons';

library.add(
    faBars, faXmark, faDownload, faCode, faChartLine, faPaintBrush, faAnglesLeft, faAnglesRight, faAnglesUp, // Ikon solid Anda
    faInstagram, faWhatsapp, faTwitter, faLinkedinIn // Ikon merek
  );
  
createApp(App).component('font-awesome-icon', FontAwesomeIcon).mount('#app')
        