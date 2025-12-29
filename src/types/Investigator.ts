export enum Provenance {
  Imported = 'imported',
  Created = 'created',
  Duplicated = 'duplicated'
}

export type Ruleset = 'classic' | 'pulp'

export interface IAgingApplication {
  years: number;
  appliedAt: string;
}

export interface IOccupationSnapshot {
  id: string;
  name: string;
}

export interface IInvestigatorMeta {
  readonly id: string;
  readonly createdAt: string;
  updatedAt: string;
  schemaVersion: number;
  provenance: Provenance;
  readonly occupation: IOccupationSnapshot;
  ruleset: Ruleset;
  ownerId: string;
  playerName?: string;
  agingApplied?: IAgingApplication;
}
