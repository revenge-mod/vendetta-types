declare module "@vendetta" {
    export * as patcher from "@vendetta/patcher";
    export * as metro from "@vendetta/metro";
    export * as constants from "@vendetta/constants";
    export * as utils from "@vendetta/utils";
    export * as debug from "@vendetta/debug";
    export * as ui from "@vendetta/ui";
    export * as plugins from "@vendetta/plugins";
    export * as themes from "@vendetta/themes";
    export * as commands from "@vendetta/commands";
    export * as storage from "@vendetta/storage";

    export const settings: Settings;

    export * as loader from "@vendetta/loader";

    export const logger: Logger;
    export const version: string;
    export const unload: () => void;

    export * as plugin from "@vendetta/plugin";
    export * as default from "@vendetta";
}

declare module "@vendetta/patcher" {
    import * as _spitroast from "spitroast";

    export const after: typeof _spitroast.after;
    export const before: typeof _spitroast.before;
    export const instead: typeof _spitroast.instead;

    export * as default from "@vendetta/patcher";
}

declare module "@vendetta/metro" {
    export const find: (filter: (m: any) => boolean) => any;
    export const findAll: (filter: (m: any) => boolean) => any[];
    export const findByProps: PropsFinder;
    export const findByPropsAll: PropsFinderAll;
    export const findByName: (name: string, defaultExp?: boolean) => any;
    export const findByNameAll: (name: string, defaultExp?: boolean) => any[];
    export const findByDisplayName: (displayName: string, defaultExp?: boolean) => any;
    export const findByDisplayNameAll: (displayName: string, defaultExp?: boolean) => any[];
    export const findByTypeName: (typeName: string, defaultExp?: boolean) => any;
    export const findByTypeNameAll: (typeName: string, defaultExp?: boolean) => any[];
    export const findByStoreName: (name: string) => any;

    export * as common from "@vendetta/metro/common";
    export * as default from "@vendetta/metro";
}

declare module "@vendetta/metro/common" {
    import _Clipboard from "@react-native-clipboard/clipboard";
    import _React from "react";
    import _RN from "react-native";
    import _moment from "moment";
    import _chroma from "chroma-js";
    import _lodash from "lodash";

    export const constants: PropIntellisense<"Fonts" | "Permissions">;
    export const channels: PropIntellisense<"getVoiceChannelId">;
    export const i18n: PropIntellisense<"Messages">;
    export const url: PropIntellisense<"openURL">;
    export const toasts: PropIntellisense<"open" | "close">;
    export const stylesheet: DiscordStyleSheet;
    export const clipboard: typeof _Clipboard;
    export const assets: PropIntellisense<"registerAsset">;
    export const invites: PropIntellisense<"acceptInviteAndTransitionToInviteChannel">;
    export const commands: PropIntellisense<"getBuiltInCommands">;
    export const navigation: PropIntellisense<"pushLazy">;
    export const navigationStack: PropIntellisense<"createStackNavigator">;
    export const NavigationNative: PropIntellisense<"NavigationContainer">;
    export const Flux: PropIntellisense<"connectStores">;
    export const FluxDispatcher: PropIntellisense<"_currentDispatchActionType">;
    export const React: typeof _React;
    export const ReactNative: typeof _RN;
    export const moment: typeof _moment;
    export const chroma: typeof _chroma;
    export const lodash: typeof _lodash;

    export * as default from "@vendetta/metro/common";
}

declare module "@vendetta/constants" {
    export const DISCORD_SERVER: string;
    export const DISCORD_SERVER_ID: string;
    export const PLUGINS_CHANNEL_ID: string;
    export const THEMES_CHANNEL_ID: string;
    export const GITHUB: string;
    /**
     * @deprecated Unless you want to maintain compatibility, please use `PROXY_PREFIXES` instead.
     */
    export const PROXY_PREFIX: string;
    export const PROXY_PREFIXES: string[];
    export const HTTP_REGEX: RegExp;
    export const HTTP_REGEX_MULTI: RegExp;

    export * as default from "@vendetta/constants";
}

declare module "@vendetta/utils" {
    export const findInReactTree: (tree: SearchTree, filter: SearchFilter) => any;
    export const findInTree: (tree: SearchTree, filter: SearchFilter, options: FindInTreeOptions) => any;
    export const safeFetch: (input: RequestInfo | URL, options?: RequestInit, timeout?: number) => Promise<Response>;
    export const unfreeze: (obj: object) => object;
    export const without: <O extends object, K extends readonly (keyof O)[]>(object: O, ...keys: K) => Omit<O, typeof keys[number]>;

    export * as default from "@vendetta/utils";
}

declare module "@vendetta/debug" {
    export const connectToDebugger: (url: string) => void;
    export const getDebugInfo: () => void;

    export * as default from "@vendetta/debug";
}

declare module "@vendetta/ui" {
    export * as components from "@vendetta/ui/components";
    export * as toasts from "@vendetta/ui/toasts";
    export * as alerts from "@vendetta/ui/alerts";
    export * as assets from "@vendetta/ui/assets";

