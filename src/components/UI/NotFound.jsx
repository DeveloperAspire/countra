import classes from './NotFound.module.css'
import BackButton from './BackButton'

const NotFound = ()=> {

      return (
            <div className={classes.container}>
                  <h1>404 Page Not Found</h1>
                  <p>My dear you seems to have inputed an empty search!</p>
                  <BackButton/>
            </div>
      )
}

export default NotFound