interface tweet {

  image: string;
  author: string;
  authorTag: string;
  desc: string;
  iLike: boolean;
  totalLikes: number;


}


export class TweetService {

  getTweets(): tweet[] {


    return [
      {
        image: "http://lorempixel.com/100/100/people/?"+Math.floor((Math.random() * 10) + 1),
        authorTag: "@toto",
        author: "toto lorem",
        desc: "un compte pour ne rien dire",
        totalLikes: 3,
        iLike: false
      },
      {
        image: "http://lorempixel.com/100/100/people/?"+Math.floor((Math.random() * 10) + 1),
        authorTag: "@titi",
        author: "titi ipsum",
        desc: "uun aurte compte pour un test",
        totalLikes: 10,
        iLike: false
      },
      {
        image: "http://lorempixel.com/100/100/people/?"+Math.floor((Math.random() * 10) + 1),
        authorTag: "@frdevtoto",
        author: "dev ipsum",
        desc: "uun un compte de devt",
        totalLikes: 43,
        iLike: true
      }];

  }


}
