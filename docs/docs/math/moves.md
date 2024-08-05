---
sidebar_position: 5
---

# Moves

A move, also known as an attack or technique, is the skill Pokémon primarily use in battle.

::::info
See more on [Bulbapedia](https://bulbapedia.bulbagarden.net/wiki/Move)
::::

## Methods
### getElectroBallBasePower()
Returns the Base Power (BP) for move [Electro Ball](https://bulbapedia.bulbagarden.net/wiki/Electro_Ball_(move)) according to the ratio of Pokémon user and target respective speeds.

#### Signature
```typescript
getElectroBallBasePower(userSpeed: number, targetSpeed: number) => number
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
      <td>`userSpeed`</td>
      <td>`number`</td>
      <td>Yes</td>
      <td>The user Pokémon's speed.</td>
    </tr>
    <tr>
      <td>`targetSpeed`</td>
      <td>`number`</td>
      <td>Yes</td>
      <td>The target Pokémon's speed.</td>
    </tr>
  </tbody>
</table>


#### Returns
A number with the move's base power.

#### Example

```typescript
getElectroBallBasePower(400, 00); // outputs
```


### getGyroBallBasePower()
Returns the Base Power (BP) for move [Gyro Ball](https://bulbapedia.bulbagarden.net/wiki/Gyro_Ball_(move)) according to the ratio of Pokémon user and target respective speeds.

#### Signature
```typescript
getGyroBallBasePower(userSpeed: number, targetSpeed: number) => number
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
      <td>`userSpeed`</td>
      <td>`number`</td>
      <td>Yes</td>
      <td>The user Pokémon's speed.</td>
    </tr>
    <tr>
      <td>`targetSpeed`</td>
      <td>`number`</td>
      <td>Yes</td>
      <td>The target Pokémon's speed.</td>
    </tr>
  </tbody>
</table>


#### Returns
A number with the move's base power.

#### Example

```typescript
getGyroBallBasePower(400, 00); // outputs
```


### getEruptionBasePower()
Returns the Base Power (BP) for [Eruption](https://bulbapedia.bulbagarden.net/wiki/Erouption_(move)) move according to the ratio of Pokémon current HP and maximum HP.

#### Signature
```typescript
getEruptionBasePower(currentHp: number, maxHp: number) => number
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
      <td>`currentHp`</td>
      <td>`number`</td>
      <td>Yes</td>
      <td>The user current HP.</td>
    </tr>
    <tr>
      <td>`maxHp`</td>
      <td>`number`</td>
      <td>Yes</td>
      <td>The user maximum HP.</td>
    </tr>
  </tbody>
</table>


#### Returns
A number with the move's Base Power.

#### Example

```typescript
getEruptionBasePower(150, 300); // outputs 75
```


### getWaterSpoutBasePower()
Returns the Base Power (BP) for [Water Spout](https://bulbapedia.bulbagarden.net/wiki/Water_Spout_(move)) move according to the ratio of Pokémon current HP and maximum HP.

#### Signature
```typescript
getWaterSpoutBasePower(currentHp: number, maxHp: number) => number
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
      <td>`currentHp`</td>
      <td>`number`</td>
      <td>Yes</td>
      <td>The user current HP.</td>
    </tr>
    <tr>
      <td>`maxHp`</td>
      <td>`number`</td>
      <td>Yes</td>
      <td>The user maximum HP.</td>
    </tr>
  </tbody>
</table>


#### Returns
A number with the move's Base Power.

#### Example

```typescript
getWaterSpoutBasePower(300, 300); // outputs 150
```


### getCrushGripBasePower()
Returns the Base Power (BP) for [Crush Grip](https://bulbapedia.bulbagarden.net/wiki/Crush_Grip_(move)) move according to the ratio of Pokémon current HP and maximum HP.

#### Signature
```typescript
getCrushGripBasePower(currentHp: number, maxHp: number) => number
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
      <td>`currentHp`</td>
      <td>`number`</td>
      <td>Yes</td>
      <td>The target current HP.</td>
    </tr>
    <tr>
      <td>`maxHp`</td>
      <td>`number`</td>
      <td>Yes</td>
      <td>The target maximum HP.</td>
    </tr>
  </tbody>
</table>


#### Returns
A number with the move's Base Power.

#### Example

```typescript
getCrushGripBasePower(300, 300); // outputs 120
```


### getWringOutBasePower()
Returns the Base Power (BP) for [Wring Out](https://bulbapedia.bulbagarden.net/wiki/Wring_Out_(move)) move according to the ratio of Pokémon current HP and maximum HP.

#### Signature
```typescript
getWringOutBasePower(currentHp: number, maxHp: number) => number
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
      <td>`currentHp`</td>
      <td>`number`</td>
      <td>Yes</td>
      <td>The target current HP.</td>
    </tr>
    <tr>
      <td>`maxHp`</td>
      <td>`number`</td>
      <td>Yes</td>
      <td>The target maximum HP.</td>
    </tr>
  </tbody>
</table>


#### Returns
A number with the move's Base Power.

#### Example

```typescript
getWringOutBasePower(150, 300); // outputs 60
```

### getHardPressBasePower()
Returns the Base Power (BP) for [Hard Press](https://bulbapedia.bulbagarden.net/wiki/Hard_Press_(move)) move according to the ratio of Pokémon current HP and maximum HP.

#### Signature
```typescript
getHardPressBasePower(currentHp: number, maxHp: number) => number
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
      <td>`currentHp`</td>
      <td>`number`</td>
      <td>Yes</td>
      <td>The target current HP.</td>
    </tr>
    <tr>
      <td>`maxHp`</td>
      <td>`number`</td>
      <td>Yes</td>
      <td>The target maximum HP.</td>
    </tr>
  </tbody>
</table>


#### Returns
A number with the move's Base Power.

#### Example

```typescript
getHardPressBasePower(300, 300); // outputs 100
```

### getReversalBasePower()
Returns the Base Power (BP) for [Reversal](https://bulbapedia.bulbagarden.net/wiki/Reversal_(move)) move according to the ratio of Pokémon current HP and maximum HP.

#### Signature
```typescript
getReversalBasePower(currentHp: number, maxHp: number) => number
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
      <td>`currentHp`</td>
      <td>`number`</td>
      <td>Yes</td>
      <td>The user current HP.</td>
    </tr>
    <tr>
      <td>`maxHp`</td>
      <td>`number`</td>
      <td>Yes</td>
      <td>The user maximum HP.</td>
    </tr>
  </tbody>
</table>


#### Returns
A number with the move's Base Power.

#### Example

```typescript
getReversalBasePower(241, 241); // outputs 20
getReversalBasePower(1, 241); // outputs 200
```


### getFlailBasePower()
Returns the Base Power (BP) for [Flail](https://bulbapedia.bulbagarden.net/wiki/Flail_(move)) move according to the ratio of Pokémon current HP and maximum HP.

#### Signature
```typescript
getFlailBasePower(currentHp: number, maxHp: number) => number
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
      <td>`currentHp`</td>
      <td>`number`</td>
      <td>Yes</td>
      <td>The user current HP.</td>
    </tr>
    <tr>
      <td>`maxHp`</td>
      <td>`number`</td>
      <td>Yes</td>
      <td>The user maximum HP.</td>
    </tr>
  </tbody>
</table>


#### Returns
A number with the move's Base Power.

#### Example

```typescript
getFlailBasePower(180, 180); // outputs 20
getFlailBasePower(1, 180); // outputs 200
```

### getBrineBasePower()
Returns the Base Power (BP) for [Brine](https://bulbapedia.bulbagarden.net/wiki/Brine_(move)) move according to the ratio of Pokémon current HP and maximum HP.

#### Signature
```typescript
getBrineBasePower(currentHp: number, maxHp: number) => number
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
      <td>`currentHp`</td>
      <td>`number`</td>
      <td>Yes</td>
      <td>The target current HP.</td>
    </tr>
    <tr>
      <td>`maxHp`</td>
      <td>`number`</td>
      <td>Yes</td>
      <td>The target maximum HP.</td>
    </tr>
  </tbody>
</table>


#### Returns
A number with the move's Base Power.

#### Example

```typescript
getBrineBasePower(180, 180); // outputs 65
getBrineBasePower(89, 180); // outputs 130
```


### getHeavySlamBasePower()
Returns the Base Power (BP) for [Heavy Slam](https://bulbapedia.bulbagarden.net/wiki/Heavy_Slam_(move)) move according to the according the weight ratio between user and target Pokémons.

#### Signature
```typescript
getHeavySlamBasePower(params: MoveBasePowerByRelativeWeightParams) => number
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
      <td>[`MoveBasePowerByRelativeWeightParams`](#movebasepowerbyrelativeweightparams)</td>
      <td>Yes</td>
      <td>The general parameters used for get move Base Power according weight ratio.</td>
    </tr>
    <tr>
      <td>`params.user`</td>
      <td>`number`</td>
      <td>Yes</td>
      <td>The user Pokémon's weight.</td>
    </tr>
    <tr>
      <td>`params.target`</td>
      <td>`number`</td>
      <td>Yes</td>
      <td>The target Pokémon's weight.</td>
    </tr>
    <tr>
      <td>`params.minimize`</td>
      <td>`boolean`</td>
      <td>No</td>
      <td>If the target Pokémon has used the move [Minimize](https://bulbapedia.bulbagarden.net/wiki/Minimize_(move)).</td>
    </tr>
  </tbody>
</table>


#### Returns
A number with the move's Base Power.

#### Example

```typescript
getHeavySlamBasePower({
  user: 300,
  target: 100,
  minimize: true,
});
```

### getHeatCrashBasePower()
Returns the Base Power (BP) for [Heat Crash](https://bulbapedia.bulbagarden.net/wiki/Heat_Crash_(move)) move according to the according the weight ratio between user and target Pokémons.

#### Signature
```typescript
getHeatCrashBasePower(params: MoveBasePowerByRelativeWeightParams) => number
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
      <td>[`MoveBasePowerByRelativeWeightParams`](#movebasepowerbyrelativeweightparams)</td>
      <td>Yes</td>
      <td>The general parameters used for get move Base Power according weight ratio.</td>
    </tr>
    <tr>
      <td>`params.user`</td>
      <td>`number`</td>
      <td>Yes</td>
      <td>The user Pokémon's weight.</td>
    </tr>
    <tr>
      <td>`params.target`</td>
      <td>`number`</td>
      <td>Yes</td>
      <td>The target Pokémon's weight.</td>
    </tr>
    <tr>
      <td>`params.minimize`</td>
      <td>`boolean`</td>
      <td>No</td>
      <td>If the target Pokémon has used the move [Minimize](https://bulbapedia.bulbagarden.net/wiki/Minimize_(move)).</td>
    </tr>
  </tbody>
</table>


#### Returns
A number with the move's Base Power.

#### Example

```typescript
getHeatCrashBasePower({
  user: 300,
  target: 100,
  minimize: true,
});
```

### getGrassKnotBasePower()
Returns the Base Power (BP) for [Grass Knot](https://bulbapedia.bulbagarden.net/wiki/Grass_Knot_(move)) move according the target Pokémon weight.

#### Signature
```typescript
getGrassKnotBasePower(targetWeight: number) => number
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
      <td>`targetWeight`</td>
      <td>`number`</td>
      <td>Yes</td>
      <td>The target Pokémon's weight (in kg).</td>
    </tr>
  </tbody>
</table>


#### Returns
A number with the move's Base Power.

#### Example

```typescript
getGrassKnotBasePower(200); // outputs 120
```

### getLowKickBasePower()
Returns the Base Power (BP) for [Low Kick](https://bulbapedia.bulbagarden.net/wiki/Low_Kick_(move)) move according the target Pokémon weight.

#### Signature
```typescript
getLowKickBasePower(targetWeight: number) => number
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
      <td>`targetWeight`</td>
      <td>`number`</td>
      <td>Yes</td>
      <td>The target Pokémon's weight (in kg).</td>
    </tr>
  </tbody>
</table>


#### Returns
A number with the move's Base Power.

#### Example

```typescript
getLowKickBasePower(20); // outputs 40
```

## Type Definitions

### MoveBasePowerByRelativeWeightParams
An interface to determine some moves Base Power relative to user and target Pokémon's weight.

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
      <td>`user`</td>
      <td> Yes </td>
      <td>`number`</td>
    </tr>
    <tr>
      <td>`target`</td>
      <td> Yes </td>
      <td>`number`</td>
    </tr>
    <tr>
      <td>`minimize`</td>
      <td> No </td>
      <td>`boolean`</td>
    </tr>
  </tbody>
</table>
