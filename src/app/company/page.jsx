import { AnimatedNumber } from '@/components/animated-number'
import { Button } from '@/components/button'
import { Container } from '@/components/container'
import { Footer } from '@/components/footer'
import { GradientBackground } from '@/components/gradient'
import { Navbar } from '@/components/navbar'
import { Heading, Lead, Subheading } from '@/components/text'

export const metadata = {
  title: 'Company',
  description:
    'Fortifying Legacy Systems with AI-Powered Cybersecurity.',
}

function Header() {
  return (
    <Container className="mt-16 bg-[#1a1a1a] text-white"> {/* Updated background and text color */}
      <Heading as="h1" className="text-white">Fortifying Legacy Systems with AI-Powered Solutions</Heading>
      <Lead className="mt-6 max-w-3xl text-white/75"> {/* Updated text color */}
        Pantheon Security offers comprehensive AI-driven cybersecurity solutions tailored to protect legacy systems, bridging the gap between outdated infrastructure and modern security needs.
      </Lead>
      <section className="mt-16 grid grid-cols-1 lg:grid-cols-2 lg:gap-12">
        <div className="max-w-lg">
          <h2 className="text-2xl font-medium tracking-tight text-white"> {/* Updated text color */}
            The Legacy System Security Challenge
          </h2>
          <p className="mt-6 text-sm/6 text-gray-400"> {/* Updated text color */}
            Legacy systems form the backbone of many organizations, but they're often the most vulnerable to cyber threats. These outdated infrastructures create blind spots, making it difficult to identify and mitigate risks comprehensively. Traditional security tools fall short, leaving your critical assets exposed.
          </p>
          <p className="mt-8 text-sm/6 text-gray-400"> {/* Updated text color */}
            Cybersecurity costs continue to rise, especially for organizations with outdated infrastructure. AI introduces new threats that require continuous monitoring and adaptation. Pantheon Security is here to address these challenges by offering scalable, cost-effective solutions.
          </p>
        </div>
        <div className="pt-20 lg:row-span-2 lg:-mr-16 xl:mr-auto">
          <div className="-mx-8 grid grid-cols-2 gap-4 sm:-mx-16 sm:grid-cols-4 lg:mx-0 lg:grid-cols-2 lg:gap-4 xl:gap-8">
            <div className="aspect-square overflow-hidden rounded-xl shadow-xl outline-1 -outline-offset-1 outline-black/10">
              <img
                alt=""
                src="/company/1.jpg"
                className="block size-full object-cover"
              />
            </div>
            <div className="-mt-8 aspect-square overflow-hidden rounded-xl shadow-xl outline-1 -outline-offset-1 outline-black/10 lg:-mt-32">
              <img
                alt=""
                src="/company/2.jpg"
                className="block size-full object-cover"
              />
            </div>
            <div className="aspect-square overflow-hidden rounded-xl shadow-xl outline-1 -outline-offset-1 outline-black/10">
              <img
                alt=""
                src="/company/3.jpg"
                className="block size-full object-cover"
              />
            </div>
            <div className="-mt-8 aspect-square overflow-hidden rounded-xl shadow-xl outline-1 -outline-offset-1 outline-black/10 lg:-mt-32">
              <img
                alt=""
                src="/company/4.jpg"
                className="block size-full object-cover"
              />
            </div>
          </div>
        </div>
        {/* <div className="max-lg:mt-16 lg:col-span-1">
          <Subheading>The Numbers</Subheading>
          <hr className="mt-6 border-t border-gray-200" />
          <dl className="mt-6 grid grid-cols-1 gap-x-8 gap-y-4 sm:grid-cols-2">
            <div className="flex flex-col gap-y-2 border-b border-dotted border-gray-200 pb-4">
              <dt className="text-sm/6 text-gray-600">Raised</dt>
              <dd className="order-first text-6xl font-medium tracking-tight">
                $<AnimatedNumber start={100} end={150} />M
              </dd>
            </div>
            <div className="flex flex-col gap-y-2 border-b border-dotted border-gray-200 pb-4">
              <dt className="text-sm/6 text-gray-600">Companies</dt>
              <dd className="order-first text-6xl font-medium tracking-tight">
                <AnimatedNumber start={15} end={30} />K
              </dd>
            </div>
            <div className="flex flex-col gap-y-2 max-sm:border-b max-sm:border-dotted max-sm:border-gray-200 max-sm:pb-4">
              <dt className="text-sm/6 text-gray-600">Deals Closed</dt>
              <dd className="order-first text-6xl font-medium tracking-tight">
                <AnimatedNumber start={0.9} end={1.5} decimals={1} />M
              </dd>
            </div>
            <div className="flex flex-col gap-y-2">
              <dt className="text-sm/6 text-gray-600">Leads Generated</dt>
              <dd className="order-first text-6xl font-medium tracking-tight">
                <AnimatedNumber start={150} end={200} />M
              </dd>
            </div>
          </dl>
        </div> */}
        <div className="max-w-lg">
          <h2 className="text-2xl font-medium tracking-tight text-white"> {/* Updated text color */}
            Our AI-Powered Security Arsenal
          </h2>
          <p className="mt-6 text-sm/6 text-gray-400"> {/* Updated text color */}
            Pantheon Security leverages cutting-edge AI technology to safeguard legacy systems:
          </p>
          <ul className="mt-4 list-disc pl-5 text-sm/6 text-gray-400"> {/* Updated text color */}
            <li>
              <strong>Real-Time Attack Surface Monitoring:</strong> Our AI-driven platform continuously maps and monitors your entire infrastructure, using advanced machine learning models for real-time vulnerability detection across both legacy and modern systems. You’ll have a constant view of your security posture via interactive dashboards.
            </li>
            <li className="mt-2">
              <strong>Innovative Threat Intelligence Gathering:</strong> We utilize data scraping and natural language processing to gather and analyze threat intelligence from across the web, including dark web forums. This keeps you one step ahead of emerging cyber threats.
            </li>
            <li className="mt-2">
              <strong>AI-Powered Penetration Testing:</strong> Our AI bots simulate sophisticated cyberattacks, continuously probing your defenses to uncover weaknesses before real attackers can exploit them. These automated pen tests adapt strategies based on your infrastructure's unique profile.
            </li>
            <li className="mt-2">
              <strong>Intelligent Legacy System Integration:</strong> Our AI seamlessly integrates modern security protocols into legacy systems, analyzing infrastructure and recommending optimal security measures with minimal disruption to operations.
            </li>
          </ul>
        </div>
      </section>
      
    </Container>
  )
}

