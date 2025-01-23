import React from 'react'
import './index.scss'
import { Grid } from '@mui/material';

const HeroBanner = () => {
  return (
    <>
        <section id="herobanner">

            <div className="container">
                <div className="herobanner">

                        <Grid container>
                            <Grid item xs={6} className='texts'>
                                <h2>Winter Fasion</h2>
                                <h1>Fashion Collection 2019</h1>
                                <button>SHOP NOW</button>
                            </Grid> 
                        </Grid>
                </div>
            </div>
        </section>
    </>
  )
}

export default HeroBanner