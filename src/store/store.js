import {configureStore} from "@reduxjs/toolkit"
import ItemsSlice from "./Items/ItemsSlice"
import SearchSlice from "./Search/SearchSlice"

export const store = configureStore({
    reducer :{
        items : ItemsSlice,
        searchQuery : SearchSlice,
    }
})