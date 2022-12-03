import { IonHeader, IonTitle, IonToolbar } from '@ionic/react'
import React, { useContext, useEffect } from 'react'
import { Link } from 'react-router-dom'

function Home (){
  return (
        <IonHeader>
          <IonToolbar color='dark'>
            <div style={{display: 'flex', flexDirection: 'column', gap: '10px'}}>
              <IonTitle style={{textAlignLast: 'center'}}>
                Home
              </IonTitle>
              <IonTitle>Login : {localStorage.getItem('Email')}</IonTitle>
              <IonTitle>Password : {localStorage.getItem('Password')}</IonTitle>
              <IonTitle style={{textAlignLast: 'end'}}><Link to='/'>Exit</Link></IonTitle>
            </div>
          </IonToolbar>
        </IonHeader>
  )
}

export default Home
