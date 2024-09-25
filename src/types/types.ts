interface carouselImageType {
  key: number;
  url: string;
}

interface videoType {
  key: number;
  url: string;
  type: string;
}

interface introType {
  title: string;
  description: string;
}

interface productType {
  id: number;
  title: string;
  image: string;
  description: string;
  details: string[];
}

interface newsType {
  id: number;
  image: string;
  title: string;
  description: string;
}

interface subLinkType {
  name: string;
  path: string;
  icon: any;
}

interface linkType {
  name: string;
  subLink?: subLinkType[];
}

interface benefitType {
  icon: any;
  title: string;
  description: string;
}

interface locationType {
  no: number;
  name: string;
  address: string;
  phone: string;
}
