export const getPagesCount = (totalCount: number, limit: number): number => {
  return Math.ceil(totalCount / limit);
};

export const getPagesArray = (totalPages: number | null) => {
  if (!totalPages) return;

  const result = [];

  for (let index = 0; index < totalPages; index++) {
    result.push(index + 1);
  }

  return result;
};
