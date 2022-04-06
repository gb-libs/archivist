interface Config {
  locale: string,
  theme: string,
}

export enum ConfigActionTypes {
  SET_LOCALE = '@@config/SET_LOCALE',
  SET_THEME = '@@config/SET_THEME',
}

export interface ConfigState {
  readonly data: Config;
}

export interface SetLocaleConfig {
  type: ConfigActionTypes.SET_LOCALE,
  payload: string,
}

export interface SetThemeConfig {
  type: ConfigActionTypes.SET_THEME,
  payload: string,
}

export type ConfigActions = SetLocaleConfig | SetThemeConfig
