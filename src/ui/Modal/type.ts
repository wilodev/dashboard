import { AppPropsInterface } from '@/types/default';

export interface ModalInterface extends AppPropsInterface {
	title: string;
	id: string;
	size?: 'lg' | 'fullscreen';
}
