import { MenuList } from '../common/model';

export const menuList: MenuList[] = [
	{ label: 'Movie', active: false, path: 'movie' },
	{ label: 'TV shows', active: false, path: 'tv' }
];

export const apiEndPoint: string = 'https://api.themoviedb.org/3';
export const apiKey: string = '545355355a5f3d21e30cf2751d3ac464';
