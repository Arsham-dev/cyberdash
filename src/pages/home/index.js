import HomeIntroduction from './HomeIntroduction'
import HomeFeatures from './HomeFeatures'
import homepage from '../../assets/images/mainpage.svg'

const Home = () => {
  return (
    <div
      style={{
        background: `transparent url(${homepage}) 0% 0% no-repeat padding-box`,
        top: -28.481,
        left: 4,
        width: 1358
      }}>
      <HomeIntroduction />
      <HomeFeatures />
    </div>
  )
}

export default Home
