import Link from 'next/link'
import React from 'react'

const page = () => {
  return (
    <div>
      <Link href="/saas/melme" className="text-blue-500 hover:underline">
        Melme Subscriptions
      </Link>
      <br />
      <Link href="/saas/wachat" className="text-blue-500 hover:underline">
        WaChat Subscriptions
      </Link>
    </div>
  )
}

export default page