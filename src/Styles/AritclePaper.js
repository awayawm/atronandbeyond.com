import { Paper } from '@material-ui/core'
import { withStyles } from '@material-ui/styles'

const ArticlePaper = withStyles(() => ({
    root: {
        backgroundColor: '#2a9d8f'
    }
}))(Paper)

export default ArticlePaper;