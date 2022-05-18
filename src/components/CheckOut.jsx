import React, { useState } from 'react'
import { useSelector,useDispatch } from 'react-redux'
import Button from '@mui/material/Button';
import {removeItem,removeQnty,addQnty} from '../slices/orderSlice'
import {  Card } from 'antd';
 

import { margin } from '@mui/system';
const { Meta } = Card;



 

const CheckOut = () => {
    
    const [sumTotal,setSumTotal]=useState(0)
   
    const dispatch=useDispatch()
    
   const orederedItem=useSelector(state=>state.orderSlice.orederedItem)
    

   const addQty=(index)=>{

       
        dispatch(addQnty(index))
       console.log(index)
    
     
   
    
     
   }
   
   const removeQty=(index)=>{
    if(orederedItem[index].quantity>0) {
        dispatch(removeQnty(index)) 
         
    }
     
   }

   const removeFromCart=(index)=>{
     dispatch(removeItem(index))

   }

    const checkOutClick=()=>{
        let sum=0

        for(let i=0;i<orederedItem.length;i++){
         
            sum=sum+orederedItem[i].total()
            
        }

        
       
        if(orederedItem.length>=2){
            setSumTotal(sum)

        }

        else{

            alert("Cannot place order.Please select atleast two items")
        }
        
         
    }

   
    return(
           <>
            {

                orederedItem.map((ele,i)=>{

                return(
                <Card
                    hoverable
                    style={{ width:"1000px",border:"2px solid red", marginTop:"10px"}}
                    >
                    <img src={ele.url} style={{width:"1000px",height:"200px"}}/> 
                    <h3><Meta title={ele.name}/></h3>
                    <div style={{display:"flex"}}>
                    <Button  style={{marginLeft:"10px",marginBottom:"10px"}} variant="contained" color="success" onClick={()=>addQty(i)}>Add</Button>
                    <span style={{padding:"5px"}}><h3>{ele.quantity}</h3></span>
                    <Button style={{marginLeft:"10px",marginBottom:"10px"}} variant="contained" color="success" onClick={()=>removeQty(i)}>Remove</Button>
                    <Button style={{marginLeft:"10px",marginBottom:"10px"}} variant="contained" color="success" onClick={()=>removeFromCart(i)}>Remove from cart</Button>
                    <span style={{ marginLeft:"400px",marginBottom:"10px"}}><h3>MRP :-Rs.{ele.total()}</h3></span>
                    </div>
                    
                    
                </Card>

                )
                
            
            })


            }
            <Button style={{marginLeft:"10px",marginTop:"10px"}} variant="contained" onClick={checkOutClick}  >Checkout</Button>
            <span><h1>Total price:-{sumTotal}</h1></span>
                        
                    </>    

    )
  
}

export default CheckOut