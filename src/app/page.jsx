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
    'Pantheon Security - Fortifying Legacy Systems with AI-Powered Cybersecurity.',
}

function Hero() {
  return (
    <div className="relative bg-gray-900 rounded-4xl"> {/* Added rounded-4xl for border radius */}
      <Gradient className="absolute inset-2 bottom-0 rounded-4xl ring-1 ring-inset ring-black/5" />
      <Container className="relative">
        <Navbar />
        <div className="pb-24 pt-16 sm:pb-32 sm:pt-24 md:pb-48 md:pt-32">
          <h1 className="font-display text-balance text-6xl/[0.9] font-medium tracking-tight text-white sm:text-8xl/[0.8] md:text-9xl/[0.8]">
            Pantheon
Security.
          </h1>
          <p className="mt-8 max-w-lg text-xl/7 font-medium text-white/75 sm:text-2xl/8">
            An AI-powered suite of tools designed to safeguard legacy systems from modern threats, all managed in one place.
          </p>
          <p className="mt-4 max-w-lg text-xl/7 font-medium text-white/75 sm:text-2xl/8">
            Our AI monitors your entire attack surface 24/7 and proactively shuts down attack vectors.
          </p>
          <div className="mt-12 flex flex-col gap-x-6 gap-y-4 sm:flex-row">
            <Button href="#" className="text-white">Get started</Button>
          </div>
        </div>
      </Container>
    </div>
  )
}

function FeatureSection() {
  return (
    <div className="overflow-hidden bg-gray-900 rounded-4xl"> {/* Added rounded-4xl for border radius */}
      <Container className="pb-24">
        <Heading as="h2" className="max-w-3xl text-white text-lg">
          Centralize OSINT, detect vulnerabilities, and oversee penetration tests in one solution.
        </Heading>
        <video
          width="100%"
          height="auto"
          src="/screenshots/heimdall-dashboard-wide.mp4"
          className="mt-16 w-full h-auto rounded-lg"
          loop
          autoPlay
          muted
        />
      </Container>
    </div>
  )
}

// function BentoSection() {
//   return (
//     <Container className="bg-gray-900">
//       <Subheading className="text-white">HEIMDALL - MANAGE YOUR ATTACK SURFACE</Subheading>
//       <Heading as="h3" className="mt-2 max-w-3xl text-white">
//         A comprehensive view of
// your entire attack surface.
//       </Heading>
//       <Subheading className="text-white">Secure Every Legacy System. Heimdall protects your legacy systems with real-time AI-powered monitoring
// and threat detection.</Subheading>

//       <div className="mt-10 grid grid-cols-1 gap-4 sm:mt-16 lg:grid-cols-6 lg:grid-rows-2">
//         <BentoCard
//           eyebrow="ATTACK SURFACE MANAGEMENT"
//           title="Gain Full Visibility"
//           description="Heimdall uses AI to map your infrastructure, discovering all assets across legacy and modern
// systems."
//           graphic={
//             <div className="h-80 bg-[url(/screenshots/profile.png)] bg-[size:1000px_560px] bg-[left_-109px_top_-112px] bg-no-repeat" />
//           }
//           fade={['bottom']}
//           className="max-lg:rounded-t-4xl lg:col-span-3 lg:rounded-tl-4xl"
//         />
//         <BentoCard
//           eyebrow="VULNERABILITY ASSESSMENT"
//           title="Stay One Step Ahead"
//           description="With AI-driven vulnerability detection, Heimdall ensures you’re always aware of potential risks
// lurking in your systems."
//           graphic={
//             <div className="absolute inset-0 bg-[url(/screenshots/competitors.png)] bg-[size:1100px_650px] bg-[left_-38px_top_-73px] bg-no-repeat" />
//           }
//           fade={['bottom']}
//           className="lg:col-span-3 lg:rounded-tr-4xl"
//         />
//         <BentoCard
//           eyebrow="MONITORING"
//           title="Built for 24/7 Protection"
//           description="Our platform continuously scans your network, identifying weaknesses in real-time and
// providing immediate insights via interactive dashboards."
//           graphic={
//             <div className="flex size-full pl-10 pt-10">
//               {/* <Keyboard highlighted={['LeftCommand', 'LeftShift', 'D']} /> */}
//               <LogoTimeline />
//             </div>
//           }
//           className="lg:col-span-2 lg:rounded-bl-4xl"
//         />
//         <BentoCard
//           eyebrow="SEAMLESS INTEGRATION"
//           title="Legacy Meets Modern Security"
//           description="Heimdall integrates modern security measures into your legacy infrastructure with zero
// disruption, ensuring continuous protection."
//           graphic={<LogoCluster />}
//           className="lg:col-span-2"
//         />
//         <BentoCard
//           eyebrow="CONSULTING"
//           title="Get Expert Support"
//           description="Pantheon Security offers expert consulting services to help you prioritize and remediate
// complex vulnerabilities in legacy systems."
//           graphic={<Map />}
//           className="max-lg:rounded-b-4xl lg:col-span-2 lg:rounded-br-4xl"
//         />
//       </div>
//     </Container>
//   )
// }

