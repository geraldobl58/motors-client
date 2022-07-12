/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

import { ENUM_VEHICLE_COMBUSTIVEL, ENUM_VEHICLE_CAMBIO } from "./globalTypes";

// ====================================================
// GraphQL query operation: QueryVehicles
// ====================================================

export interface QueryVehicles_vehicles_make {
  __typename: "Categorias";
  nome: string;
}

export interface QueryVehicles_vehicles_cover {
  __typename: "UploadFile";
  url: string;
}

export interface QueryVehicles_vehicles_version {
  __typename: "Versao";
  nome: string;
}

export interface QueryVehicles_vehicles_localization {
  __typename: "Localization";
  nome: string;
}

export interface QueryVehicles_vehicles {
  __typename: "Vehicle";
  make: QueryVehicles_vehicles_make | null;
  titulo: string;
  slug: string;
  cover: QueryVehicles_vehicles_cover | null;
  version: QueryVehicles_vehicles_version | null;
  combustivel: ENUM_VEHICLE_COMBUSTIVEL;
  cambio: ENUM_VEHICLE_CAMBIO | null;
  preco: number;
  ano: string;
  kilometragem: number | null;
  localization: QueryVehicles_vehicles_localization | null;
}

export interface QueryVehicles {
  vehicles: QueryVehicles_vehicles[];
}

export interface QueryVehiclesVariables {
  limit: number;
  start?: number | null;
  where?: any | null;
  sort?: string | null;
}
