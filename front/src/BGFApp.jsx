import { AppRoutes } from "./routes/AppRoutes"
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import '../node_modules/bootstrap/dist/js/bootstrap.bundle.min.js'
import { ResetScrollPosition } from "./routes/components/ResetScrollPosition"

export const BGFApp = () => { 
  return  (
    // El componente ResetScrollPosition lo uso para restaurar la posición del scroll de vuelta al inicio
    // cada vez que se navega a una ruta diferente en la app
    <ResetScrollPosition>
      <AppRoutes/>   
    </ResetScrollPosition>
  )   
}
