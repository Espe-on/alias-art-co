import {createSelector} from "reselect";

const COLLECTION_ID_MAP = {
    artwork: 1,
    cards: 2,
    prints: 3,
    pins: 4,
    tshirts: 5
}

const selectShop = state => state.shop;

export const selectCollections = createSelector(
    [selectShop],
    shop => shop.collections
);

export const selectCollection = collectionUrlParam =>
    createSelector(
        [selectCollections],
        collections =>
            collections.find(
                collection => collection.id === COLLECTION_ID_MAP[collectionUrlParam]
            )
    );


