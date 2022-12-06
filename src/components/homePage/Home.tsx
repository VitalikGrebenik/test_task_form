import { IonHeader, IonTitle, IonToolbar } from '@ionic/react'
import { observer, inject } from 'mobx-react'
import DataLogin from './dataLogin'

function Home (){

  return (
        <IonHeader>
          <IonToolbar color='dark'>
            <DataLogin />
          </IonToolbar>
        </IonHeader>
  )
}

export default Home
