export const getCurrentMonthRange = () => {
  const now = new Date();
  const start = new Date(now.getFullYear(), now.getMonth(), 1);
  const end = new Date(now.getFullYear(), now.getMonth() + 1, 0);
  return {
    since: start.toISOString(),
    until: end.toISOString(),
  };
};

export const getLastMonthRange = () => {
  const now = new Date();
  const start = new Date(
    Date.UTC(now.getFullYear(), now.getMonth() - 1, 1, 0, 0, 0)
  );
  const end = new Date(Date.UTC(now.getFullYear(), now.getMonth(), 0, 0, 0, 0));
  return {
    since: start.toISOString(),
    until: end.toISOString(),
  };
};
