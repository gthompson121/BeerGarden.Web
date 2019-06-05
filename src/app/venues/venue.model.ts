export class Venue {
    _id: number;
    Name: string;
    Address: string;
    Neighbourhood: string;
    PhoneNumber: string;
    Website: string;
    ListOfOpenHours:Hours[];
    Geo:{
        Lat: number,
        lon: number
    };
    isSelected: boolean;
    distance: number;
  }

  export class Hours{
    Day:number;
    OpeningHours: string;
    ClosingHours: string;
  }