function Person({ name, description, img }) {
  return (
    <li className="flex items-center gap-4">
      <img alt="" src={img} className="size-12 rounded-full" />
      <div className="text-sm/6">
        <h3 className="font-medium">{name}</h3>
        <p className="text-gray-500">{description}</p>
      </div>
    </li>
  )
}

function Team() {
  return (
    <Container className="mt-32">
      <Subheading>Meet the team</Subheading>
      <Heading as="h3" className="mt-2">
        Founded by an all-star team.
      </Heading>
      <Lead className="mt-6 max-w-3xl">
        Radiant is founded by two of the best sellers in the business and backed
        by investors who look the other way.
      </Lead>
      <div className="mt-12 grid grid-cols-1 gap-12 lg:grid-cols-2">
        <div className="max-w-lg">
          <p className="text-sm/6 text-gray-600">
            Years ago, while working as sales associates at rival companies,
            Thomas, Ben, and Natalie were discussing a big client they had all
            been competing for. Joking about seeing the terms of each other’s
            offers, they had an idea: what if they shared data to win deals and
            split the commission behind their companies’ backs? It turned out to
            be an incredible success, and that idea became the kernel for
            Radiant.
          </p>
          <p className="mt-8 text-sm/6 text-gray-600">
            Today, Radiant transforms revenue organizations by harnessing
            illegally acquired customer and competitor data, using it to provide
            extraordinary leverage. More than 30,000 companies rely on Radiant
            to undercut their competitors and extort their customers, all
            through a single integrated platform.
          </p>
          <div className="mt-6">
            <Button className="w-full sm:w-auto" href="#">
              Join us
            </Button>
          </div>
        </div>
        <div className="max-lg:order-first max-lg:max-w-lg">
          <div className="aspect-[3/2] overflow-hidden rounded-xl shadow-xl outline-1 -outline-offset-1 outline-black/10">
            <img
              alt=""
              src="/company/5.jpg"
              className="block size-full object-cover"
            />
          </div>
        </div>
      </div>
      <Subheading as="h3" className="mt-24">
        The team
      </Subheading>
      <hr className="mt-6 border-t border-gray-200" />
      <ul
        role="list"
        className="mx-auto mt-16 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3"
      >
        <Person
          name="Michael Foster"
          description="Co-Founder / CTO"
          img="/team/michael-foster.jpg"
        />
        <Person
          name="Dries Vincent"
          description="Business Relations"
          img="/team/dries-vincent.jpg"
        />
        <Person
          name="Celeste Vandermark"
          description="Front-end Developer"
          img="/team/celeste-vandermark.jpg"
        />
        <Person
          name="Courtney Henry"
          description="Designer"
          img="/team/courtney-henry.jpg"
        />
        <Person
          name="Marcus Eldridge"
          description="Director of Product"
          img="/team/marcus-eldridge.jpg"
        />
        <Person
          name="Whitney Francis"
          description="Copywriter"
          img="/team/whitney-francis.jpg"
        />
        <Person
          name="Leonard Krasner"
          description="Senior Designer"
          img="/team/leonard-krasner.jpg"
        />
        <Person
          name="Nolan Sheffield"
          description="Principal Designer"
          img="/team/nolan-sheffield.jpg"
        />
        <Person
          name="Emily Selman"
          description="VP, User Experience"
          img="/team/emily-selman.jpg"
        />
      </ul>
    </Container>
  )
}

