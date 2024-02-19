import {
   Modal,
   ModalContent,
   ModalHeader,
   ModalBody,
   ModalFooter,
   Button,
   Checkbox,
   Input,
   Link,
} from '@nextui-org/react'

interface ModalAddUIProps {
   isOpen: boolean
   onOpen: () => void
   onOpenChange: () => void
}

export default function ModalAddUI({
   isOpen,
   //onOpen,
   onOpenChange,
}: ModalAddUIProps) {
   return (
      <>
         <Modal
            isOpen={isOpen}
            onOpenChange={onOpenChange}
            placement="top-center"
            backdrop="opaque"
            isDismissable={false}
         >
            <ModalContent>
               {onClose => (
                  <>
                     <ModalHeader className="flex flex-col gap-1">
                        Log in
                     </ModalHeader>
                     <ModalBody>
                        <Input
                           autoFocus
                           endContent={
                              <svg
                                 xmlns="http://www.w3.org/2000/svg"
                                 width="20"
                                 height="20"
                                 viewBox="0 0 24 24"
                                 className="pointer-events-none flex-shrink-0 text-default-400"
                              >
                                 <g
                                    fill="none"
                                    stroke="currentColor"
                                    strokeLinecap="round"
                                    strokeWidth="1.5"
                                 >
                                    <path d="M22 14c0 3.771 0 5.657-1.172 6.828C19.657 22 17.771 22 14 22h-4c-3.771 0-5.657 0-6.828-1.172C2 19.657 2 17.771 2 14c0-3.771 0-5.657 1.172-6.828C3.825 6.518 4.7 6.229 6 6.102m12 0c1.3.127 2.175.416 2.828 1.07c.654.653.943 1.528 1.07 2.828M10 6h4m-3 3h2" />
                                    <path d="M14 2.002c1.707.014 2.647.11 3.268.73c.732.732.732 1.91.732 4.267v2.064c0 .46 0 .69-.094.892c-.095.202-.272.35-.626.644l-.72.6M10 2.002c-1.707.014-2.647.11-3.268.73C6 3.464 6 4.642 6 6.999v2.064c0 .46 0 .69.094.892c.095.202.272.35.626.644l1.439 1.2c1.837 1.53 2.755 2.295 3.841 2.295c.65 0 1.239-.273 2-.82" />
                                 </g>
                              </svg>
                           }
                           label="Email"
                           placeholder="Enter your email"
                           variant="bordered"
                        />
                        <Input
                           endContent={
                              <svg
                                 xmlns="http://www.w3.org/2000/svg"
                                 width="20"
                                 height="20"
                                 viewBox="0 0 24 24"
                                 className="pointer-events-none flex-shrink-0 text-default-400"
                              >
                                 <g fill="none">
                                    <path
                                       fill="currentColor"
                                       d="M9 16a1 1 0 1 1-2 0a1 1 0 0 1 2 0Zm4 0a1 1 0 1 1-2 0a1 1 0 0 1 2 0Zm4 0a1 1 0 1 1-2 0a1 1 0 0 1 2 0Z"
                                    />
                                    <path
                                       stroke="currentColor"
                                       strokeLinecap="round"
                                       strokeWidth="1.5"
                                       d="M11 22H8c-2.828 0-4.243 0-5.121-.879C2 20.243 2 18.828 2 16c0-2.828 0-4.243.879-5.121C3.757 10 5.172 10 8 10h8c2.828 0 4.243 0 5.121.879C22 11.757 22 13.172 22 16c0 2.828 0 4.243-.879 5.121C20.243 22 18.828 22 16 22h-1M6 10V8c0-.34.028-.675.083-1m11.728-.5A6.003 6.003 0 0 0 7.528 4"
                                    />
                                 </g>
                              </svg>
                           }
                           label="Password"
                           placeholder="Enter your password"
                           type="password"
                           variant="bordered"
                        />
                        <div className="flex justify-between px-1 py-2">
                           <Checkbox
                              classNames={{
                                 label: 'text-small',
                              }}
                           >
                              Remember me
                           </Checkbox>
                           <Link color="primary" href="#" size="sm">
                              Forgot password?
                           </Link>
                        </div>
                     </ModalBody>
                     <ModalFooter>
                        <Button color="danger" variant="flat" onPress={onClose}>
                           Close
                        </Button>
                        <Button color="primary" onPress={onClose}>
                           Sign in
                        </Button>
                     </ModalFooter>
                  </>
               )}
            </ModalContent>
         </Modal>
      </>
   )
}
