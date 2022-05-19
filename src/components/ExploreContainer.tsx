import { IonButton, IonInput, IonItem, IonLabel } from '@ionic/react'
import RenderItem from './RenderItem'

const ExploreContainer: React.FC = () => {
  return (
    <div>
      <IonItem>
        <IonLabel position="floating" style={{ fontSize: '20px' }}>Кількість вольєрів:</IonLabel>
        <IonInput type='number' id='number' value='1' />
      </IonItem>
      <IonButton expand="block" onClick={RenderItem}>
        Результат
      </IonButton>
    </div>
  )
}

export default ExploreContainer
