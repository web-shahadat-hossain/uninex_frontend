import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";



interface IProductFilter {
 category:string,
 subCategory:string,
//  color:string,
 price:number
 selectedProduct: any | null;
}

const initialState:IProductFilter = {
    category: "all",
    subCategory: "all",
    // color: "all",
    price:10000,
    selectedProduct: null,
  };

 

  const  productSlice = createSlice({
    name:"productFilter",
    initialState,
    reducers:{
        setCategory:(state , action:PayloadAction<string>)=>{
            state.category=action.payload
        },
        subCategory:(state , action:PayloadAction<string>)=>{
            state.subCategory=action.payload
        },
        // setColor:(state , action:PayloadAction<string>)=>{
        //     state.color=action.payload
        // },
        setPriceRange:(state , action:PayloadAction<number>)=>{
            state.price=action.payload
        },
        setSelectedProduct: (state, action: PayloadAction<any>) => {
          state.selectedProduct = action.payload;
        },
    }
  })

export const {setCategory, subCategory, setPriceRange, setSelectedProduct}= productSlice.actions

  export default productSlice.reducer