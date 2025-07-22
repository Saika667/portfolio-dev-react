import { CardContainer, FormationName, ImageContainer, InformationContainer, SchoolName, Year } from "./FormationCardStyle"

function FormationCard ({ formationName, year, schoolName }: String) {
    return (
        <CardContainer>
            <ImageContainer>

            </ImageContainer>

            <InformationContainer>
                <FormationName>{ formationName }</FormationName>
                <Year>{ year }</Year> - <SchoolName>{ schoolName }</SchoolName>
            </InformationContainer>
        </CardContainer>
    )
}

export default FormationCard