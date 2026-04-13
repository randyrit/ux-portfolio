// ============================================
//  CLOUD THEORY — DEALER MARKET DATA
//  Swap fetch() calls here to connect live API
// ============================================

const DealerData = {

  dealer: {
    name: "South Bay Ford",
    location: "Hawthorne, CA",
    address: "1414 Rosecrans Avenue",
    cityStateZip: "Hawthorne, CA 90250",
  },

  searchLocations: [
    { name: "SouthBay Ford", address: "1414 Rosecrans Avenue", city: "Hawthorne, CA 90250" },
    { name: "SouthBay Ford", address: "5100 Rosemead Avenue", city: "Gardena, CA 90249" },
  ],

  marketInsights: [
    { label: "Total Dealers",       value: "638",    color: "brand" },
    { label: "Same Brand Dealers",  value: "23",     color: "brand" },
    { label: "Brand Market Share",  value: "8%",     color: "brand" },
    { label: "Total Shoppers",      value: "41,083", color: "brand" },
  ],

  competitors: [
    { dealer: "South Bay Ford",          distance: "0 miles",    newInv: 809, usedInv: 87,  daysToMove: 1033, baseSupply: 174, turn: "7%",  marketShare: "36%" },
    { dealer: "South Bay Ford Lincoln",  distance: "1.2 miles",  newInv: 414, usedInv: 125, daysToMove: 881,  baseSupply: 141, turn: "10%", marketShare: "26%" },
    { dealer: "South Bay Lincoln",       distance: "1.8 miles",  newInv: 449, usedInv: 125, daysToMove: 442,  baseSupply: 91,  turn: "14%", marketShare: "17%" },
    { dealer: "Galpin Ford",             distance: "8.3 miles",  newInv: 1204, usedInv: 312, daysToMove: 926, baseSupply: 203, turn: "9%",  marketShare: "12%" },
    { dealer: "AutoNation Ford Torrance", distance: "4.1 miles", newInv: 587, usedInv: 198, daysToMove: 764,  baseSupply: 118, turn: "11%", marketShare: "8%" },
    { dealer: "Sunrise Ford",            distance: "11.4 miles", newInv: 342, usedInv: 156, daysToMove: 612,  baseSupply: 87,  turn: "13%", marketShare: "5%" },
    { dealer: "Worthington Ford",        distance: "14.7 miles", newInv: 278, usedInv: 94,  daysToMove: 548,  baseSupply: 72,  turn: "15%", marketShare: "4%" },
    { dealer: "Harbor Chevrolet",        distance: "6.2 miles",  newInv: 631, usedInv: 241, daysToMove: 703,  baseSupply: 134, turn: "12%", marketShare: "7%" },
    { dealer: "Carson Toyota",           distance: "3.8 miles",  newInv: 492, usedInv: 287, daysToMove: 589,  baseSupply: 109, turn: "14%", marketShare: "6%" },
    { dealer: "Longo Toyota",            distance: "12.7 miles", newInv: 1587, usedInv: 423, daysToMove: 1102, baseSupply: 247, turn: "8%", marketShare: "11%" },
  ],

};
