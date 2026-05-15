import Reveal from 'reveal.js'
import 'reveal.js/reset.css'
import 'reveal.js/reveal.css'
import './css/theme.css'
import { initParticles } from './js/particles.js'
import { initCharts } from './js/charts.js'

const deck = new Reveal({
  hash: true,
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
