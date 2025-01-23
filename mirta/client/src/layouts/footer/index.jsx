import { Grid } from '@mui/material'
import React from 'react'
import './index.scss'

const Footer = () => {
  return (
    <>
      <section id="footer">
        <div className="container">
          <div className="footer">
            <Grid container>
              <Grid item xs={6} lg={3}>
                <h1>category</h1>
                <ul>
                  <li>Male</li>
                  <li>Male</li>
                  <li>Male</li>
                  <li>Male</li>
                </ul>
              </Grid>

              <Grid item xs={6} lg={3}>
                <h1>category</h1>
                <ul>
                  <li>Male</li>
                  <li>Male</li>
                  <li>Male</li>
                  <li>Male</li>
                </ul>
              </Grid>

              <Grid item xs={6} lg={3}>
                <h1>category</h1>
                <ul>
                  <li>Male</li>
                  <li>Male</li>
                  <li>Male</li>
                  <li>Male</li>
                </ul>
              </Grid>

              <Grid item xs={6} lg={3}>
                <h1>category</h1>
                <div className="input">
                <input type="text" />
                <button>salam</button>
                </div>
                
              </Grid>
            </Grid>
          </div>
        </div>
      </section>
    </>
  )
}

export default Footer