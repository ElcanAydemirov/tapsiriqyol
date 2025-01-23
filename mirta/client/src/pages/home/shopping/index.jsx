import { Grid } from '@mui/material'
import React from 'react'
import './index.scss'

const Shopping = () => {
  return (
    <>
    <section id="shopping">
        <div className="container">
            <div className="shopping">
            <Grid container spacing={4}>
                <Grid item xs={12} lg={4} className='card'>

                </Grid>
                <Grid item xs={12} lg={4} className='card'>

                </Grid>
                <Grid item xs={12} lg={4} className='card'>

                </Grid>
            </Grid>
            </div>
        </div>
    </section>

    </>
  )
}

export default Shopping