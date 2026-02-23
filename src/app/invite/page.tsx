import React from 'react'
import logo from "../../assets/logo.svg"
import gold from "../../assets/medal-gold.svg"
import silver from "../../assets/medal-silver.svg"
import cooper from "../../assets/medal-cooper.svg"
import Image from 'next/image'
import { InputField, InputIcon, InputRoot } from '@/components/Input/Input'
import { BadgeCheck, Copy, Link, Medal, MousePointerClick } from 'lucide-react'
import { IconButton } from '@/components/IconButton/IconButton'

const InvitePage = () => {
    return (
        <div className='min-h-dvh flex items-center justify-between gap-16 flex-col md:flex-row'>

            <div className="flex flex-col gap-10 w-full max-w-137.5">
                <Image src={logo} alt="DevState Logo" width={108.5} height={30} />

                <div className='space-y-2'>
                    <h1 className='text-4xl font-semibold font-heading text-gray-100 leading-none'>Inscrição confirmada!</h1>
                    <p className='text-gray-300'>Para entrar no evento, acesse o link enviado para seu e-mail.</p>
                </div>

                <div className='space-y-6'>

                    <div className="space-y-3">
                        <h2 className='text-gray-200 text-xl font-heading font-semibold leading-none'>Indique e ganhe</h2>
                        <p className='text-gray-300'>
                            Convide mais pessoas para o evento e concorra a prêmios exclusivos!
                            É só compartilhar o link abaixo e acompanhar as inscrições:
                        </p>
                    </div>

                    <InputRoot>
                        <InputIcon>
                            <Link className='size5' />
                        </InputIcon>
                        <InputField readOnly defaultValue={"https://example/invite/5bngi875hgi"} />
                        <IconButton className='-mr-2'>
                            <Copy className='size5' />
                        </IconButton>
                    </InputRoot>

                    <div className='grid gap-3 md:grid-cols-3'>
                        <div className=' bg-gray-700 border border-gray-600 px-4 py-7 flex flex-col items-center justify-center gap-1 rounded-xl relative'>
                            <span className='font-heading text-2xl font-semibold text-gray-200 leading-none'>1042</span>
                            <span className='text-sm text-gray-300 text-center leading-none'>Acessos ao link</span>
                            <MousePointerClick className='size5 text-purple absolute top-3 left-3' />
                        </div>
                        <div className=' bg-gray-700 border border-gray-600 px-4 py-7 flex flex-col items-center justify-center gap-1 rounded-xl relative'>
                            <span className='font-heading text-2xl font-semibold text-gray-200 leading-none'>1042</span>
                            <span className='text-sm text-gray-300 text-center leading-none'>Inscrições feitas</span>
                            <BadgeCheck className='size5 text-purple absolute top-3 left-3' />
                        </div>
                        <div className=' bg-gray-700 border border-gray-600 px-4 py-7 flex flex-col items-center justify-center gap-1 rounded-xl relative'>
                            <span className='font-heading text-2xl font-semibold text-gray-200 leading-none'>3°</span>
                            <span className='text-sm text-gray-300 text-center leading-none'>Posição no ranking</span>
                            <Medal className='size5 text-purple absolute top-3 left-3' />
                        </div>
                    </div>

                </div>
            </div>

            <div className='w-full max-w-110 space-y-5'>
                <h2 className='text-gray-200 text-xl font-heading font-semibold leading-none'>Ranking de indicações</h2>

                <div className='space-y-4'>

                    <div className='relative rounded-xl bg-gray-700 border border-gray-600 p-6 flex flex-col justify-center gap-3'>
                        <div className='flex items-center gap-1.25'>
                            <span className='font-semibold'>1°</span> |
                            <span className='text-sm text-gray-300 leading-none'>Uk Unfast</span>
                        </div>
                        <span className='font-heading text-2xl font-semibold text-gray-200 leading-none'>1030</span>
                        <Image className='absolute top-0 right-8' src={gold} alt="Medalha de ouro" />
                    </div>

                    <div className='relative rounded-xl bg-gray-700 border border-gray-600 p-6 flex flex-col justify-center gap-3'>
                        <div className='flex items-center gap-1.25'>
                            <span className='font-semibold'>2°</span> |
                            <span className='text-sm text-gray-300 leading-none'>Forsaken drk</span>
                        </div>
                        <span className='font-heading text-2xl font-semibold text-gray-200 leading-none'>1010</span>
                        <Image className='absolute top-0 right-8' src={silver} alt="Medalha de prata" />
                    </div>

                    <div className='relative rounded-xl bg-gray-700 border border-gray-600 p-6 flex flex-col justify-center gap-3'>
                        <div className='flex items-center gap-1.25'>
                            <span className='font-semibold'>3°</span> |
                            <span className='text-sm text-gray-300 leading-none'>Hyper ayo</span>
                        </div>
                        <span className='font-heading text-2xl font-semibold text-gray-200 leading-none'>600</span>
                        <Image className='absolute top-0 right-8' src={cooper} alt="Medalha de cooper" />
                    </div>

                </div>
            </div>
        </div>
    )
}

export default InvitePage
