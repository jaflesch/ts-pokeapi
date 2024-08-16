---
sidebar_position: 8
---

# Moves

Moves are the skills of Pokémon in battle. In battle, a Pokémon uses one move each turn. Some moves (including those learned by Hidden Machine) can be used outside of battle as well, usually for the purpose of removing obstacles or exploring new areas.

<table className='full-width'>
  <thead className='left upc'>
    <tr>
      <th>Property</th>
      <th>Type</th>
      <th>Required</th>
      <th>Description</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>`id`</td>
      <td>`number`</td>
      <td>Yes</td>
      <td>The identifier for this resource.</td>
    </tr>
    <tr>
      <td>`name`</td>
      <td>`string`</td>
      <td>Yes</td>
      <td>The name for this resource.</td>
    </tr>
    <tr>
      <td>`names`</td>
      <td>[`Array<Name>`](../utils#namedapiresource)</td>
      <td>Yes</td>
      <td>The name of this resource listed in different languages.</td>
    </tr>
    <tr>
      <td>`accuracy`</td>
      <td>`number`</td>
      <td>Yes</td>
      <td>The percent value of how likely this move is to be successful.</td>
    </tr>
    <tr>
      <td>`effect_chance`</td>
      <td>`number`</td>
      <td>Yes</td>
      <td>The percent value of how likely it is this moves effect will happen.</td>
    </tr>
    <tr>
      <td>`pp`</td>
      <td>`number`</td>
      <td>Yes</td>
      <td>Power points. The number of times this move can be use.</td>
    </tr>
    <tr>
      <td>`priority`</td>
      <td>[`MovePriority`](#movepriority)</td>
      <td>Yes</td>
      <td>A value between -8 and 8. Sets the order in which moves are executed during battle. See [Bulbapedia](https://bulbapedia.bulbagarden.net/wiki/Priority) for greater detail.</td>
    </tr>
    <tr>
      <td>`power`</td>
      <td>`number`</td>
      <td>Yes</td>
      <td>The base power of this move with a value of 0 if it does not have a base power.</td>
    </tr>
    <tr>
      <td>`contest_combos`</td>
      <td>[`ContestComboSet`](#contestcomboset)</td>
      <td>Yes</td>
      <td>A detail of normal and super contest combos that require this move.</td>
    </tr>
    <tr>
      <td>`contest_type`</td>
      <td>[`NamedAPIResource`](../utils#namedapiresource)</td>
      <td>Yes</td>
      <td>The type of appeal this move gives a Pokémon when used in a contest.</td>
    </tr>
    <tr>
      <td>`contest_effect`</td>
      <td>[`APIResource`](../utils#apiresource)</td>
      <td>Yes</td>
      <td>The effect the move has when used in a contest.</td>
    </tr>
    <tr>
      <td>`damage_class`</td>
      <td>[`NamedAPIResource`](../utils#namedapiresource)</td>
      <td>Yes</td>
      <td>The type of damage the move inflicts on the target, e.g. physical.</td>
    </tr>
    <tr>
      <td>`effect_entries`</td>
      <td>[`VerboseEffect`](../utils#verboseeffect)</td>
      <td>Yes</td>
      <td>The effect of this move listed in different languages.</td>
    </tr>
    <tr>
      <td>`effect_changes`</td>
      <td>[`Array<AbiilityEffectChange>`](../pokemon#abilityeffectchange)</td>
      <td>Yes</td>
      <td>The list of previous effects this move has had across version groups of the games.</td>
    </tr>
    <tr>
      <td>`learned_by_pokemon`</td>
      <td>[`Array<NamedAPIResource>`](../utils#namedapiresource)</td>
      <td>Yes</td>
      <td>List of Pokemon that can learn the move.</td>
    </tr>
    <tr>
      <td>`flavor_text_entries`</td>
      <td>[`Array<MoveFlavorText>`](#moveflavortext)</td>
      <td>Yes</td>
      <td>The flavor text of this move listed in different languages.</td>
    </tr>
    <tr>
      <td>`generation`</td>
      <td>[`NamedAPIResource`](../utils#namedapiresource)</td>
      <td>Yes</td>
      <td>The generation in which this move was introduced.</td>
    </tr>
    <tr>
      <td>`machines`</td>
      <td>[`Array<MachineVersionDetail>`](../utils#machineversiondetail)</td>
      <td>Yes</td>
      <td>A list of the machines that teach this move.</td>
    </tr>
    <tr>
      <td>`meta`</td>
      <td>[`MoveMetadata`](#movemetadata)</td>
      <td>Yes</td>
      <td>Metadata about this move.</td>
    </tr>
    <tr>
      <td>`past_values`</td>
      <td>[`Array<PastMoveStatValues>`](#pastmovestatvalues)</td>
      <td>Yes</td>
      <td>A list of move resource value changes across version groups of the game.</td>
    </tr>
    <tr>
      <td>`stat_changes`</td>
      <td>[`Array<MoveStatChange>`](#movestatchange)</td>
      <td>Yes</td>
      <td>A list of stats this moves effects and how much it effects them.</td>
    </tr>
    <tr>
      <td>`super_contest_effect`</td>
      <td>[`APIResource`](../utils#apiresource)</td>
      <td>Yes</td>
      <td>The effect the move has when used in a super contest.</td>
    </tr>
    <tr>
      <td>`target`</td>
      <td>[`NamedAPIResource`](../utils#namedapiresource)</td>
      <td>Yes</td>
      <td>The type of target that will receive the effects of the attack.</td>
    </tr>
    <tr>
      <td>`type`</td>
      <td>[`NamedAPIResource`](../utils#namedapiresource)</td>
      <td>Yes</td>
      <td>The elemental type of this move.</td>
    </tr>
  </tbody>
</table>

## Move

### MovePriority

<table className='full-width'>
  <thead className='left upc'>
    <tr>
      <th>Value</th>
      <th>Description</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>+5</td>
      <td>Helping Hand</td>
    </tr>
    <tr>
      <td>+4</td>
      <td>Baneful Bunker, Burning Bulwark, Detect, Endure, King's Shield, Obstruct, Protect, Spiky Shield, Silk Trap</td>
    </tr>
    <tr>
      <td>+3</td>
      <td>Fake Out, Quick Guard, Upper Hand, Wide Guard</td>
    </tr>
    <tr>
      <td>+2</td>
      <td>Ally Switch, Extreme Speed, Feint, First Impression, Follow Me, Rage Powder</td>
    </tr>
    <tr>
      <td>+1</td>
      <td>Accelerock, Aqua Jet, Baby-Doll Eyes, Bullet Punch, Grassy Glide<span style={{color: 'red'}}>*</span>, Ice Shard, Jet Punch,
Mach Punch, Quick Attack, Shadow Sneak, Sucker Punch, Thunderclap, Vacuum Wave, Water Shuriken</td>
    </tr>
    <tr>
      <td>0</td>
      <td>All other moves</td>
    </tr>
    <tr>
      <td>-1</td>
      <td>_None_</td>
    </tr>
    <tr>
      <td>-2</td>
      <td>_None_</td>
    </tr>
    <tr>
      <td>-3</td>
      <td>Beak Blast, Focus Punch, Shell Trap</td>
    </tr>
    <tr>
      <td>-4</td>
      <td>Avalanche</td>
    </tr>
    <tr>
      <td>-5</td>
      <td>Counter, Mirror Coat</td>
    </tr>
    <tr>
      <td>-6</td>
      <td>Circle Throw, Dragon Tail, Roar, Whirlwind, Teleport</td>
    </tr>
    <tr>
      <td>-7</td>
      <td>Trick Room</td>
    </tr>
  </tbody>
</table>

:::info
<span style={{color: 'red'}}>*</span> Grassy Glide has increased priority only if used in Grassy Terrain.
:::
    
### ContestComboSet

<table className='full-width'>
  <thead className='left upc'>
    <tr>
      <th>Property</th>
      <th>Type</th>
      <th>Required</th>
      <th>Description</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>`normal`</td>
      <td>[`ContestComboDetail`](#contestcombodetail)</td>
      <td>Yes</td>
      <td>A detail of moves this move can be used before or after, granting additional appeal points in contests.</td>
    </tr>
    <tr>
      <td>`super`</td>
      <td>[`ContestComboDetail`](#contestcombodetail)</td>
      <td>Yes</td>
      <td>A detail of moves this move can be used before or after, granting additional appeal points in super contests.</td>
    </tr>
  </tbody>
</table>

### ContestComboDetail

<table className='full-width'>
  <thead className='left upc'>
    <tr>
      <th>Property</th>
      <th>Type</th>
      <th>Required</th>
      <th>Description</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>`use_before`</td>
      <td>[`Array<NamedAPIResource>`](../utils#namedapiresource)</td>
      <td>Yes</td>
      <td>A list of moves to use before this move.</td>
    </tr>
    <tr>
      <td>`use_after`</td>
      <td>[`Array<NamedAPIResource>`](../utils#namedapiresource)</td>
      <td>Yes</td>
      <td>A list of moves to use after this move.</td>
    </tr>
  </tbody>
</table>

### MoveFlavorText

<table className='full-width'>
  <thead className='left upc'>
    <tr>
      <th>Property</th>
      <th>Type</th>
      <th>Required</th>
      <th>Description</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>`flavor_text`</td>
      <td>`string`</td>
      <td>Yes</td>
      <td>The localized flavor text for an api resource in a specific language.</td>
    </tr>
    <tr>
      <td>`language`</td>
      <td>[`NamedAPIResource`](../utils#namedapiresource)</td>
      <td>Yes</td>
      <td>The language this name is in.</td>
    </tr>
    <tr>
      <td>`version_group`</td>
      <td>[`NamedAPIResource`](../utils#namedapiresource)</td>
      <td>Yes</td>
      <td>The version group that uses this flavor text.</td>
    </tr>
  </tbody>
</table>

### MoveMetaData

<table className='full-width'>
  <thead className='left upc'>
    <tr>
      <th>Property</th>
      <th>Type</th>
      <th>Required</th>
      <th>Description</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>`ailment`</td>
      <td>[`NamedAPIResource`](../utils#namedapiresource)</td>
      <td>Yes</td>
      <td>The status ailment this move inflicts on its target.</td>
    </tr>
    <tr>
      <td>`category`</td>
      <td>[`NamedAPIResource`](../utils#namedapiresource)</td>
      <td>Yes</td>
      <td>The category of move this move falls under, e.g. damage or ailment.</td>
    </tr>
    <tr>
      <td>`min_hits`</td>
      <td>`number`, or `null`</td>
      <td>Yes</td>
      <td>The minimum number of times this move hits. Null if it always only hits once.</td>
    </tr>
    <tr>
      <td>`max_hits`</td>
      <td>`number`, or `null`</td>
      <td>Yes</td>
      <td>The maximum number of times this move hits. Null if it always only hits once.</td>
    </tr>
    <tr>
      <td>`min_turns`</td>
      <td>`number`, or `null`</td>
      <td>Yes</td>
      <td>The minimum number of turns this move continues to take effect. Null if it always only lasts one turn.</td>
    </tr>
    <tr>
      <td>`max_turns`</td>
      <td>`number`, or `null`</td>
      <td>Yes</td>
      <td>The maximum number of turns this move continues to take effect. Null if it always only lasts one turn.</td>
    </tr>
    <tr>
      <td>`drain`</td>
      <td>`number`</td>
      <td>Yes</td>
      <td>HP drain (if positive) or Recoil damage (if negative), in percent of damage done.</td>
    </tr>
    <tr>
      <td>`healing`</td>
      <td>`number`</td>
      <td>Yes</td>
      <td>The amount of hp gained by the attacking Pokemon, in percent of it's maximum HP.</td>
    </tr>
    <tr>
      <td>`crit_rate`</td>
      <td>`number`</td>
      <td>Yes</td>
      <td>Critical hit rate bonus.</td>
    </tr>
    <tr>
      <td>`ailment_chance`</td>
      <td>`number`</td>
      <td>Yes</td>
      <td>The likelihood this attack will cause an ailment.</td>
    </tr>
    <tr>
      <td>`flinch_chance`</td>
      <td>`number`</td>
      <td>Yes</td>
      <td>The likelihood this attack will cause the target Pokémon to flinch.</td>
    </tr>
    <tr>
      <td>`stat_chance`</td>
      <td>`number`</td>
      <td>Yes</td>
      <td>The likelihood this attack will cause a stat change in the target Pokémon.</td>
    </tr>
  </tbody>
</table>

### MoveStatChange

<table className='full-width'>
  <thead className='left upc'>
    <tr>
      <th>Property</th>
      <th>Type</th>
      <th>Required</th>
      <th>Description</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>`change`</td>
      <td>`number`</td>
      <td>Yes</td>
      <td>The amount of change.</td>
    </tr>
    <tr>
      <td>`stat`</td>
      <td>[`NamedAPIResource`](../utils#namedapiresource)</td>
      <td>Yes</td>
      <td>The stat being affected.</td>
    </tr>
  </tbody>
</table>

### PastMoveStatValues

<table className='full-width'>
  <thead className='left upc'>
    <tr>
      <th>Property</th>
      <th>Type</th>
      <th>Required</th>
      <th>Description</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>`accuracy`</td>
      <td>`number`</td>
      <td>Yes</td>
      <td>The percent value of how likely this move is to be successful.</td>
    </tr>
    <tr>
      <td>`effect_chance`</td>
      <td>`number`</td>
      <td>Yes</td>
      <td>The percent value of how likely it is this moves effect will take effect.</td>
    </tr>
    <tr>
      <td>`power`</td>
      <td>`number`</td>
      <td>Yes</td>
      <td>The base power of this move with a value of 0 if it does not have a base power.</td>
    </tr>
    <tr>
      <td>`pp`</td>
      <td>`number`</td>
      <td>Yes</td>
      <td>Power points. The number of times this move can be used.</td>
    </tr>
    <tr>
      <td>`effect_entries`</td>
      <td>[`Array<VerboseEffect>`](../utils#verboseeffect)</td>
      <td>Yes</td>
      <td>The effect of this move listed in different languages.</td>
    </tr>
    <tr>
      <td>`type`</td>
      <td>[`NamedAPIResource`](../utils#namedapiresource)</td>
      <td>Yes</td>
      <td>The elemental type of this move.</td>
    </tr>
    <tr>
      <td>`version_group`</td>
      <td>[`NamedAPIResource`](../utils#namedapiresource)</td>
      <td>Yes</td>
      <td>The version group in which these move stat values were in effect.</td>
    </tr>
  </tbody>
</table>

## MoveAilment

Move Ailments are status conditions caused by moves used during battle. See [Bulbapedia](https://bulbapedia.bulbagarden.net/wiki/Status_condition) for greater detail.

<table className='full-width'>
  <thead className='left upc'>
    <tr>
      <th>Property</th>
      <th>Type</th>
      <th>Required</th>
      <th>Description</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>`id`</td>
      <td>`number`</td>
      <td>Yes</td>
      <td>The identifier for this resource.</td>
    </tr>
    <tr>
      <td>`name`</td>
      <td>`string`</td>
      <td>Yes</td>
      <td>The name for this resource.</td>
    </tr>
    <tr>
      <td>`names`</td>
      <td>[`Array<Name>`](../utils#name)</td>
      <td>Yes</td>
      <td>The name of this resource listed in different languages.</td>
    </tr>
    <tr>
      <td>`move`</td>
      <td>[`Array<NamedAPIResource>`](../utils#namedapiresource)</td>
      <td>Yes</td>
      <td>A list of moves that cause this ailment.</td>
    </tr>
  </tbody>
</table>

## MoveBattleStyle

Styles of moves when used in the Battle Palace. See [Bulbapedia](https://bulbapedia.bulbagarden.net/wiki/Battle_Frontier_(Generation_III)) for greater detail.

<table className='full-width'>
  <thead className='left upc'>
    <tr>
      <th>Property</th>
      <th>Type</th>
      <th>Required</th>
      <th>Description</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>`id`</td>
      <td>`number`</td>
      <td>Yes</td>
      <td>The identifier for this resource.</td>
    </tr>
    <tr>
      <td>`name`</td>
      <td>`string`</td>
      <td>Yes</td>
      <td>The name for this resource.</td>
    </tr>
    <tr>
      <td>`names`</td>
      <td>[`Array<Name>`](../utils#name)</td>
      <td>Yes</td>
      <td>The name of this resource listed in different languages.</td>
    </tr>
  </tbody>
</table>

## MoveCategory

Very general categories that loosely group move effects.

<table className='full-width'>
  <thead className='left upc'>
    <tr>
      <th>Property</th>
      <th>Type</th>
      <th>Required</th>
      <th>Description</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>`id`</td>
      <td>`number`</td>
      <td>Yes</td>
      <td>The identifier for this resource.</td>
    </tr>
    <tr>
      <td>`name`</td>
      <td>`string`</td>
      <td>Yes</td>
      <td>The name for this resource.</td>
    </tr>
    <tr>
      <td>`moves`</td>
      <td>[`Array<NamedAPIResource>`](../utils#namedapiresource)</td>
      <td>Yes</td>
      <td>A list of moves that fall into this category.</td>
    </tr>
    <tr>
      <td>`descriptions`</td>
      <td>[`Array<Description>`](../utils#description)</td>
      <td>Yes</td>
      <td>The description of this resource listed in different languages.</td>
    </tr>
  </tbody>
</table>

## ModeDamageClass

Damage classes moves can have, e.g. physical, special, or non-damaging.

<table className='full-width'>
  <thead className='left upc'>
    <tr>
      <th>Property</th>
      <th>Type</th>
      <th>Required</th>
      <th>Description</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>`id`</td>
      <td>`number`</td>
      <td>Yes</td>
      <td>The identifier for this resource.</td>
    </tr>
    <tr>
      <td>`name`</td>
      <td>`string`</td>
      <td>Yes</td>
      <td>The name for this resource.</td>
    </tr>
    <tr>
      <td>`names`</td>
      <td>[`Array<Name>`](../utils#name)</td>
      <td>Yes</td>
      <td>The name of this resource listed in different languages.</td>
    </tr>
    <tr>
      <td>`moves`</td>
      <td>[`Array<NamedAPIResource>`](../utils#namedapiresource)</td>
      <td>Yes</td>
      <td>A list of moves that fall into this damage class.</td>
    </tr>
    <tr>
      <td>`descriptions`</td>
      <td>[`Array<Description>`](../utils#description)</td>
      <td>Yes</td>
      <td>The description of this resource listed in different languages.</td>
    </tr>
  </tbody>
</table>

## MoveLearnMethod

Methods by which Pokémon can learn moves.

<table className='full-width'>
  <thead className='left upc'>
    <tr>
      <th>Property</th>
      <th>Type</th>
      <th>Required</th>
      <th>Description</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>`id`</td>
      <td>`number`</td>
      <td>Yes</td>
      <td>The identifier for this resource.</td>
    </tr>
    <tr>
      <td>`name`</td>
      <td>`string`</td>
      <td>Yes</td>
      <td>The name for this resource.</td>
    </tr>
    <tr>
      <td>`names`</td>
      <td>[`Array<Name>`](../utils#name)</td>
      <td>Yes</td>
      <td>The name of this resource listed in different languages.</td>
    </tr>
    <tr>
      <td>`descriptions`</td>
      <td>[`Array<Description>`](../utils#description)</td>
      <td>Yes</td>
      <td>The description of this resource listed in different languages.</td>
    </tr>
    <tr>
      <td>`version_groups`</td>
      <td>[`Array<NamedAPIResource>`](../utils#namedapiresource)</td>
      <td>Yes</td>
      <td>A list of version groups where moves can be learned through this method.</td>
    </tr>
  </tbody>
</table>

## MoveTarget

Targets moves can be directed at during battle. Targets can be Pokémon, environments or even other moves.

<table className='full-width'>
  <thead className='left upc'>
    <tr>
      <th>Property</th>
      <th>Type</th>
      <th>Required</th>
      <th>Description</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>`id`</td>
      <td>`number`</td>
      <td>Yes</td>
      <td>The identifier for this resource.</td>
    </tr>
    <tr>
      <td>`name`</td>
      <td>`string`</td>
      <td>Yes</td>
      <td>The name for this resource.</td>
    </tr>
    <tr>
      <td>`names`</td>
      <td>[`Array<Name>`](../utils#name)</td>
      <td>Yes</td>
      <td>The name of this resource listed in different languages.</td>
    </tr>
    <tr>
      <td>`moves`</td>
      <td>[`Array<NamedAPIResource>`](../utils#namedapiresource)</td>
      <td>Yes</td>
      <td>A list of moves that that are directed at this target.</td>
    </tr>
    <tr>
      <td>`descriptions`</td>
      <td>[`Array<Description>`](../utils#description)</td>
      <td>Yes</td>
      <td>The description of this resource listed in different languages.</td>
    </tr>
  </tbody>
</table>