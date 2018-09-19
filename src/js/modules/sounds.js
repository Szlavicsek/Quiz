import {
  Howl,
  Howler
} from 'howler';

Howler.volume(1);

export const sounds = {
  star: new Howl({
    src: ['./src/assets/sounds/star.ogg', './src/assets/sounds/star.mp3']
  }),
  click: new Howl({
    src: ['./src/assets/sounds/click.ogg', './src/assets/sounds/click.mp3']
  }),
  correct: new Howl({
    src: ['./src/assets/sounds/correct.ogg', './src/assets/sounds/correct.mp3']
  }),
  wrong: new Howl({
    src: ['./src/assets/sounds/wrong.ogg', './src/assets/sounds/wrong.mp3']
  })
}