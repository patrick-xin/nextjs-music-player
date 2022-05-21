import create from 'zustand';

import { lists } from '@/data';

import { List, Track } from '@/types';

enum HOWLER_STATE {
  UNLOADED = 'unloaded',
  LOADING = 'loading',
  LOADED = 'loaded',
}

type PlayerState = {
  currentSong: Track | null;
  currentList: List;
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
  setCurrentList: (list: List) => void;
  playNextSong: (list: List) => void;
  playPrevSong: (list: List) => void;
};

export const useSongStore = create<PlayerState>((set) => ({
  currentSong: null,
  currentList: lists[0],
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
  setCurrentList: (list) => set(() => ({ currentList: list })),
  toggleList: () =>
    set((state) => ({ isPlayListShown: !state.isPlayListShown })),
  playNextSong: (list) => {
    set((state) => {
      const index = list.tracks.findIndex(
        (song) => song.id === state.currentSong?.id
      );

      const isShuffle = state.isShuffle;
      if (isShuffle) {
        const nextIndex = Math.floor(Math.random() * list.tracks.length);

        if (nextIndex === index) {
          state.playNextSong(list);
        }
        return {
          currentSong: list.tracks[nextIndex],
          isPlaying: true,
        };
      }
      return {
        currentSong:
          index !== list.tracks.length - 1
            ? list.tracks[index + 1]
            : list.tracks[0],
        isPlaying: true,
      };
    });
  },
  playPrevSong: (list) => {
    set((state) => {
      const index = list.tracks.findIndex(
        (song) => song.id === state.currentSong?.id
      );
      return {
        currentSong: index
          ? list.tracks[index - 1]
          : list.tracks[list.tracks.length - 1],
        isPlaying: true,
      };
    });
  },
}));
