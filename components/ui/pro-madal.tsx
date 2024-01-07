'use client'

import { useProMadal } from '@/hooks/use-pro-modals'
import { Dialog, DialogHeader,DialogContent, DialogTitle } from './dialog'

export default function ProMadal() {
  const proMadal=useProMadal()
  return (
    <Dialog open={proMadal.isOpen} onOpenChange={proMadal.onClose}>
      <DialogContent> 
      <DialogHeader>
        <DialogTitle>
          Upgrade to Genius
          </DialogTitle></DialogHeader></DialogContent></Dialog>
  )
}
