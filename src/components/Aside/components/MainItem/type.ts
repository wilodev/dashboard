export interface MainItemInterface {
	id: string;
	title: string;
	icon: string;
	link?: string;
	handleClick?: (id: string) => void;
}