    export const semanticColors: Record<string, any>;
    export const rawColors: Record<string, any>;

    export * as default from "@vendetta/ui";
}

declare module "@vendetta/ui/components" {
    import _React from "react";
    import _RN from "react-native";

    export const Forms: PropIntellisense<"Form" | "FormSection">;
    export const General: PropIntellisense<"Button" | "Text" | "View">;
    export const Alert: _React.ComponentType;
    export const Button: _React.ComponentType<any> & { Looks: any, Colors: ButtonColors, Sizes: any };
    export const HelpMessage: _React.ComponentType;
    export const SafeAreaView: typeof _RN.SafeAreaView;
    export const Summary: _React.ComponentType<SummaryProps>;
    export const ErrorBoundary: _React.ComponentType<ErrorBoundaryProps>;
    export const Codeblock: _React.ComponentType<CodeblockProps>;
    export const Search: _React.ComponentType<SearchProps>;

    export * as default from "@vendetta/ui/components";
}

declare module "@vendetta/ui/toasts" {
    export const showToast: (content: string, asset?: number) => void;

    export * as default from "@vendetta/ui/toasts";
}

declare module "@vendetta/ui/alerts" {
    import _React from "react";

    export const showConfirmationAlert: (options: ConfirmationAlertOptions) => void;
    export const showCustomAlert: (component: _React.ComponentType, props: any) => void;
    export const showInputAlert: (options: InputAlertProps) => void;

    export * as default from "@vendetta/ui/alerts";
}

declare module "@vendetta/ui/assets" {
    export const all: Record<string, Asset>;
    export const find: (filter: (a: any) => void) => Asset | null | undefined;
    export const getAssetByName: (name: string) => Asset;
    export const getAssetByID: (id: number) => Asset;
    export const getAssetIDByName: (name: string) => number;

    export * as default from "@vendetta/ui/assets";
}

declare module "@vendetta/plugins" {
    export const plugins: Record<string, Plugin>;
    export const fetchPlugin: (id: string) => Promise<void>;
    export const installPlugin: (id: string, enabled?: boolean) => Promise<void>;
    export const startPlugin: (id: string) => Promise<void>;
    export const stopPlugin: (id: string, disable?: boolean) => void;
    export const removePlugin: (id: string) => void;
    export const getSettings: (id: string) => JSX.Element;

    export * as default from "@vendetta/plugins";
}

declare module "@vendetta/themes" {
    export const themes: Record<string, Theme>;
    export const fetchTheme: (id: string, selected?: boolean) => Promise<void>;
    export const installTheme: (id: string) => Promise<void>;
    export const selectTheme: (id: string) => Promise<void>;
    export const removeTheme: (id: string) => Promise<boolean>;
    export const getCurrentTheme: () => Theme | null;
    export const updateThemes: () => Promise<void>;

    export * as default from "@vendetta/themes";
}

declare module "@vendetta/commands" {
    export const registerCommand: (command: ApplicationCommand) => () => void;

    export * as default from "@vendetta/commands";
}

declare module "@vendetta/storage" {
    export const createProxy: <T>(target: T) => { proxy: T, emitter: Emitter };
    export const useProxy: <T>(storage: T) => T;
    export const createStorage: <T>(backend: StorageBackend) => Promise<Awaited<T>>;
    export const wrapSync: <T extends Promise<any>>(store: T) => Awaited<T>;
    export const awaitSyncWrapper: (store: any) => Promise<void>;
    export const createMMKVBackend: (store: string) => StorageBackend;
    export const createFileBackend: (file: string) => StorageBackend;

    export * as default from "@vendetta/storage";
}

declare module "@vendetta/loader" {
    export const identity: LoaderIdentity;
    export const config: LoaderConfig;

    export * as default from "@vendetta/loader";
}

declare module "@vendetta/plugin" {
    export const id: string;
    export const manifest: PluginManifest;
    export const storage: Record<string, any>;

    export * as default from "@vendetta/plugin";
}

type MetroModules = { [id: number]: any };

interface SummaryProps {
    label: string;
    icon?: string;
    noPadding?: boolean;
    noAnimation?: boolean;
    children: JSX.Element | JSX.Element[];
}

interface ErrorBoundaryProps {
    children: JSX.Element | JSX.Element[];
}

interface CodeblockProps {
    selectable?: boolean;
    style?: _RN.TextStyle;
    children?: string;
}

interface SearchProps {
    onChangeText?: (v: string) => void;
    placeholder?: string;
    style?: _RN.TextStyle;
}

type PropIntellisense<P extends string | symbol> = Record<P, any> & Record<PropertyKey, any>;
type PropsFinder = <T extends string | symbol>(...props: T[]) => PropIntellisense<T>;
type PropsFinderAll = <T extends string | symbol>(...props: T[]) => PropIntellisense<T>[];
type LoggerFunction = (...messages: any[]) => void;

