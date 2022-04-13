import { makeStyles } from '@material-ui/core'

const useStyles = makeStyles(() => ({
  root: {
    // width: '100%',
    padding: '0 89px'
  },
  table: {
    // width: '100%'
  },
  container: {
    backgroundColor: 'transparent'
  },
  text: {
    fontSize: 16,
    color: 'rgba(255,255,255,0.8)'
    // textJustify: 'center'
    // verticalAlign: 'middle',
    // textAlign: 'end'
    // display: 'flex'
  },
  collections: {
    boxSizing: 'border-box',
    flex: '300 0 auto',
    minWidth: 250,
    width: 300,
    cursor: 'pointer',
    backgroundColor: 'inherit',
    padding: '1.75rem 1.25rem',
    borderTopLeftRadius: '0.75rem',
    borderBottomLeftRadius: '0.75rem'
  },
  twitterFollowers: {
    boxSizing: 'border-box',
    flex: '84 0 auto',
    minWidth: 0,
    width: 84,
    cursor: 'pointer',
    paddingRight: '1.25rem',
    paddingLeft: '0.5rem',
    display: 'flex',
    alignItems: 'center'
  },
  discordFollowers: {
    boxSizing: 'border-box',
    flex: '84 0 auto',
    minWidth: 0,
    width: 84,
    cursor: 'pointer',
    paddingRight: '1.25rem',
    paddingLeft: '0.5rem',
    display: 'flex',
    alignItems: 'center'
  },
  communityScore: {
    boxSizing: 'border-box',
    flex: '100 0 auto',
    minWidth: 0,
    width: 100,
    cursor: 'pointer',
    paddingRight: '1.25rem',
    paddingLeft: '0.5rem',
    display: 'flex',
    alignItems: 'center'
  },
  mintPrice: {
    boxSizing: 'border-box',
    flex: '120 0 auto',
    minWidth: 0,
    width: 120,
    cursor: 'pointer',
    paddingRight: '1.25rem',
    paddingLeft: '0.5rem',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-end'
  },
  publicPrice: {
    boxSizing: 'border-box',
    flex: '170 0 auto',
    minWidth: 0,
    width: 170,
    cursor: 'pointer',
    // paddingRight: '1.25rem',
    paddingLeft: 20,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-start'
  },
  added: {
    boxSizing: 'border-box',
    flex: '170 0 auto',
    minWidth: 0,
    width: 160,
    cursor: 'pointer',
    // paddingRight: '1.25rem',
    paddingLeft: 20,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-start'
  },
  upvotes: {
    boxSizing: 'border-box',
    flex: '80 0 auto',
    minWidth: 80,
    width: 80,
    cursor: 'pointer',
    // paddingRight: '1.25rem',
    paddingLeft: 20,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-start'
  },
  end: {
    boxSizing: 'border-box',
    flex: '72 0 auto',
    minWidth: 72,
    width: 72,
    cursor: 'pointer',
    borderTopRightRadius: '0.75rem',
    borderBottomRightRadius: '0.75rem'
  },
  buttonContainer: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center'
  },
  buttonBase: {
    borderRadius: 20
  },
  tableLoading: { height: 50 },
  loadingContainer: {
    width: '100%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center'
  },
  textButton: {
    fontSize: 14,
    color: 'rgb(25, 86, 226)',
    fontWeight: 'bold'
  }
}))
export default useStyles
