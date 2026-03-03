import type { Principal } from "@icp-sdk/core/principal";
export interface Some<T> {
    __kind__: "Some";
    value: T;
}
export interface None {
    __kind__: "None";
}
export type Option<T> = Some<T> | None;
export type Time = bigint;
export interface Enquiry {
    id: bigint;
    serviceRequired: ServiceRequired;
    name: string;
    email: string;
    message: string;
    address: string;
    timestamp: Time;
    phone: string;
}
export enum ServiceRequired {
    bondCleaning = "bondCleaning",
    bathroomToiletCleaning = "bathroomToiletCleaning",
    windowCleaning = "windowCleaning",
    generalEnquiry = "generalEnquiry",
    wallSpotCleaning = "wallSpotCleaning",
    carpetSteamCleaning = "carpetSteamCleaning",
    ovenKitchenCleaning = "ovenKitchenCleaning"
}
export interface backendInterface {
    getAllEnquiries(): Promise<Array<Enquiry>>;
    getEnquiriesByService(service: ServiceRequired): Promise<Array<Enquiry>>;
    getEnquiryById(id: bigint): Promise<Enquiry>;
    getSubmissionCount(): Promise<bigint>;
    submitEnquiry(name: string, email: string, phone: string, address: string, serviceRequired: ServiceRequired, message: string): Promise<bigint>;
}
