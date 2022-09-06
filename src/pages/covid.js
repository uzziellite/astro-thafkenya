export async function get({ params }) {
  const covidData = await fetch("https://covid19.who.int/page-data/region/afro/country/ke/page-data.json")

  const covidDataParsed = await covidData.json()

  const resp = covidDataParsed.result.data.countryPageData.today

  return new Response(JSON.stringify(resp), {
    status: 200
  })
}
