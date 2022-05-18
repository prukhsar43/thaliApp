import { createSlice } from "@reduxjs/toolkit";


const initialState={

      data: [
        {
            id:1,
            name:"Chapati",
            price:20,
            quantity:0,
            total:function (){return this.price*this.quantity},
            url:"https://static.toiimg.com/thumb/61203720.cms?width=1200&height=900"
        },
        {
            id:2,
            name:"Sweet",
            price:40,
            quantity:0,
            total:function (){return this.price*this.quantity},
            url:"https://www.spiceupthecurry.com/wp-content/uploads/2020/08/rasmalai-recipe-1.jpg"
        },

        {
            id:3,
            name:"Curd",
            price:20,
            quantity:0,
            total:function (){return this.price*this.quantity},
            url:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ89UL0gSJM_zGY89fXTqRRrAFhpGbAq8M4wQ&usqp=CAU"
        },
        {
            id:4,
            name:"Daal",
            price:90,
            quantity:0,
            total:function (){return this.price*this.quantity},
            url:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRYi-tgqsqAN75LkB3h-1p40b3qT9R9WUUE7Q&usqp=CAU"
        },
        {
            id:5,
            name:"Pickle",
            price:20,
            quantity:0,
            total:function (){return this.price*this.quantity},
            url:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSOjOleYaQ43mQ5_sXJ7R06DvZ-2VThsB5ioA&usqp=CAU"
        },
        {
            id:6,
            name:"Paneer Dish",
            price:150,
            quantity:0,
            total:function (){return this.price*this.quantity},
            url:"https://www.eitanbernath.com/wp-content/uploads/2020/05/Butter-Paneer-1-4x5-LOW-RES-800x1000.jpeg"
        }


      ]
    
    
    
    
    }
export const orderSlice=createSlice({
      name:'thaliItem',
      initialState,
     
   
    reducers:{

         


    }



})

export const { }=orderSlice.actions
export default orderSlice.reducer