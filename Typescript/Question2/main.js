var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var FbProfileAbout = /** @class */ (function () {
    function FbProfileAbout(fbId, name, profileImage, coverImage, noOfFriends) {
        this.fbId = fbId;
        this.name = name;
        this.profileImage = profileImage;
        this.coverImage = coverImage;
        this.noOfFriends = noOfFriends;
    }
    return FbProfileAbout;
}());
var Overview = /** @class */ (function (_super) {
    __extends(Overview, _super);
    function Overview(fbId, name, mobileNumber, birthdayDate, birthdayMonth, bithdayYear) {
        var _this = _super.call(this, fbId, name) || this;
        _this.fbId = fbId;
        _this.name = name;
        _this.mobileNumber = mobileNumber;
        _this.birthdayDate = birthdayDate;
        _this.birthdayMonth = birthdayMonth;
        _this.bithdayYear = bithdayYear;
        _this.getAge = function () {
            var date = new Date();
            var age = date.getFullYear() - _this.bithdayYear;
            return age;
        };
        return _this;
    }
    return Overview;
}(FbProfileAbout));
var WorkAndEducation = /** @class */ (function (_super) {
    __extends(WorkAndEducation, _super);
    function WorkAndEducation(fbId, name, work, skills, university) {
        var _this = _super.call(this, fbId, name) || this;
        _this.fbId = fbId;
        _this.name = name;
        _this.work = work;
        _this.skills = skills;
        _this.university = university;
        return _this;
    }
    return WorkAndEducation;
}(FbProfileAbout));
var PlacesLived = /** @class */ (function (_super) {
    __extends(PlacesLived, _super);
    function PlacesLived(fbId, name, currentCity, placeslived) {
        var _this = _super.call(this, fbId, name) || this;
        _this.fbId = fbId;
        _this.name = name;
        _this.currentCity = currentCity;
        _this.placeslived = placeslived;
        _this.getCurrentPlace = function () { return _this.currentCity; };
        _this.getPlacesVisited = function () { return _this.placeslived; };
        return _this;
    }
    return PlacesLived;
}(FbProfileAbout));
var Family = /** @class */ (function (_super) {
    __extends(Family, _super);
    function Family(fbId, name, relationship, familyMembers) {
        var _this = _super.call(this, fbId, name) || this;
        _this.fbId = fbId;
        _this.name = name;
        _this.relationship = relationship;
        _this.familyMembers = familyMembers;
        _this.getRelationship = function () { return _this.relationship; };
        _this.getFamily = function () { return _this.familyMembers; };
        return _this;
    }
    return Family;
}(FbProfileAbout));
var LifeEvents = /** @class */ (function (_super) {
    __extends(LifeEvents, _super);
    function LifeEvents(fbId, name, events) {
        var _this = _super.call(this, fbId, name) || this;
        _this.fbId = fbId;
        _this.name = name;
        _this.events = events;
        _this.getEvents = function () { return _this.events; };
        return _this;
    }
    return LifeEvents;
}(FbProfileAbout));
var fb = new Overview("wf", "vivek", 45, 31, 12, 1996);
console.log(fb.getAge());
var plac = new PlacesLived("bfvbuuv", "vivek", "ericec", ["rhvuh", "uhuuhu"]);
console.log(plac.getPlacesVisited());
