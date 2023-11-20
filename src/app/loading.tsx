'use client'

import { helix } from 'ldrs'

export default function LoaderUI() {
   helix.register()

   return (
      <div className="loaderCSS">
         <div className="titleLoader">Cargando ...</div>
         <l-helix size="75" speed="2.5" color="#ffbe76"></l-helix>
      </div>
   )
}
