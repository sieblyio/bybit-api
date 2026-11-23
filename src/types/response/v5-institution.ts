export interface InstitutionConnectionCountV5 {
  max: number;
  current: number;
}

export interface InstitutionConnectionLimitsV5 {
  json: InstitutionConnectionCountV5;
  sbe: InstitutionConnectionCountV5;
}

export interface InstitutionConnectionLimitV5 {
  host: string;
  endpointDomain: string;
  spot: InstitutionConnectionLimitsV5;
  derivative: InstitutionConnectionLimitsV5;
}
