import FeaturesCard from '../../components/CardBox'
import useStyles from './styles/HomeFeatures.styles'

const HomeFeatures = () => {
  const classes = useStyles()
  return (
    <div>
      <center>
        <h1 style={{ color: 'white' }}>FEATURES</h1>
      </center>
      <div className={classes.cardContainer}>
        <FeaturesCard
          title="A New Way To Invest In NFTs"
          content="The Nansen NFT indexes present a reliable way of navigating the NFT markets. This update raises the bar for quality financial infrastructure that supports the growing depth of the NFT industry."
        />
        <FeaturesCard
          title="A New Way To Invest In NFTs"
          content="The Nansen NFT indexes present a reliable way of navigating the NFT markets. This update raises the bar for quality financial infrastructure that supports the growing depth of the NFT industry."
        />
        <FeaturesCard
          title="A New Way To Invest In NFTs"
          content="The Nansen NFT indexes present a reliable way of navigating the NFT markets. This update raises the bar for quality financial infrastructure that supports the growing depth of the NFT industry."
        />
        <FeaturesCard
          title="A New Way To Invest In NFTs"
          content="The Nansen NFT indexes present a reliable way of navigating the NFT markets. This update raises the bar for quality financial infrastructure that supports the growing depth of the NFT industry."
        />
        <FeaturesCard
          title="A New Way To Invest In NFTs"
          content="The Nansen NFT indexes present a reliable way of navigating the NFT markets. This update raises the bar for quality financial infrastructure that supports the growing depth of the NFT industry."
        />
        <FeaturesCard
          title="A New Way To Invest In NFTs"
          content="The Nansen NFT indexes present a reliable way of navigating the NFT markets. This update raises the bar for quality financial infrastructure that supports the growing depth of the NFT industry."
        />
      </div>
    </div>
  )
}

export default HomeFeatures
