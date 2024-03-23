type NatureStatType = 'enhancing' | 'hindering' | 'neutral';
type GetStatValueParams = {
    base: number;
    level: number;
    iv?: number;
    ev?: number;
    isHp?: boolean;
    nature?: NatureStatType;
    isShedinja?: boolean;
};
export declare const getStatValue: (params: GetStatValueParams) => number;
export declare const getMaxStatValue: (params: Omit<GetStatValueParams, 'iv' | 'ev' | 'nature'>) => number;
export declare const getMinStatValue: (params: Omit<GetStatValueParams, 'iv' | 'ev' | 'nature'>) => number;
export declare const getPriorGenIIIStatValue: (params: Omit<GetStatValueParams, 'nature' | 'isShedinja'>) => number;
type GetLegendsArceusStatValueParams = {
    base: number;
    isHp?: boolean;
    level?: number;
    effortLevel?: number;
    nature?: NatureStatType;
};
export declare const getLegendsArceusStatValue: (params: GetLegendsArceusStatValueParams) => number;
export declare const getPLAEfforLevelMultiplier: (effortLevel: number) => number;
type GetLetsGoPikachuStatValueParams = {
    base: number;
    isHp?: boolean;
    level?: number;
    iv?: number;
    av?: number;
    nature?: NatureStatType;
    friendship?: number;
};
export declare const getLetsGoPikachuStatValue: (params: GetLetsGoPikachuStatValueParams) => number;
export declare const getLGPFriendshipMultiplier: (friendship: number) => number;
export declare const getCombatPowerValue: () => boolean;
export {};
