import { writable } from 'svelte/store';
const storedLinks =
  JSON.parse(localStorage.getItem('linkStorage') || 'null') || [];

export const links = writable<string[]>(storedLinks);

links.subscribe((value) => (localStorage.linkStorage = JSON.stringify(value)));
