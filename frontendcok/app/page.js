import Layout from "@/components/layout/Layout"
import Maintenance from "@/components/sections/Maintenance"
import Chartview from "@/components/sections/Chartview"
import Faqs2 from "@/components/sections/Faqs2"
import Feature2 from "@/components/sections/Feature2"
import Pagetitle3 from "@/components/sections/Pagetitle3"
import Partner3 from "@/components/sections/Partner3"
import Threestep from "@/components/sections/Threestep"
import UglyDogGameLayout from "@/components/uglydog/UglyDogGameLayout"

export default function App() {
    // Set to true to enable maintenance mode
    // You can also set this via environment variable: NEXT_PUBLIC_MAINTENANCE_MODE=true
    const isMaintenanceMode = true

    if (isMaintenanceMode) {
        return <Maintenance />
    }

    return (
        <>
            <Layout headerStyle={1} footerStyle={1}>
                <Pagetitle3 />
                <section className="py-8 md:py-12 bg-transparent" style={{marginBottom: '40px'}}>
                  <UglyDogGameLayout />
                </section>
                <Feature2 />
                <Threestep />
                <Chartview />
                <Partner3 />
                <Faqs2 />
            </Layout>
        </>
    )
}