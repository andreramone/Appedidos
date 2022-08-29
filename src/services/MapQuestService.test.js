import MapQuestService from './MapQuestService.js'

describe('MapQuestService', () => {

    test('gets the test endpoint', async () => {
      const latitude = -9.56918;
      const longitude = -36.76422;
      const result = await MapQuestService.handle(latitude, longitude)

      expect(result).toEqual({"adminArea1": "BR", "adminArea1Type": "Country", "adminArea3": "Alagoas", "adminArea3Type": "State", "adminArea4": "", "adminArea4Type": "County", "adminArea5": "Craíbas", "adminArea5Type": "City", "adminArea6": "", "adminArea6Type": "Neighborhood", "displayLatLng": {"lat": -9.56918, "lng": -36.76422}, "dragPoint": false, "geocodeQuality": "CITY", "geocodeQualityCode": "A5XAX", "latLng": {"lat": -9.56918, "lng": -36.76422}, "linkId": "0", "mapUrl": "http://www.mapquestapi.com/staticmap/v5/map?key=213ACP8Y3sHaLdqUxUHCsUCi9G3mWs1J&type=map&size=225,160&locations=-9.56918,-36.76422|marker-sm-50318A-1&scalebar=true&zoom=12&rand=631304177", "postalCode": "", "sideOfStreet": "N", "street": "", "type": "s", "unknownInput": ""})
      })

    })