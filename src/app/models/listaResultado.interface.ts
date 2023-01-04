export interface ListaResultado
{
    idResult:string,
    consult: {
        idConsult:string,
        consultationDate: string,
        name: string,
        lastName: string,
        identificationNumber: string,
        documentType: string,
        user: string
    },
    page:string,
    pageName:string,
    statusSearch:string,
    identificationNumberSearch:string,
    name:string,
    entityType:string,
    programs:string,
    address:string,
    city:string,
    stateProvince:string,
    country:string
}