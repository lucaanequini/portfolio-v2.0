import { CertCard } from "./cert-card"

const certs = [
    'fullStack',
    'frontEnd',
    'python'
]

export const CertSection = () => {
    return (
        <>
            <div className="sm:mb-20 mt-40" id="certs" />
            <div className="h-auto w-full flex flex-col gap-5 px-5 lg:px-20 xl:px-40">
                <p className="font-bold text-3xl sm:text-5xl text-blue" data-aos='fade-right'>Certs</p>
                <div className="flex flex-col sm:mx-auto sm:flex-row sm:flex-wrap gap-5 sm:gap-2 mt-5 sm:mt-20">
                    {certs.map(cert => (
                        <CertCard key={cert} cert={cert} />
                    ))}
                </div>
            </div>
        </>
    )
}