
export const FDG_TYPE : string = "Firmwide Directory Group (n/)"
export const TAI_TYPE : string = "TAI"
export interface AccessEntity {
    type: string;
    group : string;//FDG
    eonId: string;
    grn: string;
    role : string;
    team: string;
}