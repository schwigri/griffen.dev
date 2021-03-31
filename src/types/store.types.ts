export enum StoreAction {
	ToggleMenu,
}

export type TStoreAction = {
	type: StoreAction;
};

export interface StoreState {
	menuOpen: boolean;
}
