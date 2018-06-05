var Youtube = /** @class */ (function () {
    function Youtube(videoTitle, views, likes, disLikes, channelName, publishedOn, subscriberCount, videoDescription, category, isUserLoggedIn, autoPlay) {
        var _this = this;
        this.videoTitle = videoTitle;
        this.views = views;
        this.likes = likes;
        this.disLikes = disLikes;
        this.channelName = channelName;
        this.publishedOn = publishedOn;
        this.subscriberCount = subscriberCount;
        this.videoDescription = videoDescription;
        this.category = category;
        this.isUserLoggedIn = isUserLoggedIn;
        this.autoPlay = autoPlay;
        this.getVideoTitle = function () { return _this.videoTitle; };
        this.getViews = function () { return _this.views; };
        this.getLikes = function () { return _this.likes; };
        this.getDislikes = function () { return _this.disLikes; };
        this.getChannelName = function () { return _this.channelName; };
        this.getPublishedOn = function () { return _this.publishedOn; };
        this.getSubscriberscount = function () { return _this.subscriberCount; };
        this.getVideoDescription = function () { return _this.videoDescription; };
        this.getIsUserLoggedIn = function () { return _this.isUserLoggedIn; };
        this.getAutoPlay = function () { return _this.autoPlay; };
        this.getRelatedVideos = function (category) {
            var relatedVideos = "Returned " + _this.category + " Videos successfully";
            return relatedVideos;
        };
    }
    return Youtube;
}());
var trailer = new Youtube("Trailer", 435321, 5647, 74, "Sony South", "3 June 2018", 574899, "The sequel to the mighty 2003 blockbuster! ", "Music", true, false);
console.log(trailer);
console.log(trailer.getRelatedVideos());
