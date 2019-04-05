import { p5 as p5Chariot } from './Chariot'
import { p5 as p5Death } from './Death'
import { p5 as p5Devil } from './Devil'
import { p5 as p5Emperor } from './Emperor'
import { p5 as p5Empress } from './Empress'
import { p5 as p5Fortune } from './Fortune'
import { p5 as p5Hanged } from './Hanged'
import { p5 as p5Hermit } from './Hermit'
import { p5 as p5Hierophant } from './Hierophant'
import { p5 as p5Lovers } from './Lovers'
import { p5 as p5Moon } from './Moon'
import { p5 as p5Priestess } from './Priestess'
import { p5 as p5Star } from './Star'
import { p5 as p5Tower } from './Tower'
import p5cover from '../assets/p5cover.png'
import p4cover from '../assets/p4cover.jpg'
import p3cover from '../assets/p3cover.jpg'

export const persona5 = {
  confidants: [
    p5Chariot,
    p5Death,
    p5Devil,
    p5Emperor,
    p5Empress,
    p5Fortune,
    p5Hanged,
    p5Hermit,
    p5Hierophant,
    p5Lovers,
    p5Moon,
    p5Priestess,
    p5Star,
    p5Tower
  ]
}

export const games = [
  { id: 1, title: 'Persona 5', img: p5cover, guide: 'Confidant Guide', path: '/p5' },
  { id: 2, title: 'Persona 4', img: p4cover, guide: 'Social Link Guide', path: '/p4' },
  { id: 3, title: 'Persona 3', img: p3cover, guide: 'Social Link Guide', path: '/p3' }
]
