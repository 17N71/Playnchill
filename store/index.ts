import { create } from 'zustand';
import { devtools } from 'zustand/middleware';
import { immer } from 'zustand/middleware/immer';

interface BearState {
	bears: number;
	increase: (by: number) => void;
}

const useBearStore = create<BearState>()(
	devtools(
		immer(set => ({
			bears: 0,
			increase: by => set(state => ({ bears: state.bears + by })),
		})),
		{
			name: 'bear-storage',
		}
	)
);
