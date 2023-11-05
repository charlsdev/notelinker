import { miyagi } from 'ldrs'

export default function LoaderUI() {
   miyagi.register()

   return (
      <div className="loaderCSS">
         <div className="titleLoader">Cargando ...</div>
         <l-miyagi size="100" stroke="8" speed="1.75" color="#fff"></l-miyagi>
      </div>
   )
}
