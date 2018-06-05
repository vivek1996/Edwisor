class Youtube {
  constructor(
    public videoTitle: string,
    public views: number,
    public likes: number,
    public disLikes: number,
    public channelName: string,
    public publishedOn: string,
    public subscriberCount: number,
    public videoDescription: string,
    public category: string,
    private isUserLoggedIn?: boolean,
    public autoPlay?: boolean
  ) {}
  getVideoTitle = () => this.videoTitle;
  getViews = () => this.views;
  getLikes = () => this.likes;
  getDislikes = () => this.disLikes;
  getChannelName = () => this.channelName;
  getPublishedOn = () => this.publishedOn;
  getSubscriberscount = () => this.subscriberCount;
  getVideoDescription = () => this.videoDescription;
  getIsUserLoggedIn = () => this.isUserLoggedIn;
  getAutoPlay = () => this.autoPlay;
  getRelatedVideos = (category?: string) => {
    const relatedVideos = `Returned ${this.category} Videos successfully`;

    return relatedVideos;
  };
}
let trailer = new Youtube(
  "Trailer",
  435321,
  5647,
  74,
  "Sony South",
  "3 June 2018",
  574899,
  "The sequel to the mighty 2003 blockbuster! ",
  "Music",
  true,
  false
);
console.log(trailer);
console.log(trailer.getRelatedVideos());
