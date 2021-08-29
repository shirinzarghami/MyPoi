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

export interface EmployeeListApiModel {
    TotalCount: number,
    Result: [EmployeeListItem]
}

export interface EmployeeListItem {
    Id: number,
    GivenName: string,
    Insertions: string,
    FamilyName: string,
    EmailAddress: string,
    PreferredActivity: string
}
