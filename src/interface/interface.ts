export interface Session {
   user?: {
      name?: string | null
      lastname?: string | null
      email?: string | null
      image?: string | null
   }
}

export interface NavItemsItf {
   title: string
   icon: React.ReactNode
   link: string
   auth: boolean
}
