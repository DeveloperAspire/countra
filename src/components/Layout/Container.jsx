import classes from './Container.module.css'
const Container = (props)=> {
      return (
          <section className={classes.container}>
                {props.children}
          </section>
      )
}

export default Container