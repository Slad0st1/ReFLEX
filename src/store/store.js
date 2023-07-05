import {configureStore} from "@reduxjs/toolkit"
import ItemsSlice from "./Items/ItemsSlice"
import SearchSlice from "./Search/SearchSlice"
import RoutesSlice from "./Routes/RoutesSlice"

export const store = configureStore({
    reducer :{
        items : ItemsSlice,
        searchQuery : SearchSlice,
        pagesRoutes : RoutesSlice,
    }
})