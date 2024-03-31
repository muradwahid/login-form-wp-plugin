import { produce } from 'immer';

export const updateData = (
  attribute,
  property,
  value,
  secondProperty,
  thirdProperty
) => {
  const updatedData = produce(attribute, (draft) => {
    if (property && secondProperty && thirdProperty) {
      draft[property][secondProperty][thirdProperty] = value;
    } else if (property && secondProperty) {
      draft[property][secondProperty] = value;
    } else {
      draft[property] = value;
    }
  });
  return updatedData;
};
