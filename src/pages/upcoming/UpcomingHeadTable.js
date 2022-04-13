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
import { useEffect, useState } from 'react'

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
  const [data, setdata] = useState(tableData)
  const [currentHead, setcurrentHead] = useState('')
  useEffect(() => {
    setdata(tableData)
  }, [tableData])
  const sortFunction = (index, isNumer) => {
    const value = currentHead === index ? -1 : 1
    setcurrentHead(index === currentHead ? '' : index)
    if (isNumer)
      setdata([
        ...data.sort((first, second) => {
          if (
            Number.parseInt(first[index].replace(/\D/g, '') || '0', 10) <
            Number.parseInt(second[index].replace(/\D/g, '') || '0', 10)
          )
            return value
          else return -value
        })
      ])
    else
      setdata([
        ...data.sort((first, second) => {
          if (first[index] < second[index]) return value
          else return -value
        })
      ])
  }

  const classes = useStyles()
  return (
    <div className={classes.root}>
      <TableContainer component={Paper} className={classes.container}>
        {data ? (
          <Table className={classes.table}>
            <TableHead>
              <TableRow>
                <CustomTableCell align="center">
                  <ButtonBase
                    className={classes.textButton}
                    onClick={() => sortFunction('collection_name')}>
                    Collection
                  </ButtonBase>
                </CustomTableCell>
                <CustomTableCell align="center">
                  <ButtonBase
                    className={classes.textButton}
                    onClick={() => sortFunction('quantity', true)}>
                    Quantity
                  </ButtonBase>
                </CustomTableCell>
                <CustomTableCell align="center">
                  <ButtonBase
                    className={classes.textButton}
                    onClick={() => sortFunction('presale_price', true)}>
                    Presale Price
                  </ButtonBase>
                </CustomTableCell>
                <CustomTableCell align="center">
                  <ButtonBase
                    className={classes.textButton}
                    onClick={() => sortFunction('publicsale_price', true)}>
                    Public Sale Price
                  </ButtonBase>
                </CustomTableCell>
                <CustomTableCell
                  align="center"
                  onClick={() => sortFunction('max_mint', true)}>
                  <ButtonBase className={classes.textButton}>
                    Max Mint
                  </ButtonBase>
                </CustomTableCell>
                <CustomTableCell align="center">
                  <ButtonBase
                    className={classes.textButton}
                    onClick={() =>
                      sortFunction('presale_mint_timestamp', true)
                    }>
                    Presale Mint TimeStamp
                  </ButtonBase>
                </CustomTableCell>
                <CustomTableCell align="center">
                  <ButtonBase
                    className={classes.textButton}
                    onClick={() =>
                      sortFunction('publicsale_mint_timestamp', true)
                    }>
                    PublicSale Mint TimeStamp
                  </ButtonBase>
                </CustomTableCell>
                <CustomTableCell align="center">Social Media</CustomTableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {data.map((row) => (
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
