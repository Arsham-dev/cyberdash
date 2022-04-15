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
  CircularProgress,
  Typography,
  TextField
} from '@material-ui/core'
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown'
import ArrowDropUpIcon from '@material-ui/icons/ArrowDropUp'
import openSea from '../../assets/images/opensea.svg'
import twitterNoBackground from '../../assets/images/twitterNoBackground.svg'
import discordNoBackground from '../../assets/images/discordNoBackground.svg'
import useStyles from './styles/UpcomingHeadTable.style'
import { useEffect, useState } from 'react'
import UpcomingShowTimeStamp from './UpcomingShowTimeStamp'

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
  const [orderSort, setorderSort] = useState(1)
  useEffect(() => {
    setdata(tableData)
  }, [tableData])
  const sortFunction = (index, isNumer) => {
    const value = orderSort
    setcurrentHead(index)
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
    setorderSort(-orderSort)
  }

  const classes = useStyles()
  const ShowOrder = () => (
    <div className={classes.orderSort}>
      {orderSort === 1 ? <ArrowDropDownIcon /> : <ArrowDropUpIcon />}
    </div>
  )
  return (
    <div className={classes.root}>
      <TableContainer component={Paper} className={classes.container}>
        {data ? (
          <Table className={classes.table}>
            <TableHead>
              <TableRow>
                <CustomTableCell align="center">
                  <ButtonBase
                    className={[
                      classes.textButton,
                      currentHead === 'collection_name'
                        ? classes.selectedHead
                        : ''
                    ].join(' ')}
                    onClick={() => sortFunction('collection_name')}>
                    Collection
                    {currentHead === 'collection_name' && <ShowOrder />}
                  </ButtonBase>
                </CustomTableCell>
                <CustomTableCell align="center">
                  <ButtonBase
                    className={[
                      classes.textButton,
                      currentHead === 'quantity' ? classes.selectedHead : ''
                    ].join(' ')}
                    onClick={() => sortFunction('quantity', true)}>
                    Quantity
                    {currentHead === 'quantity' && <ShowOrder />}
                  </ButtonBase>
                </CustomTableCell>
                <CustomTableCell align="center">
                  <ButtonBase
                    className={[
                      classes.textButton,
                      currentHead === 'presale_price'
                        ? classes.selectedHead
                        : ''
                    ].join(' ')}
                    onClick={() => sortFunction('presale_price', true)}>
                    Presale Price
                    {currentHead === 'presale_price' && <ShowOrder />}
                  </ButtonBase>
                </CustomTableCell>
                <CustomTableCell align="center">
                  <ButtonBase
                    className={[
                      classes.textButton,
                      currentHead === 'publicsale_price'
                        ? classes.selectedHead
                        : ''
                    ].join(' ')}
                    onClick={() => sortFunction('publicsale_price', true)}>
                    Public Sale Price
                    {currentHead === 'publicsale_price' && <ShowOrder />}
                  </ButtonBase>
                </CustomTableCell>
                <CustomTableCell
                  align="center"
                  onClick={() => sortFunction('max_mint', true)}>
                  <ButtonBase
                    className={[
                      classes.textButton,
                      currentHead === 'max_mint' ? classes.selectedHead : ''
                    ].join(' ')}>
                    Max Mint
                    {currentHead === 'max_mint' && <ShowOrder />}
                  </ButtonBase>
                </CustomTableCell>
                <CustomTableCell align="center">
                  <ButtonBase
                    className={[
                      classes.textButton,
                      currentHead === 'presale_mint_timestamp'
                        ? classes.selectedHead
                        : ''
                    ].join(' ')}
                    onClick={() =>
                      sortFunction('presale_mint_timestamp', true)
                    }>
                    Presale Mint TimeStamp
                    {currentHead === 'presale_mint_timestamp' && <ShowOrder />}
                  </ButtonBase>
                </CustomTableCell>
                <CustomTableCell align="center">
                  <ButtonBase
                    className={[
                      classes.textButton,
                      currentHead === 'publicsale_mint_timestamp'
                        ? classes.selectedHead
                        : ''
                    ].join(' ')}
                    onClick={() =>
                      sortFunction('publicsale_mint_timestamp', true)
                    }>
                    PublicSale Mint TimeStamp
                    {currentHead === 'publicsale_mint_timestamp' && (
                      <ShowOrder />
                    )}
                  </ButtonBase>
                </CustomTableCell>
                <CustomTableCell align="center">Social Media</CustomTableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {data.map((row, index) => (
                <CustomTableRow
                  onClick={() => window.open('resources/' + row.id, '_blank')}
                  key={row.collection_name + index.toString()}
                  className={classes.tableBodyRow}>
                  <CustomTableCell
                    align="center"
                    className={classes.collection}>
                    <div
                      className={[
                        classes.collection_imageContainer,
                        row.collection_image
                          ? ''
                          : classes.collection_imageContainerNo
                      ].join(' ')}>
                      {row.collection_image && (
                        <img
                          alt="collection_image"
                          src={row.collection_image}
                          className={classes.collection_image}
                        />
                      )}
                    </div>
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
                    <UpcomingShowTimeStamp time={row.presale_mint_timestamp} />
                  </CustomTableCell>
                  <CustomTableCell align="center">
                    <UpcomingShowTimeStamp
                      time={row.publicsale_mint_timestamp}
                    />
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
