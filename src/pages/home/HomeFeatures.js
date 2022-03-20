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
          title="Contract Bot"
          content="Have you taken part in a public mint of a hyped project but you not only haven’t been able to mint the NFT but also you’ve lost some money as a result of gas fee. Well, that’s something that has happened to me several times. That’s why I made the fastest flash bot for myself and now you can have it too. We made it as fast as possible to beat every bot out there."
        />
        <FeaturesCard
          title="Alpha Calendar"
          content="We gather the best upcoming NFT projects from numerous sources so that you can join in their early stage for whitelists or mint on public sales. The interesting section is a dashboard telling you whether public sales lead to profit or loss so that you can decide accordingly. "
        />
        <FeaturesCard
          title="Rarity Sniper"
          content="Many people list and sell their NFTs right after the reveal without noticing NFT’s rarity. Since the websites that reveal rarities don’t do it immediately and have a time lag, you need a tool that shows you NFT’s rarity as soon as a collection hits OpenSea. With our Rarity Sniper, you can have access to this information ASAP and buy instantly."
        />
        <FeaturesCard
          title="List Sniper"
          content="In a hyped NFT drop, speed is crucial if you want to snipe listed NFTs. This bot not only snipe floors but you can set price and rarity to make the most of it. Some people list their NFTs way below floor price and some rare NFTs are listed too low. You can be the one who snatches them using the List Sniper bot."
        />
        <FeaturesCard
          title="Auto Bidder"
          content="Bidder bot assists you to buy NFTs at a lower price by bidding or bulk bidding on collections. You can set the rarity and price you’re willing to pay and Auto Bot does the rest."
        />
        <FeaturesCard
          title="PSD Indicator"
          content="Price Strength Direction is a proprietary indicator that we’ve designed to show the strength of price based on different factors including the number of sales and listings. This index provides data indicating which projects are about to pump. "
        />
      </div>
    </div>
  )
}

export default HomeFeatures
