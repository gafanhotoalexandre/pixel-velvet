'use client'

import { loadStripe } from '@stripe/stripe-js'
import { useEffect } from 'react'

import { toast } from 'sonner'
import { checkoutCredits } from '@/lib/actions/transaction.actions'

import { Button } from '../ui/button'

export function Checkout({
  plan,
  amount,
  credits,
  buyerId,
}: {
  plan: string
  amount: number
  credits: number
  buyerId: string
}) {
  useEffect(() => {
    loadStripe(process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY!)
  }, [])

  useEffect(() => {
    // Check to see if this is a redirect back from Checkout
    const query = new URLSearchParams(window.location.search)
    if (query.get('success')) {
      toast('Pedido feito!', {
        description: 'Você receberá um email de confirmação',
        duration: 5000,
        className: 'success-toast',
      })
    }

    if (query.get('canceled')) {
      toast('Pedido cancelado!', {
        description:
          'Continue comprando e finalize a compra quando estiver pronto',
        duration: 5000,
        className: 'error-toast',
      })
    }
  }, [])

  const onCheckout = async () => {
    const transaction = {
      plan,
      amount,
      credits,
      buyerId,
    }

    await checkoutCredits(transaction)
  }

  return (
    <form action={onCheckout} method="POST">
      <section>
        <Button
          type="submit"
          role="link"
          className="w-full rounded-full bg-purple-gradient bg-cover"
        >
          Comprar Crédito
        </Button>
      </section>
    </form>
  )
}
