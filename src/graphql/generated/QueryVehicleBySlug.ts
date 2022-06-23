/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

import { ENUM_VEHICLE_COMBUSTIVEL, ENUM_VEHICLE_CAMBIO, ENUM_VEHICLE_COR } from "./globalTypes";

// ====================================================
// GraphQL query operation: QueryVehicleBySlug
// ====================================================

export interface QueryVehicleBySlug_vehicles_gallery {
  __typename: "UploadFile";
  url: string;
  label: string | null;
}

export interface QueryVehicleBySlug_vehicles_make {
  __typename: "Categorias";
  nome: string;
}

export interface QueryVehicleBySlug_vehicles_version {
  __typename: "Versao";
  nome: string;
}

export interface QueryVehicleBySlug_vehicles_localization {
  __typename: "Localization";
  nome: string;
}

export interface QueryVehicleBySlug_vehicles_items_icon {
  __typename: "UploadFile";
  url: string;
}

export interface QueryVehicleBySlug_vehicles_items {
  __typename: "Item";
  icon: QueryVehicleBySlug_vehicles_items_icon | null;
  nome: string;
}

export interface QueryVehicleBySlug_vehicles {
  __typename: "Vehicle";
  gallery: QueryVehicleBySlug_vehicles_gallery[];
  titulo: string;
  preco: number;
  ano: string;
  kilometragem: number | null;
  combustivel: ENUM_VEHICLE_COMBUSTIVEL;
  cambio: ENUM_VEHICLE_CAMBIO | null;
  cor: ENUM_VEHICLE_COR;
  placa_final: number;
  descricao: string;
  make: QueryVehicleBySlug_vehicles_make | null;
  version: QueryVehicleBySlug_vehicles_version | null;
  localization: QueryVehicleBySlug_vehicles_localization | null;
  items: QueryVehicleBySlug_vehicles_items[];
}

export interface QueryVehicleBySlug {
  vehicles: QueryVehicleBySlug_vehicles[];
}

export interface QueryVehicleBySlugVariables {
  slug: string;
}