function DarkBentoSection() {
  return (
    <div className="mx-2 mt-2 rounded-4xl bg-[#1a1a1a] py-32"> {/* Changed to a dark gray color */}
      <Container>
        <Subheading dark className="text-white">Pantheon: AI-Powered Defense for Legacy Systems</Subheading>
        <Heading as="h3" dark className="mt-2 max-w-2xl text-white">
          A suite of AI-native tools built for 24/7 protection, .
        </Heading>
        <Subheading dark className="text-white">Experience complete visibility and management of your security landscape, all from one centralized platform</Subheading>

        <div className="mt-10 grid grid-cols-1 gap-4 sm:mt-16 lg:grid-cols-6 lg:grid-rows-2">
          <BentoCard
            dark
            eyebrow="Gain Full Visibility"
            title="Comprehensive AI Monitoring All in One Place"
            description="Pantheon Security brings together all your cybersecurity needs into a unified platform, including Attack Surface Management, OSINT, vulnerability detection, and testing tools. The entire process—from interaction to deployment and testing—occurs in one seamless environment, simplifying management and boosting efficiency.."
            graphic={
              <div className="h-80 bg-[url(/screenshots/networking.png)] bg-[size:851px_344px] bg-no-repeat" />
            }
            fade={['top']}
            className="max-lg:rounded-t-4xl lg:col-span-4 lg:rounded-tl-4xl"
          />
          <BentoCard
            dark
            eyebrow="SEAMLESS INTEGRATION"
            title="AI-Driven Integration for Legacy System"
            description="Our platform uses AI to seamlessly integrate with legacy systems, allowing you to deploy new security measures without disruption. We make adapting to advanced security effortless, overcoming traditional integration challenges."
            graphic={<LogoTimeline />}
            className="z-10 !overflow-visible lg:col-span-2 lg:rounded-tr-4xl"
          />
          <BentoCard
            dark
            eyebrow="MONITORING"
            title="Automation Meets Vigilant Security"
            description="
Our platform delivers holistic security with AI-driven monitoring bots that continuously protect against threats like social engineering, malware, credential theft, insider threats, and zero-day exploits, ensuring comprehensive coverage across your infrastructure."
            graphic={<LogoCluster />}
            className="lg:col-span-2 lg:rounded-bl-4xl"
          />
          <BentoCard
            dark
            eyebrow="AUTOMATED THREAT RESPONSE"
            title="Respond Faster Than Ever"
            description="Pantheon’s AI-driven threat response system automatically detects and mitigates threats in real time, significantly reducing the time between detection and resolution."
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
    <div className="overflow-hidden bg-[#1a1a1a]"> {/* Changed to a dark gray color */}
      <Hero />
      <main>
        <Container className="mt-10">
          {/* <LogoCloud /> */}
        </Container>
        <div className="bg-gradient-to-b from-gray-900 from-50% to-[#1a1a1a] py-32 rounded-4xl"> {/* Updated gradient to match new color */}
          <FeatureSection />
          {/* <BentoSection /> */}
        </div>
        <DarkBentoSection />
      </main>
      <Testimonials />
      <Footer />
    </div>
  )
}
