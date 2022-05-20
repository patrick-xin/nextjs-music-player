import create from 'zustand';

import { lists } from '@/data';

import { Track } from '@/types';

enum HOWLER_STATE {
  UNLOADED = 'unloaded',
  LOADING = 'loading',
  LOADED = 'loaded',
}

type PlayerState = {
  currentSong: Track | null;
  currentList: Track[];
  currentScreen: 'main' | 'playing';
  volume: number[];
  isPlayListShown: boolean;
  isPlaying: boolean;
  isRepeating: boolean;
  isMute: boolean;
  isShuffle: boolean;
  loadingState: HOWLER_STATE;
  handleVolumeRange: (values: number[]) => void;
  setLoadingState: (state: HOWLER_STATE) => void;
  togglePlay: () => void;
  toggleRepeat: () => void;
  toggleMute: () => void;
  toggleShuffle: () => void;
  toggleList: () => void;
  toggleScreen: (screen: 'main' | 'playing') => void;
  setCurrentSong: (song: Track) => void;
  setCurrentList: (songs: Track[]) => void;
  playNextSong: (songs: Track[]) => void;
  playPrevSong: (songs: Track[]) => void;
};

export const useSongStore = create<PlayerState>((set) => ({
  currentSong: null,
  currentList: lists[0].tracks,
  isPlaying: false,
  isRepeating: false,
  isMute: false,
  isShuffle: false,
  isPlayListShown: false,
  currentScreen: 'main',
  volume: [1],
  loadingState: HOWLER_STATE.UNLOADED,
  handleVolumeRange: (values) => set(() => ({ volume: values })),
  setLoadingState: (state) => set(() => ({ loadingState: state })),
  toggleMute: () => set((state) => ({ isMute: !state.isMute })),
  togglePlay: () => set((state) => ({ isPlaying: !state.isPlaying })),
  toggleRepeat: () => set((state) => ({ isRepeating: !state.isRepeating })),
  toggleShuffle: () => set((state) => ({ isShuffle: !state.isShuffle })),
  toggleScreen: (screen) =>
    set(() => ({
      currentScreen: screen,
    })),
  setCurrentSong: (song) => set(() => ({ currentSong: song, isPlaying: true })),
  setCurrentList: (songs) => set(() => ({ currentList: songs })),
  toggleList: () =>
    set((state) => ({ isPlayListShown: !state.isPlayListShown })),
  playNextSong: (songs) => {
    set((state) => {
      const index = songs.findIndex(
        (song) => song.id === state.currentSong?.id
      );
      const isShuffle = state.isShuffle;
      if (isShuffle) {
        const nextIndex = Math.floor(Math.random() * songs.length);

        if (nextIndex === index) {
          state.playNextSong(songs);
        }
        return {
          currentSong: songs[nextIndex],
          isPlaying: true,
        };
      }
      return {
        currentSong: index === songs.length - 1 ? songs[0] : songs[index + 1],
        isPlaying: true,
      };
    });
  },
  playPrevSong: (songs) => {
    set((state) => {
      const index = songs.findIndex(
        (song) => song.id === state.currentSong?.id
      );
      return {
        currentSong: index ? songs[index - 1] : songs[songs.length - 1],
        isPlaying: true,
      };
    });
  },
}));