function Benefits() {
  return (
    <Container className="mt-32 mb-16"> {/* Added mb-16 for bottom margin */}
      <Subheading>A Pantheon of AI Sentinels Guards Your Legacy</Subheading>
      <Lead className="mt-6 max-w-3xl">
        Pantheon Security offers end-to-end, AI-powered cybersecurity designed specifically for organizations with complex legacy systems. Our suite of solutions is inspired by mythological protectors, providing vigilant and adaptive security across all fronts.
      </Lead>
      <Subheading as="h3" className="mt-24">
        Key Services
      </Subheading>
      <hr className="mt-6 border-t border-gray-200" />
      <ul
        role="list"
        className="mx-auto mt-10 grid grid-cols-1 gap-8 lg:grid-cols-2"
      >
        <li>
          <h3 className="text-xl font-semibold">Heimdall: Attack Surface Management</h3>
          <p className="mt-6 max-w-lg text-sm/6 text-gray-500">
            Named after the vigilant Norse god, Heimdall offers:
          </p>
          <ul className="mt-4 list-disc pl-5 text-sm/6 text-gray-600">
            <li>Comprehensive asset discovery across fragmented infrastructures</li>
            <li>AI-powered vulnerability scanning for both legacy and modern systems</li>
            <li>Continuous monitoring and prioritized remediation planning</li>
          </ul>
        </li>
        <li>
          <h3 className="text-xl font-semibold">Metis: Strategic Cybersecurity Consultancy</h3>
          <p className="mt-6 max-w-lg text-sm/6 text-gray-500">
            Inspired by the wisdom of the Greek titaness Metis, this service provides:
          </p>
          <ul className="mt-4 list-disc pl-5 text-sm/6 text-gray-600">
            <li>In-depth analysis of your organization’s cybersecurity needs</li>
            <li>Customized implementation strategies</li>
            <li>Ongoing optimization of security measures to meet evolving challenges</li>
          </ul>
        </li>
      </ul>
    </Container>
  )
}

function Testimonial() {
  return (
    <div className="relative flex aspect-square flex-col justify-end overflow-hidden rounded-3xl sm:aspect-[5/4] lg:aspect-[3/4]">
      <img
        alt=""
        src="/testimonials/veronica-winton.jpg"
        className="absolute inset-0 object-cover"
      />
      <div
        aria-hidden="true"
        className="absolute inset-0 rounded-3xl bg-gradient-to-t from-black from-10% to-75% ring-1 ring-inset ring-gray-950/10 lg:from-25%"
      />
      <figure className="relative p-10">
        <blockquote>
          <p className="relative text-xl/7 text-white before:absolute before:-translate-x-full before:content-['“'] after:absolute after:content-['”']">
            We&apos;ve managed to put two of our main competitors out of
            business in 6 months.
          </p>
        </blockquote>
        <figcaption className="mt-6 border-t border-white/20 pt-6">
          <p className="text-sm/6 font-medium text-white">Veronica Winton</p>
          <p className="text-sm/6 font-medium">
            <span className="bg-gradient-to-r from-[#fff1be] from-[28%] via-[#ee87cb] via-[70%] to-[#b060ff] bg-clip-text text-transparent">
              CSO, Planeteria
            </span>
          </p>
        </figcaption>
      </figure>
    </div>
  )
}

