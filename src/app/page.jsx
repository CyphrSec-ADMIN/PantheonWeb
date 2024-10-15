import { BentoCard } from '@/components/bento-card'
import { Button } from '@/components/button'
import { Container } from '@/components/container'
import { Footer } from '@/components/footer'
import { Gradient } from '@/components/gradient'
import { Keyboard } from '@/components/keyboard'
import { Link } from '@/components/link'
import { LinkedAvatars } from '@/components/linked-avatars'
import { LogoCloud } from '@/components/logo-cloud'
import { LogoCluster } from '@/components/logo-cluster'
import { LogoTimeline } from '@/components/logo-timeline'
import { Map } from '@/components/map'
import { Navbar } from '@/components/navbar'
import { Screenshot } from '@/components/screenshot'
import { Testimonials } from '@/components/testimonials'
import { Heading, Subheading } from '@/components/text'
import { ChevronRightIcon } from '@heroicons/react/16/solid'

export const metadata = {
  description:
    'Radiant helps you sell more by revealing sensitive information about your customers.',
}

function Hero() {
  return (
    <div className="relative">
      <Gradient className="absolute inset-2 bottom-0 rounded-4xl ring-1 ring-inset ring-black/5" />
      <Container className="relative">
        <Navbar
          // banner={
          //   <Link
          //     href="/blog/radiant-raises-100m-series-a-from-tailwind-ventures"
          //     className="flex items-center gap-1 rounded-full bg-fuchsia-950/35 px-3 py-0.5 text-sm/6 font-medium text-white data-[hover]:bg-fuchsia-950/30"
          //   >
          //     Radiant raises $100M Series A from Tailwind Ventures
          //     <ChevronRightIcon className="size-4" />
          //   </Link>
          // }
        />
        <div className="pb-24 pt-16 sm:pb-32 sm:pt-24 md:pb-48 md:pt-32">
          <h1 className="font-display text-balance text-6xl/[0.9] font-medium tracking-tight text-gray-950 sm:text-8xl/[0.8] md:text-9xl/[0.8]">
            Pantheon
Security.
          </h1>
          <p className="mt-8 max-w-lg text-xl/7 font-medium text-gray-950/75 sm:text-2xl/8">
            Fortifying Legacy Systems with AI-Powered
Cybersecurity.
          </p>
          <div className="mt-12 flex flex-col gap-x-6 gap-y-4 sm:flex-row">
            <Button href="#">Get started</Button>
            {/* <Button variant="secondary" href="/pricing">
              See pricing
            </Button> */}
          </div>
        </div>
      </Container>
    </div>
  )
}

function FeatureSection() {
  return (
    <div className="overflow-hidden">
      <Container className="pb-24">
        <Heading as="h2" className="max-w-3xl">
          A snapshot of your entire
Threat Landscape.
        </Heading>
        <video
          width={1216}
          height={768}
          src="/screenshots/heimdall-dashboard-wide.mp4"
          className="mt-16 h-[36rem] sm:h-auto sm:w-[76rem]"
          loop
          autoPlay
          muted
        />
      </Container>
    </div>
  )
}

