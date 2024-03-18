type GetStatValueParams = {
    hp?: boolean;
    base: number;
    iv?: number;
    ev?: number;
    level: number;
    nature?: 'enhancing' | 'hindering' | 'neutral';
};
export declare const getStatValue: (params: GetStatValueParams) => number;
export declare const getMaxStatValue: (params: Omit<GetStatValueParams, 'iv' | 'ev' | 'nature'>) => number;
export declare const getMinStatValue: (params: Omit<GetStatValueParams, 'iv' | 'ev' | 'nature'>) => number;
export declare const getPriorGenIIIStatValue: (params: Omit<GetStatValueParams, 'nature'>) => boolean;
type GetGoPowerStatValue = {};
export declare const getGoPowerStatValue: (params: GetGoPowerStatValue) => void;
export {};
