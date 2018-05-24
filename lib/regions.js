const SearchableCollection = require('./searchableCollection')

const schema = {
  nom: {
    type: 'text',
    queryWith: 'nom',
    ref: 'code'
  },
  code: {type: 'token', queryWith: 'code'}
}

function getIndexedDb(options = {}) {
  /* Source dataset */
  const regions = options.regions || require(options.regionsDbPath || '../data/regions.json')

  const searchableCollection = new SearchableCollection(schema)
  searchableCollection.load(regions)

  return searchableCollection
}

module.exports = {getIndexedDb}
