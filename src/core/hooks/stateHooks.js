import { useMemo, useState } from 'react';

export const useToggle = initialState => {
  const [isOpen, setIsOpen] = useState(initialState);

  const action = useMemo(
    () => ({
      open: () => setIsOpen(true),
      close: () => setIsOpen(false),
      toggle: () => setIsOpen(state => !state),
    }),
    [setIsOpen],
  );

  return useMemo(
    () => ({
      isOpen,
      ...action,
    }),
    [isOpen, action],
  );
};
