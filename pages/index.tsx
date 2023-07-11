import Image from 'next/image'
import { Inter, Raleway } from 'next/font/google'
import Homepage from '@/components/Homepage'

const inter = Inter({ subsets: ['latin'] })
const raleway = Raleway({ subsets: ['latin'] })

export default function Home() {
  return (
    <main className={`flex min-h-screen flex-col items-center justify-between ${raleway.className}`}>
      <Homepage/>
    </main>
  )
}
