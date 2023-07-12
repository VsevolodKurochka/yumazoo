export const timeout = (delay = 500) => {
  return new Promise((resolve) => setTimeout(resolve, delay));
};

export const wait = async (promise, minDelay) =>
  await Promise.all([promise, timeout(minDelay)]);