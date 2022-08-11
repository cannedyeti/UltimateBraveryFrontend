/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getPatch = /* GraphQL */ `
  query GetPatch($id: ID!) {
    getPatch(id: $id) {
      id
      patchNumber
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const listPatches = /* GraphQL */ `
  query ListPatches(
    $filter: ModelPatchFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listPatches(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        patchNumber
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      nextToken
      startedAt
    }
  }
`;
export const syncPatches = /* GraphQL */ `
  query SyncPatches(
    $filter: ModelPatchFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncPatches(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
      items {
        id
        patchNumber
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      nextToken
      startedAt
    }
  }
`;
