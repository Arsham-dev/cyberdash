import * as React from 'react'
import FeaturesCard from '../../components/CardBox'
import styles from '../../styles/Home.module.css'

const HomeFeatures = () => {
  return (
    <>
      <center>
        <h1 style={{color : "white"}}>FEATURES</h1>
      </center>

        <div className={styles.centered}>
          <FeaturesCard title='A New Way To Invest In NFTs' content='The Nansen NFT indexes present a reliable way of navigating the NFT markets. This update raises the bar for quality financial infrastructure that supports the growing depth of the NFT industry.'/>
          <FeaturesCard title='A New Way To Invest In NFTs' content='The Nansen NFT indexes present a reliable way of navigating the NFT markets. This update raises the bar for quality financial infrastructure that supports the growing depth of the NFT industry.'/>
          <FeaturesCard title='A New Way To Invest In NFTs' content='The Nansen NFT indexes present a reliable way of navigating the NFT markets. This update raises the bar for quality financial infrastructure that supports the growing depth of the NFT industry.'/>
        </div>

        <div className={styles.centered}>
            <FeaturesCard title='A New Way To Invest In NFTs' content='The Nansen NFT indexes present a reliable way of navigating the NFT markets. This update raises the bar for quality financial infrastructure that supports the growing depth of the NFT industry.'/>
            <FeaturesCard title='A New Way To Invest In NFTs' content='The Nansen NFT indexes present a reliable way of navigating the NFT markets. This update raises the bar for quality financial infrastructure that supports the growing depth of the NFT industry.'/>
            <FeaturesCard title='A New Way To Invest In NFTs' content='The Nansen NFT indexes present a reliable way of navigating the NFT markets. This update raises the bar for quality financial infrastructure that supports the growing depth of the NFT industry.'/>
        </div>
    </> 
  )
}

export default HomeFeatures