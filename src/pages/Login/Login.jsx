import { useState } from 'react'
import LoginForm from '../../components/LoginForm/LoginForm'
import styles from './Login.module.css'
// import milk from '../../assets/milk.mp4'



const LoginPage = props => {
  console.log(props);
  const [message, setMessage] = useState([''])

  const updateMessage = msg => {
    setMessage(msg)
  }

  return (

    <main className={styles.container}>
      {/* <video src={milk} autoPlay loop /> */}
      <p>{message}</p>
      <LoginForm
        {...props}
        updateMessage={updateMessage}
      />
    </main>
   
  
  )
}

export default LoginPage
