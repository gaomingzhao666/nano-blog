import EmblaCarousel from 'embla-carousel'
import type { EmblaOptionsType } from 'embla-carousel'
import { addPrevNextBtnsClickHandlers } from './EmblaCarouselArrowButtons'
import '../style/embla.css'

const OPTIONS: EmblaOptionsType = { align: 'start' }

const emblaNode = <HTMLElement>document.querySelector('.embla')
const viewportNode = <HTMLElement>emblaNode.querySelector('.embla__viewport')
const prevBtnNode = <HTMLElement>emblaNode.querySelector('.embla__button--prev')
const nextBtnNode = <HTMLElement>emblaNode.querySelector('.embla__button--next')

const emblaApi = EmblaCarousel(viewportNode, OPTIONS)

const removePrevNextBtnsClickHandlers = addPrevNextBtnsClickHandlers(
  emblaApi,
  prevBtnNode,
  nextBtnNode,
)

emblaApi.on('destroy', removePrevNextBtnsClickHandlers)