interface Logger {
    log: LoggerFunction;
    info: LoggerFunction;
    warn: LoggerFunction;
    error: LoggerFunction;
    time: LoggerFunction;
    trace: LoggerFunction;
    verbose: LoggerFunction;
}

type SearchTree = Record<string, any>;
type SearchFilter = (tree: SearchTree) => boolean;

interface FindInTreeOptions {
    walkable?: string[];
    ignore?: string[];
    maxDepth?: number;
}

interface Asset {
    name: string;
    id: number;
}

declare const enum ButtonColors {
    BRAND = "brand",
    RED = "red",
    GREEN = "green",
    PRIMARY = "primary",
    TRANSPARENT = "transparent",
    GREY = "grey",
    LIGHTGREY = "lightgrey",
    WHITE = "white",
    LINK = "link"
}

interface ConfirmationAlertOptions {
    title?: string;
    content: string | JSX.Element | (string | JSX.Element)[];
    confirmText?: string;
    confirmColor?: ButtonColors;
    onConfirm: () => void;
    secondaryConfirmText?: string;
    onConfirmSecondary?: () => void;
    cancelText?: string;
    onCancel?: () => void;
    isDismissable?: boolean;
}

interface InputAlertProps {
    title?: string;
    confirmText?: string;
    confirmColor?: ButtonColors;
    onConfirm: (input: string) => (void | Promise<void>);
    cancelText?: string;
    placeholder?: string;
    initialValue?: string;
}

interface Author {
    name: string;
    id?: string;
}

interface PluginManifest {
    name: string;
    description: string;
    authors: Author[];
    main: string;
    hash: string;
    vendetta?: {
            icon?: string;
        };
}

interface Plugin {
    id: string;
    manifest: PluginManifest;
    enabled: boolean;
    update: boolean;
    js: string;
}

interface ThemeData {
    name: string;
    description?: string;
    authors?: Author[];
    spec: number;
    semanticColors?: Record<string, (string | false)[]>;
    rawColors?: Record<string, string>;
    background?: {
            url: string;
            blur?: number;
            /**
             * The alpha value of the background.
             * `CHAT_BACKGROUND` of semanticColors alpha value will be ignored when this is specified
            */
            alpha?: number;
        };
}

interface Theme {
    id: string;
    selected: boolean;
    data: ThemeData;
}

interface Settings {
    debuggerUrl: string;
    developerSettings: boolean;
    safeMode?: {
            enabled: boolean;
            currentThemeId?: string;
        };
}

interface ApplicationCommand {
    description: string;
    name: string;
    options: ApplicationCommandOption[];
    execute: (args: any[], ctx: CommandContext) => CommandResult | void | Promise<CommandResult> | Promise<void>;
    id?: string;
    applicationId: string;
    displayName: string;
    displayDescription: string;
    inputType: ApplicationCommandInputType;
    type: ApplicationCommandType;
}

declare const enum ApplicationCommandInputType {
    BUILT_IN,
    BUILT_IN_TEXT,
    BUILT_IN_INTEGRATION,
    BOT,
    PLACEHOLDER
}

interface ApplicationCommandOption {
    name: string;
    description: string;
    required?: boolean;
    type: ApplicationCommandOptionType;
    displayName: string;
    displayDescription: string;
}

declare const enum ApplicationCommandOptionType {
    SUB_COMMAND = 1,
    SUB_COMMAND_GROUP,
    STRING,
    INTEGER,
    BOOLEAN,
    USER,
    CHANNEL,
    ROLE,
    MENTIONABLE,
    NUMBER,
    ATTACHMENT
}

declare const enum ApplicationCommandType {
    CHAT = 1,
    USER,
    MESSAGE
}

interface CommandContext {
    channel: any;
    guild: any;
}

interface CommandResult {
    content: string;
    tts?: boolean;
}

type EmitterEvent = "SET" | "GET" | "DEL";

interface EmitterListenerData {
    path: string[];
    value?: any;
}

type EmitterListener = (
        event: EmitterEvent,
        data: EmitterListenerData | any
    ) => any;
type EmitterListeners = Record<string, Set<EmitterListener>>;

interface Emitter {
    listeners: EmitterListeners;
    on: (event: EmitterEvent, listener: EmitterListener) => void;
    off: (event: EmitterEvent, listener: EmitterListener) => void;
    once: (event: EmitterEvent, listener: EmitterListener) => void;
    emit: (event: EmitterEvent, data: EmitterListenerData) => void;
}

interface StorageBackend {
    get: () => unknown | Promise<unknown>;
    set: (data: unknown) => void | Promise<void>;
}

interface LoaderConfig {
    customLoadUrl: {
            enabled: boolean;
            url: string;
        };
    loadReactDevTools: boolean;
}

interface LoaderIdentity {
    name: string;
    features: {
            loaderConfig?: boolean;
            devtools?: {
                prop: string;
                version: string;
            },
            themes?: {
                prop: string;
            }
        };
}

interface DiscordStyleSheet {
    [index: string]: any;
    createThemedStyleSheet: typeof import("react-native").StyleSheet.create;
}
