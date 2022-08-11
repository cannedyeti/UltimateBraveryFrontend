import { ModelInit, MutableModel, PersistentModelConstructor } from "@aws-amplify/datastore";





type PatchMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

export declare class Patch {
  readonly id: string;
  readonly patchNumber: string;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  constructor(init: ModelInit<Patch, PatchMetaData>);
  static copyOf(source: Patch, mutator: (draft: MutableModel<Patch, PatchMetaData>) => MutableModel<Patch, PatchMetaData> | void): Patch;
}