// function Careers() {
//   return (
//     <Container className="my-32">
//       <Subheading>Careers</Subheading>
//       <Heading as="h3" className="mt-2">
//         Join our fully remote team.
//       </Heading>
//       <Lead className="mt-6 max-w-3xl">
//         We work together from all over the world, mainly from locations without
//         extradition agreements.
//       </Lead>
//       <div className="mt-24 grid grid-cols-1 gap-16 lg:grid-cols-[1fr_24rem]">
//         <div className="lg:max-w-2xl">
//           <Subheading as="h3">Open positions</Subheading>
//           <div>
//             <table className="w-full text-left">
//               <colgroup>
//                 <col className="w-2/3" />
//                 <col className="w-1/3" />
//                 <col className="w-0" />
//               </colgroup>
//               <thead className="sr-only">
//                 <tr>
//                   <th scope="col">Title</th>
//                   <th scope="col">Location</th>
//                   <th scope="col">Read more</th>
//                 </tr>
//               </thead>
//               <tbody>
//                 <tr>
//                   <th scope="colgroup" colSpan={3} className="px-0 pb-0 pt-10">
//                     <div className="-mx-4 rounded-lg bg-gray-50 px-4 py-3 text-sm/6 font-semibold">
//                       Engineering
//                     </div>
//                   </th>
//                 </tr>
//                 <tr className="border-b border-dotted border-gray-200 text-sm/6 font-normal">
//                   <td className="px-0 py-4">iOS Developer</td>
//                   <td className="px-0 py-4 text-gray-600">Remote</td>
//                   <td className="px-0 py-4 text-right">
//                     <Button variant="outline" href="#">
//                       View listing
//                     </Button>
//                   </td>
//                 </tr>
//                 <tr className="border-b border-dotted border-gray-200 text-sm/6 font-normal">
//                   <td className="px-0 py-4">Backend Engineer</td>
//                   <td className="px-0 py-4 text-gray-600">Remote</td>
//                   <td className="px-0 py-4 text-right">
//                     <Button variant="outline" href="#">
//                       View listing
//                     </Button>
//                   </td>
//                 </tr>
//                 <tr className="text-sm/6 font-normal">
//                   <td className="px-0 py-4">Product Engineer</td>
//                   <td className="px-0 py-4 text-gray-600">Remote</td>
//                   <td className="px-0 py-4 text-right">
//                     <Button variant="outline" href="#">
//                       View listing
//                     </Button>
//                   </td>
//                 </tr>
//                 <tr>
//                   <th scope="colgroup" colSpan={3} className="px-0 pb-0 pt-5">
//                     <div className="-mx-4 rounded-lg bg-gray-50 px-4 py-3 text-sm/6 font-semibold">
//                       Design
//                     </div>
//                   </th>
//                 </tr>
//                 <tr className="border-b border-dotted border-gray-200 text-sm/6 font-normal">
//                   <td className="px-0 py-4">Principal Designer</td>
//                   <td className="px-0 py-4 text-gray-600">Remote</td>
//                   <td className="px-0 py-4 text-right">
//                     <Button variant="outline" href="#">
//                       View listing
//                     </Button>
//                   </td>
//                 </tr>
//                 <tr className="border-b border-dotted border-gray-200 text-sm/6 font-normal">
//                   <td className="px-0 py-4">Designer</td>
//                   <td className="px-0 py-4 text-gray-600">Remote</td>
//                   <td className="px-0 py-4 text-right">
//                     <Button variant="outline" href="#">
//                       View listing
//                     </Button>
//                   </td>
//                 </tr>
//                 <tr className="text-sm/6 font-normal">
//                   <td className="px-0 py-4">Senior Designer</td>
//                   <td className="px-0 py-4 text-gray-600">Remote</td>
//                   <td className="px-0 py-4 text-right">
//                     <Button variant="outline" href="#">
//                       View listing
//                     </Button>
//                   </td>
//                 </tr>
//               </tbody>
//             </table>
//           </div>
//         </div>
//         <Testimonial />
//       </div>
//     </Container>
//   )
// }

export default function Company() {
  return (
    <main className="overflow-hidden bg-[#1a1a1a] text-white"> {/* Updated background and text color */}
      <GradientBackground />
      <Container>
        <Navbar />
      </Container>
      <Header />
      {/* <Team /> */}
      <Benefits />
      {/* <Careers /> */}
      <Footer />
    </main>
  )
}
