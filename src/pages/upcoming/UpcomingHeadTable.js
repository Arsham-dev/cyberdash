import {
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  withStyles,
  ButtonBase,
  CircularProgress
} from '@material-ui/core'
import openSea from '../../assets/images/opensea.svg'
import twitterNoBackground from '../../assets/images/twitterNoBackground.svg'
import discordNoBackground from '../../assets/images/discordNoBackground.svg'
import useStyles from './styles/UpcomingHeadTable.style'

const CustomTableCell = withStyles(() => ({
  root: {
    borderBottom: 'none'
  },
  head: {
    backgroundColor: 'rgba(9,9,60,1)',
    color: 'rgb(25, 86, 226)'
  },
  body: {
    fontSize: 14,
    color: '#FFF'
  }
}))(TableCell)
const CustomTableRow = withStyles(() => ({
  root: {
    '&:nth-of-type(odd)': {
      backgroundColor: 'rgb(27,27,54)'
    },
    '&:nth-of-type(even)': {
      backgroundColor: 'rgb(20,20,43)',
      color: '#FFF !important'
    }
  }
}))(TableRow)
const UpcomingHeadTable = ({ tableData }) => {
  const classes = useStyles()
  return (
    <div className={classes.root}>
      <TableContainer component={Paper} className={classes.container}>
        {tableData ? (
          <Table className={classes.table}>
            <TableHead>
              <TableRow>
                <CustomTableCell align="center">Collection</CustomTableCell>
                <CustomTableCell align="center">Quantity</CustomTableCell>
                <CustomTableCell align="center">Presale Price</CustomTableCell>
                <CustomTableCell align="center">
                  Public Sale Price
                </CustomTableCell>
                <CustomTableCell align="center">Max Mint</CustomTableCell>
                <CustomTableCell align="center">
                  Presale Mint TimeStamp
                </CustomTableCell>
                <CustomTableCell align="center">
                  PublicSale Mint TimeStamp
                </CustomTableCell>
                <CustomTableCell align="center">Social Media</CustomTableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {tableData.map((row) => (
                <CustomTableRow key={row.name}>
                  <CustomTableCell align="center">
                    {row.collection_name}
                  </CustomTableCell>
                  <CustomTableCell align="center">
                    {row.quantity}
                  </CustomTableCell>
                  <CustomTableCell align="center">
                    {row.presale_price}
                  </CustomTableCell>
                  <CustomTableCell align="center">
                    {row.publicsale_price}
                  </CustomTableCell>
                  <CustomTableCell align="center">
                    {row.max_mint}
                  </CustomTableCell>
                  <CustomTableCell align="center">
                    {row.presale_mint_timestamp}
                  </CustomTableCell>
                  <CustomTableCell align="center">
                    {row.publicsale_mint_timestamp}
                  </CustomTableCell>
                  <CustomTableCell
                    align="center"
                    className={classes.buttonContainer}>
                    <ButtonBase
                      className={classes.buttonBase}
                      onClick={() => {
                        window.open(row.opensea_link, '_blank')
                      }}>
                      <img src={openSea} alt="openSea" />
                    </ButtonBase>
                    <ButtonBase
                      className={classes.buttonBase}
                      onClick={() => {
                        window.open(row.twitter_link, '_blank')
                      }}>
                      <img src={twitterNoBackground} alt="twitter" />
                    </ButtonBase>
                    <ButtonBase
                      className={classes.buttonBase}
                      onClick={() => {
                        window.open(row.discord_link, '_blank')
                      }}>
                      <img src={discordNoBackground} alt="discord" />
                    </ButtonBase>
                  </CustomTableCell>
                </CustomTableRow>
              ))}
            </TableBody>
          </Table>
        ) : (
          <Table className={classes.tableLoading}>
            <div className={classes.loadingContainer}>
              <CircularProgress />
            </div>
          </Table>
        )}
      </TableContainer>
    </div>
  )
}
export default UpcomingHeadTable
