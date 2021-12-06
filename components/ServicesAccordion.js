import Accordion from 'react-bootstrap/Accordion'

const ServicesAccordion = () => {
    return (
        <Accordion>
            <Accordion.Item eventKey="0">
                <Accordion.Header>Residential</Accordion.Header>
                <Accordion.Body>
                    Big Daddy Plumbing offers services such as replacing water heaters, boilers, 
                    shower kits, faucets, new tub installs, and much much more. We care about every
                    job and do not like the quick temporary fix. We will guide you to a long term 
                    solution that will provide peace of mind and 
                </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="1">
                <Accordion.Header>Commercial</Accordion.Header>
                <Accordion.Body>
                    Having over 25 years of union experience, Jeff is well versed in all commercial
                    plumbing needs. Jeff with Big Daddy Plumbing has worked in Stony Brook University,
                    other large commercial buildings, major shopping centers, large warehouses and many 
                    more. From gas pipes to large industrial boilers, there is no job too big.
                </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="2">
                <Accordion.Header>Gas Pipes</Accordion.Header>
                <Accordion.Body>
                    Loren ipsum.
                </Accordion.Body>
            </Accordion.Item>
        </Accordion>
    )
}

export default ServicesAccordion