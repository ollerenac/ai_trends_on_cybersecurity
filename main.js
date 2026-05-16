import Reveal from 'reveal.js'
import Notes from 'reveal.js/plugin/notes'
import 'reveal.js/reset.css'
import 'reveal.js/reveal.css'
import './css/theme.css'
import '@tabler/icons-webfont/dist/tabler-icons.min.css'
import { initParticles } from './js/particles.js'
import { initCharts } from './js/charts.js'

const deck = new Reveal({
  plugins: [ Notes ],
  hash: true,
  fragmentInURL: false,
  transition: 'fade',
  transitionSpeed: 'slow',
  backgroundTransition: 'fade',
  controls: true,
  progress: true,
  center: true,
  slideNumber: 'c/t',
  width: 1280,
  height: 720,
  margin: 0.04,
})

deck.initialize().then(() => {
  initParticles()
  initCharts(deck)
})
