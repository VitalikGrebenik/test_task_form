import { IonBackButton, IonButton, IonCard, IonCardContent, IonIcon, IonInput, IonItem, IonLabel, IonText, useIonAlert, useIonLoading } from '@ionic/react'
import React, { createContext, Dispatch, SetStateAction, useContext, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import {logIn} from 'ionicons/icons'
import { useForm } from 'react-hook-form'


interface Inputs {
    Email: string,
    Password: string,
};

function Login () {
    const {register, formState: { errors, isValid } ,handleSubmit} = useForm<Inputs>({mode:'all'})
    const [dataLogin, setDataLogin] = useState<Inputs>()
    const [loading, setLoading] = useIonLoading()
    const [alert] = useIonAlert()
    const navigate = useNavigate()
    const click = () => {
        navigate('/app/home')
    }
    const onSubmit = async () => {
        await loading({message: 'Loading...'})
        localStorage.setItem('Email', dataLogin?.Email!);
        localStorage.setItem('Password', dataLogin?.Password!);
        setTimeout(() => {
            alert({
                header: 'Registration',
                message: `Successfully !`,
                buttons: [
                    {
                        text: 'ok',
                        handler: () => {
                            click()
                        }
                }]
            })
            setLoading()
        }, 1500);
    }

  return (
    <IonCard>
        <IonCardContent>
            <form onSubmit={handleSubmit((data: Inputs)=>{setDataLogin(data)})}>
                <IonItem>
                    <IonLabel position='floating' color='dark'>Email</IonLabel>
                    <IonInput {...register('Email', 
                        { 
                            required: true,
                            pattern: /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/,
                        })} 
                    type='email' 
                    placeholder="email@domain.com" />
                </IonItem>
                {errors?.Email && <IonText style={{paddingLeft: '15px'}} color="danger"> Напишите правильно Email ! </IonText>}
                <IonItem>
                    <IonLabel position='floating' color='dark'>Password</IonLabel>
                    <IonInput {...register('Password', 
                        { 
                            required: true , 
                            minLength: 6,
                        })} 
                    type='password'
                    />
                </IonItem>
                {errors?.Password && <IonText style={{paddingLeft: '15px'}} color="danger"> Минимум 6 символов !</IonText>}
                <div className='ion-margin-top'>
                    <IonButton expand='full' type='submit' color='dark' disabled={!isValid} onClick={()=>onSubmit()}>
                        <IonIcon icon={ logIn } slot='start'/>
                        login
                    </IonButton>
                </div>
            </form>
        </IonCardContent>
    </IonCard>
  )
}

export default Login

