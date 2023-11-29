import type { Beer, modifyedBeer } from '../models/beer-model'

export const modifyBeersResponse = (response: Beer[]): modifyedBeer[] => {
  const result: modifyedBeer[] = []

  for (const value of response) {
    result.push({
      id: value.id,
      name: value.name,
      imageUrl: value.image_url,
      description: value.description,
      firstBrewed: value.first_brewed,
      brewersTips: value.brewers_tips,
      abv: value.abv,
      ibu: value.ibu,
      srm: value.srm,
      ph: value.ph
    })
  }

  return result
}
