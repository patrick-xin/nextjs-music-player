import { v4 as uuidv4 } from 'uuid';

import { List } from '@/types';

export const lists: List[] = [
  {
    id: uuidv4(),
    category: 'Acoustic',
    cover: '/images/acoustic/cover.jpg',
    description:
      'Acoustic music is music that solely or primarily uses instruments that produce sound through acoustic means, as opposed to electric or electronic means. While all music was once acoustic, the retronym "acoustic music" appeared after the advent of electric instruments, such as the electric guitar, electric violin, electric organ and synthesizer. Acoustic string instrumentations had long been a subset of popular music, particularly in folk. It stood in contrast to various other types of music in various eras, including big band music in the pre-rock era, and electric music in the rock era.',
    tracks: [
      {
        id: uuidv4(),
        artist: 'Benjamin Tissot',
        name: 'Acoustic Breeze',
        cover: '/images/acoustic/acoustic-1.jpg',
        duration: 237,
        src: 'https://dl.dropboxusercontent.com/s/8lpv3kkiiyd96v5/bensound-acousticbreeze.mp3?dl=0',
        genre: 'Acoustic',
      },
      {
        id: uuidv4(),
        artist: 'Benjamin Tissot',
        name: 'Sunny',
        cover: '/images/acoustic/acoustic-2.jpg',
        duration: 220,
        src: 'https://dl.dropboxusercontent.com/s/igu967tw6slfchq/bensound-sunny.mp3?dl=0',
        genre: 'Acoustic',
      },
      {
        id: uuidv4(),
        artist: 'Benjamin Tissot',
        name: 'Small Guitar',
        cover: '/images/acoustic/acoustic-3.jpg',
        duration: 322,
        src: 'https://dl.dropboxusercontent.com/s/ivxmno3dw08rgso/bensound-smallguitar.mp3?dl=0',
        genre: 'Acoustic',
      },
    ],
  },
  {
    id: uuidv4(),
    category: 'Jazz',
    cover: '/images/jazz/cover.jpg',
    description:
      'Jazz is a music genre that originated in the African-American communities of New Orleans, Louisiana in the late 19th and early 20th centuries, with its roots in blues and ragtime. Since the 1920s Jazz Age, it has been recognized as a major form of musical expression in traditional and popular music, linked by the common bonds of African-American and European-American musical parentage. Jazz is characterized by swing and blue notes, complex chords, call and response vocals, polyrhythms and improvisation. Jazz has roots in European harmony and African rhythmic rituals.',
    tracks: [
      {
        id: uuidv4(),
        artist: 'Benjamin Tissot',
        name: 'The Lounge',
        cover: '/images/jazz/jazz-1.jpg',
        duration: 416,
        src: 'https://dl.dropboxusercontent.com/s/odo51gkipvavb9a/bensound-thelounge.mp3?dl=0',
        genre: 'Jazz',
      },
      {
        id: uuidv4(),
        artist: 'Benjamin Tissot',
        name: 'The Jazz Piano',
        cover: '/images/jazz/jazz-2.jpg',
        duration: 240,
        src: 'https://dl.dropboxusercontent.com/s/rx2nqsna9tic9wp/bensound-thejazzpiano.mp3?dl=0',
        genre: 'Jazz',
      },
      {
        id: uuidv4(),
        artist: 'Benjamin Tissot',
        name: 'Romantic',
        cover: '/images/jazz/jazz-3.jpg',
        duration: 356,
        src: 'https://dl.dropboxusercontent.com/s/y3y8dvn0vxuf63b/bensound-romantic.mp3?dl=0',
        genre: 'Jazz',
      },
    ],
  },
  {
    id: uuidv4(),
    category: 'Electronica',
    cover: '/images/electronica/cover.jpg',
    description:
      'Electronica is both a broad group of electronic-based music styles intended for listening rather than strictly for dancing and a music scene that started in the early 1990s in the United Kingdom. In the United States, the term is mostly used to refer to electronic music generally.',
    tracks: [
      {
        id: uuidv4(),
        artist: 'Benjamin Tissot',
        name: 'Moose',
        cover: '/images/electronica/electronica-1.jpg',
        duration: 240,
        src: 'https://dl.dropboxusercontent.com/s/usuyqbejfaa50x1/bensound-moose.mp3?dl=0',
        genre: 'Electronica',
      },
      {
        id: uuidv4(),
        artist: 'Benjamin Tissot',
        name: 'House',
        cover: '/images/electronica/electronica-2.jpg',
        duration: 419,
        src: 'https://dl.dropboxusercontent.com/s/3u6vpjry1ouq0pu/bensound-house.mp3?dl=0',
        genre: 'Electronica',
      },
      {
        id: uuidv4(),
        artist: 'Benjamin Tissot',
        name: 'Endless Motion',
        cover: '/images/electronica/electronica-3.jpg',
        duration: 300,
        src: 'https://dl.dropboxusercontent.com/s/jpjoejz0t3hpsag/bensound-endlessmotion.mp3?dl=0',
        genre: 'Electronica',
      },
    ],
  },
  {
    id: uuidv4(),
    category: 'Rock',
    cover: '/images/rock/cover.jpg',
    description:
      "Rock music is a broad genre of popular music that originated as 'rock and roll' in the United States in the late 1940s and early 1950s, developing into a range of different styles in the mid-1960s and later, particularly in the United States and the United Kingdom.[2] It has its roots in 1940s and 1950s rock and roll, a style that drew directly from the blues and rhythm and blues genres of African-American music and from country music. Rock music also drew strongly from a number of other genres such as electric blues and folk, and incorporated influences from jazz, classical, and other musical styles. For instrumentation, rock has centered on the electric guitar, usually as part of a rock group with electric bass, drums, and one or more singers. Usually, rock is song-based music with a time signature using a verse–chorus form, but the genre has become extremely diverse. Like pop music, lyrics often stress romantic love but also address a wide variety of other themes that are frequently social or political.",
    tracks: [
      {
        id: uuidv4(),
        artist: 'Benjamin Tissot',
        name: 'Rumble',
        cover: '/images/rock/rock-1.jpg',
        duration: 234,
        src: 'https://dl.dropboxusercontent.com/s/ge186gmpyquus2f/bensound-rumble.mp3?dl=0',
        genre: 'Rock',
      },
      {
        id: uuidv4(),
        artist: 'Benjamin Tissot',
        name: 'High Octane',
        cover: '/images/rock/rock-2.jpg',
        duration: 234,
        src: 'https://dl.dropboxusercontent.com/s/uer6wpzjxh6vvpi/bensound-highoctane.mp3?dl=0',
        genre: 'Rock',
      },
      {
        id: uuidv4(),
        artist: 'Benjamin Tissot',
        name: 'Going Higher',
        cover: '/images/rock/rock-3.jpg',
        duration: 404,
        src: 'https://dl.dropboxusercontent.com/s/mkn91yrzlwx5uuw/bensound-goinghigher.mp3?dl=0',
        genre: 'Rock',
      },
      {
        id: uuidv4(),
        artist: 'Benjamin Tissot',
        name: 'Beyond The Line',
        cover: '/images/rock/rock-4.jpg',
        duration: 306,
        src: 'https://dl.dropboxusercontent.com/s/pnlgzj3outpq1ag/bensound-beyondtheline.mp3?dl=0',
        genre: 'Rock',
      },
    ],
  },
];
