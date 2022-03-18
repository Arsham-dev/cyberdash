import { Card, CardContent, Typography } from '@material-ui/core'
import * as React from 'react'

const Features = ({ title, content }) => {
  return (
    <Card
      style={{
        marginLeft: '10px',
        marginTop: '10px',
        background: 'transparent'
      }}
      sx={{ maxWidth: 380 }}>
      <CardContent>
        <div
          style={{
            height: '217px',
            borderRadius: '10px',
            width: 'auto',
            background: 'linear-gradient(to right, #27589D, #0F2B52)'
          }}>
          <h1>salam</h1>
        </div>
        <Typography
          style={{ color: '#FFFFFF' }}
          gutterBottom
          variant="h5"
          component="div">
          {title}
        </Typography>
        <Typography
          style={{ color: '#D1D1D1' }}
          variant="body2"
          color="secondary">
          {content}
        </Typography>
      </CardContent>
    </Card>
  )
}

export default Features
