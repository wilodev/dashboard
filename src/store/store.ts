import { create } from 'zustand';

import { createTemplateStore } from './template/index';

import { TemplateStateInterface } from './template/types';
import { createUiStore } from './ui/index';
import { UiStateInterface } from './ui/type';

export type AppStoreInterface = UiStateInterface & TemplateStateInterface;

export const useAppStore = create<AppStoreInterface>()((...a) => ({
	...createUiStore(...a),
	...createTemplateStore(...a),
}));
