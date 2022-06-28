import create from 'zustand';

type Position = 'topCenter' | 'bottomCenter' | 'topRight' | 'bottomRight';

type Direction = 'fadeUp' | 'fadeLeft';
type ToastState = {
  isToastOpen: boolean;
  closeToast: () => void;
  message: string;

  position: Position;
  direction: Direction;
  toast: (
    _message: string,
    _position?: Position,
    _direction?: Direction
  ) => void;
};

export const useToastStore = create<ToastState>((set) => ({
  isToastOpen: false,
  closeToast: () => set(() => ({ isToastOpen: false })),
  message: '',
  toastType: 'normal',
  position: 'bottomCenter',
  direction: 'fadeLeft',
  toast: (message, position?, direction?) =>
    set((state) => ({
      isToastOpen: true,
      message,
      position: position ?? state.position,
      direction: direction ?? state.direction,
    })),
}));