function BentoSection() {
  return (
    <Container>
      <Subheading>HEIMDALL - MANAGE YOUR ATTACK SURFACE</Subheading>
      <Heading as="h3" className="mt-2 max-w-3xl">
        A comprehensive view of
your entire attack surface.
      </Heading>
       <Subheading>Secure Every Legacy System. Heimdall protects your legacy systems with real-time AI-powered monitoring
and threat detection.</Subheading>
      

      <div className="mt-10 grid grid-cols-1 gap-4 sm:mt-16 lg:grid-cols-6 lg:grid-rows-2">
        <BentoCard
          eyebrow="ATTACK SURFACE MANAGEMENT"
          title="Gain Full Visibility"
          description="Heimdall uses AI to map your infrastructure, discovering all assets across legacy and modern
systems."
          graphic={
            <div className="h-80 bg-[url(/screenshots/profile.png)] bg-[size:1000px_560px] bg-[left_-109px_top_-112px] bg-no-repeat" />
          }
          fade={['bottom']}
          className="max-lg:rounded-t-4xl lg:col-span-3 lg:rounded-tl-4xl"
        />
        <BentoCard
          eyebrow="VULNERABILITY ASSESSMENT"
          title="Stay One Step Ahead"
          description="With AI-driven vulnerability detection, Heimdall ensures you’re always aware of potential risks
lurking in your systems."
          graphic={
            <div className="absolute inset-0 bg-[url(/screenshots/competitors.png)] bg-[size:1100px_650px] bg-[left_-38px_top_-73px] bg-no-repeat" />
          }
          fade={['bottom']}
          className="lg:col-span-3 lg:rounded-tr-4xl"
        />
        <BentoCard
          eyebrow="MONITORING"
          title="Built for 24/7 Protection"
          description="Our platform continuously scans your network, identifying weaknesses in real-time and
providing immediate insights via interactive dashboards."
          graphic={
            <div className="flex size-full pl-10 pt-10">
              <Keyboard highlighted={['LeftCommand', 'LeftShift', 'D']} />
            </div>
          }
          className="lg:col-span-2 lg:rounded-bl-4xl"
        />
        <BentoCard
          eyebrow="SEAMLESS INTEGRATION"
          title="Legacy Meets Modern Security"
          description="Heimdall integrates modern security measures into your legacy infrastructure with zero
disruption, ensuring continuous protection."
          graphic={<LogoCluster />}
          className="lg:col-span-2"
        />
        <BentoCard
          eyebrow="CONSULTING"
          title="Get Expert Support"
          description="Pantheon Security offers expert consulting services to help you prioritize and remediate
complex vulnerabilities in legacy systems."
          graphic={<Map />}
          className="max-lg:rounded-b-4xl lg:col-span-2 lg:rounded-br-4xl"
        />
      </div>
    </Container>
  )
}

function DarkBentoSection() {
  return (
    <div className="mx-2 mt-2 rounded-4xl bg-gray-900 py-32">
      <Container>
        <Subheading dark>METIS – STRATEGIC CYBERSECURITY CONSULTANCY</Subheading>
        <Heading as="h3" dark className="mt-2 max-w-2xl">
          Tailored strategies for
comprehensive legacy
system protection.
        </Heading>
        <Subheading dark>Transform Your Security Approach. Metis provides expert consulting to help you secure even the most
complex infrastructures.</Subheading>

        <div className="mt-10 grid grid-cols-1 gap-4 sm:mt-16 lg:grid-cols-6 lg:grid-rows-2">
          <BentoCard
            dark
            eyebrow="CYBERSECURITY CONSULTANCY"
            title="Bespoke Solutions for Every Challenge"
            description="Metis delivers customized strategies based on your unique infrastructure needs, whether
modern or legacy."
            graphic={
              <div className="h-80 bg-[url(/screenshots/networking.png)] bg-[size:851px_344px] bg-no-repeat" />
            }
            fade={['top']}
            className="max-lg:rounded-t-4xl lg:col-span-4 lg:rounded-tl-4xl"
          />
          <BentoCard
            dark
            eyebrow="IN-DEPTH ANALYSIS"
            title="Know Where You Stand"
            description="Our experts conduct detailed assessments of your systems, uncovering vulnerabilities and
creating actionable plans to fortify your defenses."
            graphic={<LogoTimeline />}
            // `!overflow-visible` is needed to work around a Chrome bug that disables the mask on the graphic.
            className="z-10 !overflow-visible lg:col-span-2 lg:rounded-tr-4xl"
          />
          <BentoCard
            dark
            eyebrow="IMPLEMENTATION & OPTIMIZATION"
            title="Hands-On Support"
            description="From planning to execution, Metis provides hands-on support for deploying solutions and
optimizing security across your organization."
            graphic={<LinkedAvatars />}
            className="lg:col-span-2 lg:rounded-bl-4xl"
          />
          <BentoCard
            dark
            eyebrow="ONGOING GUIDANCE"
            title="Continuous Improvement"
            description="Our team stays with you, offering ongoing consultancy and support as threats evolve and your
business grows."
            graphic={
              <div className="h-80 bg-[url(/screenshots/engagement.png)] bg-[size:851px_344px] bg-no-repeat" />
            }
            fade={['top']}
            className="max-lg:rounded-b-4xl lg:col-span-4 lg:rounded-br-4xl"
          />
        </div>
      </Container>
    </div>
  )
}

export default function Home() {
  return (
    <div className="overflow-hidden">
      <Hero />
      <main>
        <Container className="mt-10">
          {/* <LogoCloud /> */}
        </Container>
        <div className="bg-gradient-to-b from-white from-50% to-gray-100 py-32">
          <FeatureSection />
          <BentoSection />
        </div>
        <DarkBentoSection />
      </main>
      <Testimonials />
      <Footer />
    </div>
  )
}
