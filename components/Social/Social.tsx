import React from 'react';
import Link from 'next/link';

export function Social({ to, children }: { to: string, children: React.ReactChild }) {
  return (
    <Link
      href={to}
    >
      {children}
    </Link>
  )
}
