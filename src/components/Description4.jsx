import Check from '../imgs/check.svg';

export const Description4 = () => {
    return (
        <section className="px-[5.6rem] bg-white flex py-[7.2rem]">
            <div className="w-6/12">
                <p className="uppercase text-[#1a41c0] font-bold text-[1.32rem]">Diseñada para ser veloz</p>
                <h1 className="font-bold text-[3.6rem] pr-[8rem] leading-[4rem] mb-[1rem] tracking-normal">Actúa rápido e innova aún más rápido.</h1>
                <p className="text-[1.46rem] whitespace-pre-wrap mr-[6rem]">Llega al mercado antes que nadie usando nuevas funciones a medida que salen y responde a las tendencias de consumo cambiantes en tiempo real, con el apoyo de todo un ecosistema de partners.</p>
            </div>

            <div className="w-6/12">
                <ul className="grid grid-cols-1 gap-[2rem] text-[1.52rem]">
                    <li className="flex justify-between items-start gap-[2rem]">
                        <img className='w-[3.8rem]' src={Check} alt="Check" />
                        <span>Migra y pon en marcha tu tienda online en Shopify rápidamente con una plataforma personalizable y fácil de usar.</span>
                    </li>

                    <li className="flex justify-between items-start gap-[2rem]">
                        <img className='w-[3.8rem]' src={Check} alt="Check" />
                        <span>Lanza rápidamente nuevas campañas, canales, personalizaciones y experimentos y repite cada día.</span>
                    </li>

                    <li className="flex justify-between items-start gap-[2rem]">
                        <img className='w-[3.8rem]' src={Check} alt="Check" />
                        <span>Automatiza flujos de trabajo repetitivos y de alto rendimiento en todos tus sistemas y tiendas.</span>
                    </li>

                    <li className="flex justify-between items-start gap-[2rem]">
                        <img className='w-[3.8rem]' src={Check} alt="Check" />
                        <span>Crea cualquier solución que necesite tu negocio mediante un ecosistema de partners y apps especializados.</span>
                    </li>
                </ul>
            </div>
        </section>
    )
}
