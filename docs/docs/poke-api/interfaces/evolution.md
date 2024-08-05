---
sidebar_position: 3
---

# Evolutions

## EvolutionChain

Methods by which the player might can encounter Pokémon in the wild, e.g., walking in tall grass. Check out [Bulbapedia](http://bulbapedia.bulbagarden.net/) for greater detail.

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
      <td>The identifier for this resource</td>
    </tr>
    <tr>
      <td>`chain`</td>
      <td>[`ChainLink`](#chainlink)</td>
      <td>Yes</td>
      <td>The base chain link object. Each link contains evolution details for a Pokémon in the chain. Each link references the next Pokémon in the natural evolution order</td>
    </tr>
    <tr>
      <td>`baby_trigger_item`</td>
      <td>[`NamedAPIResource`](../utils/#namedapiresource)</td>
      <td>Yes</td>
      <td>The item that a Pokémon would be holding when mating that would trigger the egg hatching a baby Pokémon rather than a basic Pokémon</td>
    </tr>
  </tbody>
</table>

### ChainLink

Conditions which affect what pokemon might appear in the wild, e.g., day or night.

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
      <td>`is_baby`</td>
      <td>`number`</td>
      <td>Yes</td>
      <td>Whether or not this link is for a baby Pokémon. This would only ever be true on the base link</td>
    </tr>
    <tr>
      <td>`species`</td>
      <td>[`NamedAPIResource`](../utils/#namedapiresource)</td>
      <td>Yes</td>
      <td>The Pokémon species at this point in the evolution chain</td>
    </tr>
    <tr>
      <td>`evolution_details`</td>
      <td>[`Array<EvolutionDetail>`](#evolutiondetail)</td>
      <td>Yes</td>
      <td>All details regarding the specific details of the referenced Pokémon species evolution</td>
    </tr>
    <tr>
      <td>`evolves_to`</td>
      <td>[`Array<ChainLink>`](#chainlink)</td>
      <td>Yes</td>
      <td>A List of chain objects</td>
    </tr>
  </tbody>
</table>

### EvolutionDetail

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
      <td>`item`</td>
      <td>[`NamedAPIResource`](../utils/#namedapiresource)</td>
      <td>Yes</td>
      <td>The item required to cause evolution this into Pokémon species</td>
    </tr>
    <tr>
      <td>`trigger`</td>
      <td>[`NamedAPIResource`](../utils/#namedapiresource)</td>
      <td>Yes</td>
      <td>The type of event that triggers evolution into this Pokémon species.</td>
    </tr>
    <tr>
      <td>`gender`</td>
      <td>[`GenderId`](../utils/#genderid)</td>
      <td>Yes</td>
      <td>The id of the gender of the evolving Pokémon species must be in order to evolve into this Pokémon species</td>
    </tr>
    <tr>
      <td>`held_item`</td>
      <td>[`NamedAPIResource`](../utils/#namedapiresource)</td>
      <td>Yes</td>
      <td>The item the evolving Pokémon species must be holding during the evolution trigger event to evolve into this Pokémon species</td>
    </tr>
    <tr>
      <td>`known_move`</td>
      <td>[`NamedAPIResource`](../utils/#namedapiresource)</td>
      <td>Yes</td>
      <td>The move that must be known by the evolving Pokémon species during the evolution trigger event in order to evolve into this Pokémon species</td>
    </tr>
    <tr>
      <td>`known_move_type`</td>
      <td>[`NamedAPIResource`](../utils/#namedapiresource)</td>
      <td>Yes</td>
      <td>The evolving Pokémon species must know a move with this type during the evolution trigger event in order to evolve into this Pokémon species</td>
    </tr>
    <tr>
      <td>`location`</td>
      <td>[`NamedAPIResource`](../utils/#namedapiresource)</td>
      <td>Yes</td>
      <td>The location the evolution must be triggered at</td>
    </tr>
    <tr>
      <td>`min_level`</td>
      <td>`number`</td>
      <td>Yes</td>
      <td>The minimum required level of the evolving Pokémon species to evolve into this Pokémon species</td>
    </tr>
    <tr>
      <td>`min_happiness`</td>
      <td>`number`</td>
      <td>Yes</td>
      <td>The minimum required level of happiness the evolving Pokémon species to evolve into this Pokémon species</td>
    </tr>
    <tr>
      <td>`min_beauty`</td>
      <td>`number`</td>
      <td>Yes</td>
      <td>The minimum required level of beauty the evolving Pokémon species to evolve into this Pokémon species</td>
    </tr>
    <tr>
      <td>`min_affection`</td>
      <td>`number`</td>
      <td>Yes</td>
      <td>The minimum required level of affection the evolving Pokémon species to evolve into this Pokémon species</td>
    </tr>
    <tr>
      <td>`needs_overworld_rain`</td>
      <td>`number`</td>
      <td>Yes</td>
      <td>Whether or not it must be raining in the overworld to cause evolution this Pokémon species</td>
    </tr>
    <tr>
      <td>`party_species`</td>
      <td>[`NamedAPIResource`](../utils/#namedapiresource)</td>
      <td>Yes</td>
      <td>The Pokémon species that must be in the players party in order for the evolving Pokémon species to evolve into this Pokémon species</td>
    </tr>
    <tr>
      <td>`party_type`</td>
      <td>[`NamedAPIResource`](../utils/#namedapiresource)</td>
      <td>Yes</td>
      <td>The player must have a Pokémon of this type in their party during the evolution trigger event in order for the evolving Pokémon species to evolve into this Pokémon species</td>
    </tr>
    <tr>
      <td>`relative_physical_stats`</td>
      <td>[`RelativePhysicalStatEvolution`](../utils/#relativephysicalstatevolution)</td>
      <td>Yes</td>
      <td>The required relation between the Pokémon's Attack and Defense stats. 1 means Attack > Defense. 0 means Attack = Defense. -1 means Attack < Defense</td>
    </tr>
    <tr>
      <td>`time_of_day`</td>
      <td>[`TimeOfDay`](../utils/#timeofday)</td>
      <td>Yes</td>
      <td>The required time of day. Day or night</td>
    </tr>
    <tr>
      <td>`trade_species`</td>
      <td>[`NamedAPIResource`](../utils/#namedapiresource)</td>
      <td>Yes</td>
      <td>Pokémon species for which this one must be traded</td>
    </tr>
    <tr>
      <td>`turn_upside_down`</td>
      <td>`boolean`</td>
      <td>Yes</td>
      <td>Whether or not the 3DS needs to be turned upside-down as this Pokémon levels up</td>
    </tr>


    <tr>
      <td>`evolution_details`</td>
      <td>[`Array<EvolutionDetail>`](#evolutiondetail)</td>
      <td>Yes</td>
      <td>All details regarding the specific details of the referenced Pokémon species evolution</td>
    </tr>
    <tr>
      <td>`evolves_to`</td>
      <td>[`Array<ChainLink>`](#chainlink)</td>
      <td>Yes</td>
      <td>A List of chain objects</td>
    </tr>
  </tbody>
</table>


## EvolutionTrigger

Evolution triggers are the events and conditions that cause a Pokémon to evolve. Check out [Bulbapedia](http://bulbapedia.bulbagarden.net/) for greater detail.

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
      <td>The identifier for this resource</td>
    </tr>
    <tr>
      <td>`name`</td>
      <td>`string`</td>
      <td>Yes</td>
      <td>The name for this resource</td>
    </tr>
    <tr>
      <td>`names`</td>
      <td>[`Array<Name>`](../utils/#name)</td>
      <td>Yes</td>
      <td>The name of this resource listed in different languages</td>
    </tr>
    <tr>
      <td>`pokemon_species`</td>
      <td>[`Array<NamedAPIResource>`](../utils/#namedapiresource)</td>
      <td>Yes</td>
      <td>A list of pokemon species that result from this evolution trigger</td>
    </tr>
  </tbody>
</table>