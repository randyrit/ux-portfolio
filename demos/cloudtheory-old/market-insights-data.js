// ============================================
//  CLOUD THEORY — MARKET INSIGHTS DATA
//  Simulated market data for South Bay area
// ============================================

const MarketData = {

  region: "South Bay, CA",
  radius: "25 miles",
  period: "Last 90 Days",

  summary: [
    { label: "Total Vehicles Sold",  value: "12,847" },
    { label: "Avg Days on Lot",      value: "28" },
    { label: "Avg Selling Price",    value: "$41,230" },
    { label: "Market Growth (QoQ)",  value: "+6.2%" },
  ],

  topVehicles: [
    { model: "Ford F-150",           units: 1842 },
    { model: "Toyota RAV4",          units: 1536 },
    { model: "Chevrolet Silverado",  units: 1389 },
    { model: "Tesla Model Y",       units: 1204 },
    { model: "Honda CR-V",          units: 1087 },
    { model: "Toyota Camry",        units: 952 },
    { model: "Ford Explorer",       units: 891 },
    { model: "Jeep Grand Cherokee", units: 834 },
    { model: "Honda Civic",         units: 798 },
    { model: "Ford Bronco",         units: 721 },
  ],

  topDealerships: [
    { name: "South Bay Ford",           units: 1247, distance: "0 mi" },
    { name: "Galpin Ford",              units: 1089, distance: "8.3 mi" },
    { name: "AutoNation Toyota",        units: 984,  distance: "4.1 mi" },
    { name: "Longo Toyota",             units: 931,  distance: "12.7 mi" },
    { name: "Keyes Chevrolet",          units: 876,  distance: "9.5 mi" },
  ],

  segmentBreakdown: [
    { segment: "Trucks",     share: 31 },
    { segment: "SUVs",       share: 28 },
    { segment: "Sedans",     share: 19 },
    { segment: "EVs",        share: 12 },
    { segment: "Crossovers", share: 7 },
    { segment: "Vans",       share: 3 },
  ],

  priceDistribution: [
    { range: "Under $25K",   pct: 14 },
    { range: "$25K–$35K",    pct: 27 },
    { range: "$35K–$45K",    pct: 31 },
    { range: "$45K–$60K",    pct: 19 },
    { range: "Over $60K",    pct: 9 },
  ],

};
