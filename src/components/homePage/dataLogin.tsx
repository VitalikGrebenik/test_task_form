import { IonTitle } from '@ionic/react'
import React from 'react'
import { Link } from 'react-router-dom'
import {observer, inject} from 'mobx-react'
import dataLoginStore from '../../store/dataLoginStore'


type ICData = {
	dataLoginStore?: dataLoginStore,
}

const DataLogin = inject('dataLoginStore')
(observer(( { dataLoginStore } : ICData ) => {
  return (
    <div style={{display: 'flex', flexDirection: 'column', gap: '10px'}}>
        <IonTitle style={{textAlignLast: 'center'}}>
            Home
        </IonTitle>
            <IonTitle>Login : {dataLoginStore!.email}</IonTitle>
            <IonTitle>Password : {dataLoginStore!.password}</IonTitle>
        <IonTitle style={{textAlignLast: 'end'}}><Link to='/'>Exit</Link></IonTitle>
  </div>
  )
}))

export default DataLogin