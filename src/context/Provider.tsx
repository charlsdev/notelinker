'use client'

import { AppProgressBar as ProgressBar } from 'next-nprogress-bar'

interface ProviderProps {
   children: React.ReactNode
}

const Provider = ({ children }: ProviderProps) => {
   return (
      <>
         <ProgressBar
            color="#fff"
            height="3"
            options={{ easing: 'ease', speed: 500 }}
            shallowRouting={true}
         />

         {children}
      </>
   )
}

export default Provider
