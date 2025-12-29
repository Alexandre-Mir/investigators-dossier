export enum Provenance {
  Imported = 'imported',
  Created = 'created',
  Duplicated = 'duplicated'
}

export type Ruleset = 'classic' | 'pulp'

export interface IInvestigatorMeta {
  readonly id: string;
  readonly createdAt: string;
  updatedAt: string;
  schemaVersion: number;
  provenance: Provenance;
  ruleset: Ruleset;
  ownerId: string;
  playerName?: string;
}