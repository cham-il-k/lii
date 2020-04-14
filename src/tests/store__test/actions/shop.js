
export const FETCH_COLLECTION_SUCCESS = 'FETCH_COLLECTION_SUCCESS'
export const FETCH_COLLECTIONS_FAIL = 'FETCH_COLLECTIONS_FAIL'
export const PAY_PRODUCT_FAIL = 'PAY_PRODUCT_FAIL'
export const VALID_PRODUCT = 'VALID_PRODUCT'
export const SHIP_PRODUCT = 'SHIP_PRODUCT'
export const SEARCH_CHANGE = 'SEARCH_CHANGE'

export const fetchCollectionSuccess = ( collections ) => {
    return {
        type:FETCH_COLLECTION_SUCCESS,
        payload: collections
    }
}
export const fetchCollectionsFail = (  ) => {
    return {
        type:FETCH_COLLECTIONS_FAIL,
        
    }
}