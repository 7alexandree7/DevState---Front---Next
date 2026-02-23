import { InputField, InputIcon, InputRoot } from '@/components/Input/Input'
import { Copy, Link } from 'lucide-react'
import { IconButton } from '@/components/IconButton/IconButton'

export default function InviteLinkInput() {

    return (
        <InputRoot>
            <InputIcon>
                <Link className='size5' />
            </InputIcon>
            <InputField readOnly defaultValue={"https://example/invite/5bngi875hgi"} />
            <IconButton className='-mr-2'>
                <Copy className='size5' />
            </IconButton>
        </InputRoot>
    )
}