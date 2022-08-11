/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createPatch = /* GraphQL */ `
  mutation CreatePatch(
    $input: CreatePatchInput!
    $condition: ModelPatchConditionInput
  ) {
    createPatch(input: $input, condition: $condition) {
      id
      patchNumber
      createdAt
      updatedAt
    }
  }
`;
export const updatePatch = /* GraphQL */ `
  mutation UpdatePatch(
    $input: UpdatePatchInput!
    $condition: ModelPatchConditionInput
  ) {
    updatePatch(input: $input, condition: $condition) {
      id
      patchNumber
      createdAt
      updatedAt
    }
  }
`;
export const deletePatch = /* GraphQL */ `
  mutation DeletePatch(
    $input: DeletePatchInput!
    $condition: ModelPatchConditionInput
  ) {
    deletePatch(input: $input, condition: $condition) {
      id
      patchNumber
      createdAt
      updatedAt
    }
  }
`;
