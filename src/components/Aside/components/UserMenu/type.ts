import { RefObject } from 'react';

export interface UserMenuInterface {
	show: boolean;
	ref: RefObject<HTMLDivElement>;
	handleClick: () => void;
}
