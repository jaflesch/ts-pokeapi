type NatureStatType = 'enhancing' | 'hindering' | 'neutral';
type GetStatValueParams = {
    base: number;
    iv?: number;
    ev?: number;
    isHp?: boolean;
    level?: number;
    nature?: NatureStatType;
    isShedinja?: boolean;
};
export declare const getStatValue: ({ base, ev, iv, isHp, level, nature, isShedinja, }: GetStatValueParams) => number;
export declare const getMaxStatValue: (params: Omit<GetStatValueParams, 'iv' | 'ev' | 'nature'>) => number;
export declare const getMinStatValue: (params: Omit<GetStatValueParams, 'iv' | 'ev' | 'nature'>) => number;
export declare const getPriorGenIIIStatValue: ({ base, isHp, ev, iv, level, }: Omit<GetStatValueParams, 'nature' | 'isShedinja'>) => number;
type GetLegendsArceusStatValueParams = {
    base: number;
    isHp?: boolean;
    level?: number;
    effortLevel?: number;
    nature?: NatureStatType;
};
export declare const getLegendsArceusStatValue: ({ base, isHp, level, nature, effortLevel, }: GetLegendsArceusStatValueParams) => number;
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
export declare const getLetsGoPikachuStatValue: ({ base, isHp, av, iv, level, nature, friendship, }: GetLetsGoPikachuStatValueParams) => number;
export declare const getLGPFriendshipMultiplier: (friendship: number) => number;
type GetCPValueParams = {
    stat: {
        hp: number;
        attack: number;
        defense: number;
        specialAttack: number;
        specialDefense: number;
        speed: number;
    };
    level?: number;
    totalAv?: number;
};
export declare const getCPValue: ({ stat, totalAv, level, }: GetCPValueParams) => number;
export {};
