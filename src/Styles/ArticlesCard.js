import { Card } from '@material-ui/core'
import { withStyles } from '@material-ui/styles'

const ArticlesCard = withStyles(() => ({
    root: {
        backgroundColor: '#2a9d8f'
    }
}))(Card)

export default ArticlesCard;