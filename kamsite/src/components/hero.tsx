import Image from 'next/image'
import { FourierName } from './FourierName'
import { ProfileLinks } from '@/components/profile-links'
import { portrait, shortDescription, siteName, withBasePath } from '@/lib/site-data'

export function Hero() {
  return (
    <section className="pt-10 pb-12 sm:pt-14 sm:pb-14" aria-labelledby="intro-heading">
      <div className="flex flex-col-reverse gap-6 sm:flex-row sm:items-start sm:justify-between sm:gap-10">
        <div className="min-w-0 max-w-[40rem]">
          <FourierName text={siteName} id="intro-heading" />
          <p className="mt-2 text-lg text-muted-foreground sm:text-xl">
            {shortDescription}
          </p>
          <p className="mt-5">
            I work on speech brain–computer interfaces, models of neural
            activity, and tools for analyzing electrophysiology data.
          </p>
          <ProfileLinks className="mt-5" />
        </div>
        <Image
          src={withBasePath(portrait.src)}
          alt={portrait.alt}
          width={portrait.width}
          height={portrait.height}
          priority
          className="h-24 w-24 shrink-0 rounded-full object-cover sm:h-36 sm:w-36"
        />
      </div>
    </section>
  )
}
