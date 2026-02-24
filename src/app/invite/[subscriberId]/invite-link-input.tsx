"use client"

import { InputField, InputIcon, InputRoot } from '@/components/Input/Input'
import { Copy, Link } from 'lucide-react'
import { IconButton } from '@/components/IconButton/IconButton'

interface InviteLinkInputProps {
    inviteLink: string
}

export default function InviteLinkInput({inviteLink}: InviteLinkInputProps) {

    const copyLinkInvite = () => {
        navigator.clipboard.writeText(inviteLink)
    }

    return (
        <InputRoot>
            <InputIcon>
                <Link className='size5' />
            </InputIcon>
            <InputField readOnly defaultValue={inviteLink} />
            <IconButton onClick={copyLinkInvite} className='-mr-2'>
                <Copy className='size5' />
            </IconButton>
        </InputRoot>
    )
}