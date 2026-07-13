export interface CountrySEO {
  slug: string;
  country: string;
  keyword: string;
  language: string;
  currency: string;
  heroTitle: string;
  heroSubtitle: string;
  channels: string[];
}

export const countries: CountrySEO[] = [
  {
    slug: "usa",
    country: "United States",
    keyword: "Best IPTV USA",
    language: "English",
    currency: "USD",
    heroTitle: "Best IPTV Subscription in the USA",
    heroSubtitle:
      "Watch over 35,000 live TV channels, movies and sports in stunning 4K quality.",
    channels: [
      "ESPN",
      "FOX Sports",
      "CNN",
      "ABC",
      "NBC",
      "HBO",
      "Disney Channel"
    ]
  },

  {
    slug: "canada",
    country: "Canada",
    keyword: "Best IPTV Canada",
    language: "English",
    currency: "CAD",
    heroTitle: "Best IPTV Subscription in Canada",
    heroSubtitle:
      "Enjoy premium IPTV with Canadian and international channels in Ultra HD.",
    channels: [
      "TSN",
      "Sportsnet",
      "CTV",
      "CBC",
      "Global TV",
      "Citytv"
    ]
  },

  {
    slug: "uk",
    country: "United Kingdom",
    keyword: "Best IPTV UK",
    language: "English",
    currency: "GBP",
    heroTitle: "Best IPTV Subscription in the UK",
    heroSubtitle:
      "Watch Premier League, Sky Sports, BT Sport and thousands of UK channels.",
    channels: [
      "Sky Sports",
      "BBC One",
      "ITV",
      "BT Sport",
      "Channel 4",
      "Sky Cinema"
    ]
  }
];