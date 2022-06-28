import create from 'zustand';

import { List, Track } from '@/generated/graphql';

export enum HOWLER_STATE {
  UNLOADED = 'unloaded',
  LOADING = 'loading',
  LOADED = 'loaded',
}
type PlayerState = {
  currentSong: Track | null;
  currentList: List | null;
  currentScreen: 'main' | 'playing';
  volume: number[];
  isLoaded: HOWLER_STATE;
  isPlayListShown: boolean;
  isPlaying: boolean;
  isRepeating: boolean;
  isMute: boolean;
  isShuffle: boolean;
  handleVolumeRange: (_values: number[]) => void;
  togglePlay: () => void;
  toggleRepeat: () => void;
  toggleMute: () => void;
  toggleShuffle: () => void;
  toggleList: () => void;
  toggleScreen: (_screen: 'main' | 'playing') => void;
  setCurrentSong: (_song: Track, _isPlaying: boolean) => void;
  setCurrentList: (_list: List) => void;
  playNextSong: () => void;
  playPrevSong: () => void;
  setLoaded: (_isLoaded: HOWLER_STATE) => void;
};

export const useSongStore = create<PlayerState>((set, get) => ({
  currentSong: null,
  currentList: null,
  isPlaying: false,
  isRepeating: false,
  isMute: false,
  isShuffle: false,
  isPlayListShown: false,
  isLoaded: HOWLER_STATE.UNLOADED,
  currentScreen: 'main',
  volume: [1],
  handleVolumeRange: (values) => set(() => ({ volume: values })),
  toggleMute: () => set((state) => ({ isMute: !state.isMute })),
  togglePlay: () => set((state) => ({ isPlaying: !state.isPlaying })),
  toggleRepeat: () => set((state) => ({ isRepeating: !state.isRepeating })),
  toggleShuffle: () => set((state) => ({ isShuffle: !state.isShuffle })),
  toggleScreen: (screen) =>
    set(() => ({
      currentScreen: screen,
    })),
  setCurrentSong: (song, isPlaying) =>
    set(() => ({ currentSong: song, isPlaying })),
  setLoaded: (isLoaded) => set(() => ({ isLoaded })),
  setCurrentList: (list) => set(() => ({ currentList: list })),
  toggleList: () =>
    set((state) => ({ isPlayListShown: !state.isPlayListShown })),
  playNextSong: () => {
    set((state) => {
      const currentList = get().currentList as List;
      const index = currentList.tracks.findIndex(
        (song) => song.id === state.currentSong?.id
      );

      const isShuffle = state.isShuffle;
      if (isShuffle) {
        const nextIndex = Math.floor(
          Math.random() * currentList?.tracks.length
        );

        if (nextIndex === index) {
          state.playNextSong();
        }

        return {
          currentSong: currentList.tracks[nextIndex],
          isPlaying: true,
        };
      }

      return {
        currentSong:
          index !== currentList.tracks.length - 1
            ? currentList.tracks[index + 1]
            : currentList.tracks[0],
        isPlaying: true,
      };
    });
  },
  playPrevSong: () => {
    set((state) => {
      const currentList = get().currentList as List;
      const index = currentList.tracks.findIndex(
        (song) => song.id === state.currentSong?.id
      );

      return {
        currentSong: index
          ? currentList.tracks[index - 1]
          : currentList.tracks[currentList.tracks.length - 1],
        isPlaying: true,
      };
    });
  },
}));
