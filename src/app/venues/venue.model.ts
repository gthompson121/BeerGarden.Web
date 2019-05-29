export class Venue {
    _id: number;
    Name: string;
    Address: string;
    Neighbourhood: string;
    PhoneNumber: string;
    Website: string;
    ListOfOpenHours:
    [
        {
            Day:number;
            OpeningHours: string;
            ClosingHours: string;
        }
    ]
    Geo:{
        Lat: number,
        lon: number
    };
    isSelected: boolean;

    getDay(day: number)
    {
        switch(day)
        {
            case 0:{return "Monday"}
            case 1:{return "Tuesday"}
            case 2:{return "Wednesday"}
            case 3:{return "Thursday"}
            case 4:{return "Friday"}
            case 5:{return "Saturday"}
            case 6:{return "Sunday"}
            default: {return ""};
        }
    }
  }