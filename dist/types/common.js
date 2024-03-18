"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TimeOfDay = exports.RelativePhysicalStatEvolution = exports.GenderEnum = exports.DamageClassEnum = exports.PokemonTypeIdEnum = void 0;
var PokemonTypeIdEnum;
(function (PokemonTypeIdEnum) {
    PokemonTypeIdEnum[PokemonTypeIdEnum["NORMAL"] = 1] = "NORMAL";
    PokemonTypeIdEnum[PokemonTypeIdEnum["FIGHTING"] = 2] = "FIGHTING";
    PokemonTypeIdEnum[PokemonTypeIdEnum["FLYING"] = 3] = "FLYING";
    PokemonTypeIdEnum[PokemonTypeIdEnum["POISON"] = 4] = "POISON";
    PokemonTypeIdEnum[PokemonTypeIdEnum["GROUND"] = 5] = "GROUND";
    PokemonTypeIdEnum[PokemonTypeIdEnum["ROCK"] = 6] = "ROCK";
    PokemonTypeIdEnum[PokemonTypeIdEnum["BUG"] = 7] = "BUG";
    PokemonTypeIdEnum[PokemonTypeIdEnum["GHOST"] = 8] = "GHOST";
    PokemonTypeIdEnum[PokemonTypeIdEnum["STEEL"] = 9] = "STEEL";
    PokemonTypeIdEnum[PokemonTypeIdEnum["FIRE"] = 10] = "FIRE";
    PokemonTypeIdEnum[PokemonTypeIdEnum["WATER"] = 11] = "WATER";
    PokemonTypeIdEnum[PokemonTypeIdEnum["GRASS"] = 12] = "GRASS";
    PokemonTypeIdEnum[PokemonTypeIdEnum["ELECTRIC"] = 13] = "ELECTRIC";
    PokemonTypeIdEnum[PokemonTypeIdEnum["PSYCHIC"] = 14] = "PSYCHIC";
    PokemonTypeIdEnum[PokemonTypeIdEnum["ICE"] = 15] = "ICE";
    PokemonTypeIdEnum[PokemonTypeIdEnum["DRAGON"] = 16] = "DRAGON";
    PokemonTypeIdEnum[PokemonTypeIdEnum["DARK"] = 17] = "DARK";
    PokemonTypeIdEnum[PokemonTypeIdEnum["FAIRY"] = 18] = "FAIRY";
})(PokemonTypeIdEnum || (exports.PokemonTypeIdEnum = PokemonTypeIdEnum = {}));
var DamageClassEnum;
(function (DamageClassEnum) {
    DamageClassEnum["PHYSICAL"] = "physical";
    DamageClassEnum["STATUS"] = "status";
    DamageClassEnum["SPECIAL"] = "special";
})(DamageClassEnum || (exports.DamageClassEnum = DamageClassEnum = {}));
var GenderEnum;
(function (GenderEnum) {
    GenderEnum[GenderEnum["FEMALE"] = 1] = "FEMALE";
    GenderEnum[GenderEnum["MALE"] = 2] = "MALE";
    GenderEnum[GenderEnum["GENDERLESS"] = 3] = "GENDERLESS";
})(GenderEnum || (exports.GenderEnum = GenderEnum = {}));
var RelativePhysicalStatEvolution;
(function (RelativePhysicalStatEvolution) {
    RelativePhysicalStatEvolution[RelativePhysicalStatEvolution["ATK_GT_DEF"] = 1] = "ATK_GT_DEF";
    RelativePhysicalStatEvolution[RelativePhysicalStatEvolution["ATK_EQ_DEF"] = 0] = "ATK_EQ_DEF";
    RelativePhysicalStatEvolution[RelativePhysicalStatEvolution["ATK_LT_DEF"] = -1] = "ATK_LT_DEF";
})(RelativePhysicalStatEvolution || (exports.RelativePhysicalStatEvolution = RelativePhysicalStatEvolution = {}));
var TimeOfDay;
(function (TimeOfDay) {
    TimeOfDay["DAY"] = "day";
    TimeOfDay["NIGHT"] = "night";
    TimeOfDay["DUSK"] = "dusk";
})(TimeOfDay || (exports.TimeOfDay = TimeOfDay = {}));
//# sourceMappingURL=common.js.map