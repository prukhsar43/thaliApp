import React from 'react'
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { useDispatch,useSelector } from 'react-redux';
import { addItem } from '../slices/orderSlice';

const Thali = () => {
      
      const dispatch=useDispatch()
      const selectItem=useSelector(state=>state.thaliSlice.data)
      console.log(selectItem)
      

      const handleAddclcik=(element)=>{
       
        dispatch(addItem(element))
        

      }

  return (
    <div>


<Card sx={{ maxWidth: 345 }}>
      {
          selectItem.map((ele,i)=>{
              return (
                  <div key={i}>
                  <CardMedia
                            component="img"
                            height="160"
                            image={ele.url}
                            alt="green iguana"
                        />
                        <CardContent>
                            <Typography gutterBottom variant="h5" component="div">
                             {ele.name}
                            </Typography>
                            <Typography variant="body2" color="text.secondary">
                            Lizards are a widespread group of squamate reptiles, with over 6,000
                            species, ranging across all continents except Antarctica
                            </Typography>

                            <h3>Price:{ele.price}</h3>  
                            
                             
                            
                             
                        </CardContent>
                        <CardActions>
                        <Button style={{marginLeft:"80px"}} variant="contained" onClick={()=>handleAddclcik(ele)}>Add to cart</Button>

                            
                        </CardActions>
                                    
                                    </div>
                             )
                            })
                        }
      
    </Card>
    </div>
  )
}

export default Thali