import type { ViewStyle } from 'react-native';

export const layout: Record<string, ViewStyle> = {
  flex1: {
    flex: 1,
  },
  flexColumn: {
    flexDirection: 'column',
  },
  flexRow: {
    flexDirection: 'row',
  },
  gap4: {
    gap: 4,
  },
  gap12: {
    gap: 12,
  },
  itemsCenter: {
    alignItems: 'center',
  },
  justifyAround: {
    justifyContent: 'space-around',
  },
  justifyCenter: {
    justifyContent: 'center',
  },
  padding8: {
    padding: 8,
  }
};
