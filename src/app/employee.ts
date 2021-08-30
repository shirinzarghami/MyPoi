export interface Employee {
    Id: number,
    GivenName: string,
    Insertions: string,
    FamilyName: string,
    RegisteredAtUTC: Date,
    StreetName: string,
    HouseNumber: string,
    City: string,
    PhoneNumber: string,
    EmailAddress: string,
    PreferredActivityId: number,
    Vegan: boolean,
    Vegetarian: boolean,
    GlutenFree: boolean,
    LactoseFree: boolean,
    HasEnteredFormTruthfully: boolean
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
