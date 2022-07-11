/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

import { ENUM_VEHICLE_COMBUSTIVEL, ENUM_VEHICLE_CAMBIO } from "./globalTypes";

// ====================================================
// GraphQL query operation: QueryHome
// ====================================================

export interface QueryHome_banners_image {
  __typename: "UploadFile";
  url: string;
}

export interface QueryHome_banners_button {
  __typename: "ComponentPageButton";
  label: string;
  link: string;
}

export interface QueryHome_banners {
  __typename: "Banner";
  image: QueryHome_banners_image | null;
  title: string;
  subtitle: string;
  button: QueryHome_banners_button | null;
}

export interface QueryHome_recommended_cover {
  __typename: "UploadFile";
  url: string;
}

export interface QueryHome_recommended_make {
  __typename: "Categorias";
  nome: string;
}

export interface QueryHome_recommended_version {
  __typename: "Versao";
  nome: string;
}

export interface QueryHome_recommended_localization {
  __typename: "Localization";
  nome: string;
}

export interface QueryHome_recommended {
  __typename: "Vehicle";
  cover: QueryHome_recommended_cover | null;
  make: QueryHome_recommended_make | null;
  slug: string;
  titulo: string;
  version: QueryHome_recommended_version | null;
  combustivel: ENUM_VEHICLE_COMBUSTIVEL;
  cambio: ENUM_VEHICLE_CAMBIO | null;
  preco: number;
  ano: string;
  kilometragem: number | null;
  localization: QueryHome_recommended_localization | null;
}

export interface QueryHome {
  banners: QueryHome_banners[];
  recommended: QueryHome_recommended[];
}
