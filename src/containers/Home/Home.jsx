import React from 'react'
import styles from './Home.css'
class Home extends React.Component{
  constructor(props){
    super(props)
  }
  render(){
    return (
      <div className={styles.container}>Home</div>
    )
  }
}
export default Home