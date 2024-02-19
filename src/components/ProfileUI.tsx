import Link from 'next/link'
import {
   Dropdown,
   DropdownTrigger,
   DropdownMenu,
   DropdownItem,
   User,
   Divider,
} from '@nextui-org/react'
import Logout from './Logout'
import { Session } from '@/interface/interface'
import { LogoutIcon, ProfileIcon, TermsIcon } from './icons/Icons'

interface Props {
   session: Session | null
}

const ProfileUI = ({ session }: Props) => {
   return (
      <div className="flex items-center gap-4">
         <Dropdown placement="bottom-start">
            <DropdownTrigger>
               <User
                  as="button"
                  avatarProps={{
                     isBordered: true,
                     src: `${session?.user?.image || '/profile.svg'}`,
                  }}
                  className="font-semibold transition-transform"
                  description={`@${session?.user?.name?.toLocaleLowerCase()}_${session?.user?.lastname?.toLocaleLowerCase()}`}
                  name={`${session?.user?.name} ${session?.user?.lastname}`}
               />
            </DropdownTrigger>

            <DropdownMenu aria-label="User Actions" variant="flat">
               <DropdownItem
                  key="description"
                  className="h-10 gap-2"
                  textValue="Description"
               >
                  <p className="font-bold">Bienvenido:</p>
                  <Divider className="mt-2" />
               </DropdownItem>
               <DropdownItem
                  key="profile"
                  textValue="Profile"
                  startContent={<ProfileIcon />}
               >
                  <Link href="/profile">Mi perfil</Link>
               </DropdownItem>
               <DropdownItem
                  key="terms"
                  textValue="Terms"
                  startContent={<TermsIcon />}
               >
                  <Link href="/terms">Políticas</Link>
               </DropdownItem>
               <DropdownItem
                  key="logout"
                  color="danger"
                  textValue="Logout"
                  startContent={<LogoutIcon />}
               >
                  <Logout />
               </DropdownItem>
            </DropdownMenu>
         </Dropdown>
      </div>
   )
}

export default ProfileUI
