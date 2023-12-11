export async function setStateAsync(that, state) {
  return new Promise((resolve) => {
    that.setState(state, resolve);
  });
}
