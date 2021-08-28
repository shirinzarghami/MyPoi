export interface Employee {
    id: number,
    givenName: string,
    insertions: string,
    familyName: string,
    registeredAtUTC: Date,
    streetName: string,
    houseNumber: string,
    city: string,
    phoneNumber: string,
    emailAddress: string,
    preferredActivityId: number,
    vegan: boolean,
    vegetarian: boolean,
    glutenFree: boolean,
    lactoseFree: boolean,
    hasEnteredFormTruthfully: boolean
}
