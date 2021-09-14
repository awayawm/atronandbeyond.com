import { Card } from '@material-ui/core'
import { withStyles } from '@material-ui/styles'

const ArticlesCard = withStyles(() => ({
    root: {
        backgroundColor: '#2a9d8f',
        boxShadow: '0 4px 6px 0 rgba(0,0,0,0.3)',
    }
}))(Card)

export default ArticlesCard;