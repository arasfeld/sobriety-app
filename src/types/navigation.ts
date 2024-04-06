import type { StackScreenProps } from '@react-navigation/stack';

export type ApplicationStackParamList = {
  Settings: undefined;
  Startup: undefined;
};

export type ApplicationScreenProps =
  StackScreenProps<ApplicationStackParamList>;
