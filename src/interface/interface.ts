export interface Session {
   user: {
      name: string
      email: string
      image: string
   }
}

export interface NavItemsItf {
   title: string
   icon: React.ReactNode
   link: string
   auth: boolean
}