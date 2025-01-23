import { Grid } from '@mui/material'
import React, { useState } from 'react'
import { useGetProductsQuery } from '../../../redux/services'
import './index.scss'
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import { useDispatch, useSelector } from 'react-redux';
import { checkWishlist } from '../../../redux/features/wishlistslice';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { checkBasket } from '../../../redux/features/basketslice';

const Products = () => {
    const {data,isError,isLoading} = useGetProductsQuery()
    console.log(data);
    const [search, setSearch] = useState("")
    const [select, setSelect] = useState("")
    console.log(select);
    const dispatch = useDispatch()
    console.log(dispatch);
    const wishlist = useSelector((state) => state.wishlist.wishlist)
    console.log(wishlist);
    const basket = useSelector(state => state.basket.basket)
    console.log(basket);
    

    if (isError) {
        return <h1>Some error occurred...</h1>
    }

    if (isLoading) {
        return <h1>Loading...</h1>
    }

    const filtered = data && data.Products.filter((d) =>  d.title.toLowerCase().includes(search.toLowerCase())).toSorted((a,b) => 
    select == "ASC" ? a.price - b.price : select == "DESC" ? b.price - a.price : 0)
    console.log(filtered);
    
  return (
    <>
        <section id="products">
            <div className="container">
                <div className="products">
                <input type="search" placeholder='search...' onChange={(e) => setSearch(e.target.value)}/>
                <select name="" id="" onChange={(e) => setSelect(e.target.value)}>
                    <option value="">DEFAULT</option>
                    <option value="ASC">ASC</option>
                    <option value="DESC">DESC</option>
                </select>
                    <Grid container >
                        
                        {data && filtered.map((d) => {
                            return(
                                <Grid item xs={8} lg={4} className='card'>

                                    <img src={d.imageUrl} alt="" />
                                    <div className="texts">
                                    <h1>{d.title}</h1>
                                    <p>{d.description}</p>
                                    <p>${d.price}</p>
                                    <button onClick={() => dispatch(checkWishlist(d))}><FavoriteBorderIcon/></button>
                                    <button onClick={() => dispatch(checkBasket(d))}><ShoppingCartIcon/></button>
                                    </div>

                                </Grid>
                            )
                        })}
                        
                    </Grid>
                </div>
            </div>
        </section>
    </>
  )
}

export default Products