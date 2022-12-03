import { Outlet } from 'react-router-dom'
import { createContext, useState } from "react";

import '@ionic/react/css/core.css';
import '@ionic/react/css/normalize.css';
import '@ionic/react/css/structure.css';
import '@ionic/react/css/typography.css';
import '@ionic/react/css/padding.css';
import '@ionic/react/css/float-elements.css';
import '@ionic/react/css/text-alignment.css';
import '@ionic/react/css/text-transformation.css';
import '@ionic/react/css/flex-utils.css';
import '@ionic/react/css/display.css';
import { IonHeader, IonTitle, IonToolbar, setupIonicReact } from '@ionic/react';

setupIonicReact();
import '../theme/variables.css'

function App() {
  return (
    <div style={{maxWidth:'400px', margin: '0 auto'}}>
      <IonHeader>
        <IonToolbar color='dark'>
          <IonTitle> Ionic App </IonTitle>
        </IonToolbar>
      </IonHeader>
      <Outlet/>
    </div>
  )
}

export default App
