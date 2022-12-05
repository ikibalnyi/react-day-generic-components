export function GenericComponent<T>() {
  return <div></div>;
}

export const GenericComponent = <T extends unknown>() => <div></div>;

// export const GenericComponent = <T>() => <div></div>;
