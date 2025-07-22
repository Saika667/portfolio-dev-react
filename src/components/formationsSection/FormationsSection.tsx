import FormationCard from "../formationCard/FormationCard"
import { Section } from "./FormationsSectionStyle"

function FormationsSection() {
    return (
        <Section>
            <FormationCard
                formationName="Licence Sciences, Technologies, Santé, mention Sciences de la vie"
                year="2017"
                schoolName="Université François Rabelais"
            />
        </Section>
    )
}

export default FormationsSection