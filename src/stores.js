import { writable } from "svelte/store";

export const itemsStore = writable([])


//ESRI
export const storeExtentInfo = writable({
    extent: null,
    rotation: null
  });
  
  export const storeSyncExtentsEnabled = writable(true);