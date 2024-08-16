---
sidebar_position: 1
---

# Catch Combo

Capture Combos are a unique feature in [Pokémon: Let's Go, Pikachu! and Let's Go, Eevee!](https://bulbapedia.bulbagarden.net/wiki/Pok%C3%A9mon:_Let%27s_Go,_Pikachu!_and_Let%27s_Go,_Eevee!). As you capture more of the same species of Pokémon in a row, you will increase your Catch Combo. On the surface, this doesn't provide any special benefit, but there are some big benefits from getting long combos.

::::info
For more info about Catch Combo mechanics, visit [Serebii.net](https://www.serebii.net/letsgopikachueevee/catchcombo.shtml).
::::

## Methods
### getCatchComboBonusLGP()
Returns all the Catch Combo bonuses active for given Pokémon combo.

#### Signature
```typescript
async getCatchComboBonusLGP(params: GetCatchComboBonusLGPParams) => CatchComboBonus
```

<table class="full-width">
  <thead class="upc">
    <tr>
      <th width="15%">Parameter</th>
      <th width="15%">Type</th>
      <th width="15%">Required</th>
      <th>Description</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>`params`</td>
      <td>[`GetCatchComboBonusLGPParams`](#getcatchcombobonuslgpparams)</td>
      <td>Yes</td>
      <td>
      The general parameters used for get the Catch Combo bonus values.
      </td>
    </tr>
    <tr>
      <td>`params.combo`</td>
      <td>`number`</td>
      <td>Yes</td>
      <td>
      The number of captured Pokémon in a row of same specie.
      </td>
    </tr>
    <tr>
      <td>`params.lure`</td>
      <td>`boolean`</td>
      <td>No</td>
      <td>
      True if a Lure item is active.
      </td>
    </tr>
    <tr>
      <td>`params.shinyCharm`</td>
      <td>`boolean`</td>
      <td>No</td>
      <td>
      True if player has the Shiny Charm key item.
      </td>
    </tr>
  </tbody>
</table>


#### Returns
A [`CatchComboBonus`](#catchcombobonus) object with all bonuses.

#### Example

```typescript
const bonus = getCatchComboBonusLGP({
  number: 31,
  lure: false,
  shinyCharm: true,
});

console.log(bonus.sameSpecieChance) // outputs 0.5
console.log(bonus.guaranteedMaxIVs) // outputs 4
console.log(bonus.shinyRate.fullOdds) // outputs 0.00292997363
console.log(bonus.shinyRate.shinyCharmWithLure) // 0.00366206467
console.log(bonus.rareSpawnChance) // outputs 0.5
```

### getCatchComboRangesLGP()
Returns all the ranges for a specific type of reward regarding Catch Combo Bonus in Pokémon: Let's Go Pikachu & Lets'Go Eevee.

#### Signature
```typescript
async getCatchComboRangesLGP(reward: CatchComboReward) => CatchComboRange[]
```

<table class="full-width">
  <thead class="upc">
    <tr>
      <th width="15%">Parameter</th>
      <th width="15%">Type</th>
      <th width="15%">Required</th>
      <th>Description</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>`reward`</td>
      <td>[`CatchComboReward`](#catchcomboreward)</td>
      <td>Yes</td>
      <td>The type of reward for Catch Combo Bonus</td>
    </tr>
  </tbody>
</table>


#### Returns
An array with min, max and the reward value for each [`CatchComboRange`](#catchcomborange).

#### Example

```typescript
const rewards = getCatchComboRangesLGP('shiny');
console.log(rewards[0]) // outputs { min: 0, max: 10, value: 1 / 4096 }
console.log(rewards[3]) // outputs { min: 31, max: undefined, value: 1 / 341.3 }
```


## Type Definitions

### GetCatchComboBonusLGPParams

An interface to determine all the Catch Combo rewards available with [`getCatchComboBonusLGP()`](#getcatchcombobonuslgp).

<table className='full-width'>
  <thead className='left upc'>
    <tr>
      <th>Type</th>
    </tr>
    </thead>
    <tbody>
      <tr>
        <td>Interface</td>
      </tr>
  </tbody>
</table>

#### Properties
<table className='full-width'>
  <thead className='left upc'>
    <tr>
      <th>Name</th>
      <th>Required</th>
      <th>Type</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>`combo`</td>
      <td> Yes </td>
      <td>`number`</td>
    </tr>
    <tr>
      <td>`lure`</td>
      <td> No </td>
      <td>`boolean`</td>
    </tr>
    <tr>
      <td>`shinyCharm`</td>
      <td> No </td>
      <td>`boolean`</td>
    </tr>
  </tbody>
</table>

### CatchComboBonus

An interface with detailed active bonuses for each type of reward regarding its Catch combo.

<table className='full-width'>
  <thead className='left upc'>
    <tr>
      <th>Type</th>
    </tr>
    </thead>
    <tbody>
      <tr>
        <td>Interface</td>
      </tr>
  </tbody>
</table>

#### Properties
<table className='full-width'>
  <thead className='left upc'>
    <tr>
      <th>Name</th>
      <th>Required</th>
      <th>Type</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>`sameSpecieChance`</td>
      <td> Yes </td>
      <td>`number`</td>
    </tr>
    <tr>
      <td>`guaranteedMaxIVs`</td>
      <td> Yes </td>
      <td>`number`</td>
    </tr>
    <tr>
      <td>`shinyOdds`</td>
      <td> Yes </td>
      <td>`number`</td>
    </tr>
    <tr>
      <td>`rareSpawnChance`</td>
      <td> Yes </td>
      <td>`number`</td>
    </tr>
    <tr>
      <td>`shinyRate.fullOdds`</td>
      <td> Yes </td>
      <td>`number`</td>
    </tr>
    <tr>
      <td>`shinyRate.lureOnly`</td>
      <td> Yes </td>
      <td>`number`</td>
    </tr>
    <tr>
      <td>`shinyRate.shinyCharm`</td>
      <td> Yes </td>
      <td>`number`</td>
    </tr>
    <tr>
      <td>`shinyRate.shinyCharmWithLure`</td>
      <td> Yes </td>
      <td>`number`</td>
    </tr>
  </tbody>
</table>

### CatchComboRange

An interface with ranges with the actual value for a specific type of reward regarding Catch Combo Bonus.

<table className='full-width'>
  <thead className='left upc'>
    <tr>
      <th>Type</th>
    </tr>
    </thead>
    <tbody>
      <tr>
        <td>Interface</td>
      </tr>
  </tbody>
</table>

#### Properties
<table className='full-width'>
  <thead className='left upc'>
    <tr>
      <th>Name</th>
      <th>Required</th>
      <th>Type</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>`min`</td>
      <td> Yes </td>
      <td>`number`</td>
    </tr>
    <tr>
      <td>`max`</td>
      <td> Yes </td>
      <td>`number` or `undefined`</td>
    </tr>
    <tr>
      <td>`value`</td>
      <td> Yes </td>
      <td>`number`</td>
    </tr>
  </tbody>
</table>

### CatchComboReward

A string value representing the type of reward from catch combo.

<table className='full-width'>
  <thead className='left upc'>
    <tr>
      <th>Type</th>
    </tr>
    </thead>
    <tbody>
      <tr>
        <td>enum(`'same-species'`, `'max-iv'`, `'shiny'`, `'shiny-lure'`, `'shiny-charm'`, `'shiny-max'`, `'rare-spawn'`)</td>
      </tr>
  </tbody>
</table>