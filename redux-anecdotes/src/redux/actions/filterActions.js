export const updateFilter = (filter) => {
    return {
      type: "UPDATE_FILTER",
      data: { filter },
    };
  };