export function compareObjectsByKey<T>(key: keyof T, ascending = true) {
  return function innerSort(objectA: T, objectB: T) {
    const sortValue =
      objectA[key] > objectB[key] ? 1 : objectA[key] < objectB[key] ? -1 : 0;
    return ascending ? sortValue : -1 * sortValue;
  };
}

export const truncateText = (data: string, truncate: number) => {
  if (truncate) {
    if (data?.split("")?.length > truncate) {
      return data?.split("")?.slice(0, truncate)?.join("") + "...";
    }
    return data;
  }

  return data;
};
