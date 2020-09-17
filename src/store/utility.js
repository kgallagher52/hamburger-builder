export const updateObject = (oldObj, updatedVals) => {
    return {
        ...oldObj,
        ...updatedVals
    }
}