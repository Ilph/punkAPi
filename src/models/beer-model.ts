export type Beer = {
  id: number
  name: string
  tagline: string
  first_brewed: string
  description: string
  image_url: string
  abv: number
  ibu: number
  target_fg: number
  target_og: number
  ebc: number
  srm: number
  ph: number
  attention_level: number
  volume: ValueUnit
  boil_volume: ValueUnit
  method: Method
  ingredients: Ingredients
  food_pairing: string[]
  brewers_tips: string
  contributed_by: string
}

type ValueUnit = {
  value: number
  unit: string
}

type Method = {
  mash_temp: MashTempItem[]
  twist: null
}

type MashTempItem = {
  temp: ValueUnit
  duration: number
}

type Ingredients = {
  malt: Malt[]
  hops: Hops[]
  yeast: string
}

type Malt = {
  name: string
  aamount: ValueUnit
}

type Hops = {
  name: string
  amount: ValueUnit
  add: string
  attribute: string
}
