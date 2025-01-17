// eslint-disable-next-line @typescript-eslint/naming-convention
interface ImportMetaEnv {
    readonly VITE_PORT: string;
    readonly VITE_BACKEND_HOST: string;
    readonly VITE_BACKEND_IMAGES:string;
}

interface ImportMeta {
    readonly env: ImportMetaEnv;
}