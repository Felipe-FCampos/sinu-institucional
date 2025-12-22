import SupportForm from "../components/contact";
import Faq from "../components/faq";
import PrivacyPolicy from "../components/Privacy";

export default function PrivacyPolicyPage() {
    return (
        <>
            <PrivacyPolicy
                appName="Sinu"
                contactEmail="sinu.app.br@gmail.com"
                lastUpdated="22/12/2025"
            />
            <SupportForm />

            <Faq />
        </>
    )
}