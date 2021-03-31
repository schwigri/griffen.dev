import { Store, createStore as reduxCreateStore } from "redux";
import { StoreAction, StoreState, TStoreAction } from "../types/store.types";

const initialState: StoreState = {
	menuOpen: false,
};

export const reducer = (
	state = initialState,
	action: TStoreAction
): StoreState => {
	switch (action.type) {
		case StoreAction.ToggleMenu:
			return { menuOpen: !state.menuOpen };

		default:
			return state;
	}
};

export const createStore = (): Store<StoreState> =>
	reduxCreateStore(reducer, initialState);
