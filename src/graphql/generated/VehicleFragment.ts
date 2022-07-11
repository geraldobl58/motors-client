/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

import { ENUM_VEHICLE_COMBUSTIVEL, ENUM_VEHICLE_CAMBIO } from "./globalTypes";

// ====================================================
// GraphQL fragment: VehicleFragment
// ====================================================

export interface VehicleFragment_cover {
  __typename: "UploadFile";
  url: string;
}

export interface VehicleFragment_make {
  __typename: "Categorias";
  nome: string;
}

export interface VehicleFragment_version {
  __typename: "Versao";
  nome: string;
}

export interface VehicleFragment_localization {
  __typename: "Localization";
  nome: string;
}

export interface VehicleFragment {
  __typename: "Vehicle";
  cover: VehicleFragment_cover | null;
  make: VehicleFragment_make | null;
  slug: string;
  titulo: string;
  version: VehicleFragment_version | null;
  combustivel: ENUM_VEHICLE_COMBUSTIVEL;
  cambio: ENUM_VEHICLE_CAMBIO | null;
  preco: number;
  ano: string;
  kilometragem: number | null;
  localization: VehicleFragment_localization | null;
}
