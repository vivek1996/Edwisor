class FbProfileAbout {
  constructor(
    public fbId: string,
    public name: string,
    public profileImage?: string,
    public coverImage?: string,
    public noOfFriends?: number
  ) {}
}
class Overview extends FbProfileAbout {
  constructor(
    public fbId: string,
    public name: string,
    private mobileNumber: number,
    private birthdayDate: number,
    private birthdayMonth: number,
    private bithdayYear: number
  ) {
    super(fbId, name);
  }
  getAge = () => {
    let date = new Date();
    let age = date.getFullYear() - this.bithdayYear;
    return age;
  };
}
class WorkAndEducation extends FbProfileAbout {
  constructor(
    public fbId: string,
    public name: string,
    public work: string,
    public skills: string,
    public university: string
  ) {
    super(fbId, name);
  }
}
class PlacesLived extends FbProfileAbout {
  constructor(
    public fbId: string,
    public name: string,
    public currentCity: string,
    public placeslived: string[]
  ) {
    super(fbId, name);
  }
  getCurrentPlace = () => this.currentCity;
  getPlacesVisited = () => this.placeslived;
}
class Family extends FbProfileAbout {
  constructor(
    public fbId: string,
    public name: string,
    public relationship: string,
    public familyMembers: string[]
  ) {
    super(fbId, name);
  }
  getRelationship = () => this.relationship;
  getFamily = () => this.familyMembers;
}
class LifeEvents extends FbProfileAbout {
  constructor(
    public fbId: string,
    public name: string,
    public events: string[]
  ) {
    super(fbId, name);
  }
  getEvents = () => this.events;
}
let fb = new Overview("wf", "vivek", 45, 31, 12, 1996);
console.log(fb.getAge());
let plac = new PlacesLived("bfvbuuv", "vivek", "ericec", ["rhvuh", "uhuuhu"]);
console.log(plac.getPlacesVisited());
