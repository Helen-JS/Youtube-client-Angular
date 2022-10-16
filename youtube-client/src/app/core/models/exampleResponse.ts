import { IResponse } from './models';

export const response: IResponse = {
  kind: 'youtube#videoListResponse',
  etag: '"Fznwjl6JEQdo1MGvHOGaz_YanRU/Cmodw7c5XPTM8Yg3kMXelihxek4"',
  pageInfo: {
    totalResults: 10,
    resultsPerPage: 10,
  },
  items: [
    {
      kind: 'youtube#video',
      etag: '"Fznwjl6JEQdo1MGvHOGaz_YanRU/KuFm1jGNMzgjE2VlAEsPgRVra4o"',
      id: { kind: 'G0bBLvWXBvc', videoId: 'G0bBLvWXBvc' },
      snippet: {
        publishedAt: '2019-09-16T16:53:41.000Z',
        channelId: 'UCsBjURrPoezykLs9EqgamOA',
        title: 'Angular for Beginners',
        description: 'Learn the basics of Angular 8 🚀 by building a tic-tac-toe game 🕹️ from scratch...Then deploy it as an installable progressive web app (PWA). Go beyond the basics 👉https://fireship.io/courses/angular/\n\nFull Source Code: https://github.com/fireship-io/angular-tic-tac-toe\nAngular Docs: https://angular.io/\n\n#angular #pwa #tutorial\n\nTake Angular quizzes 🤓\n\niOS https://itunes.apple.com/us/app/fireship/id1462592372?mt=8\nAndroid https://play.google.com/store/apps/details?id=io.fireship.quizapp\n\nUpgrade to Fireship PRO at https://fireship.io/pro\nUse code lORhwXd2 for 25% off your first payment.',
        thumbnails: {
          default: {
            url: 'https://i.ytimg.com/vi/G0bBLvWXBvc/default.jpg',
            width: 120,
            height: 90,
          },
          medium: {
            url: 'https://i.ytimg.com/vi/G0bBLvWXBvc/mqdefault.jpg',
            width: 320,
            height: 180,
          },
          high: {
            url: 'https://i.ytimg.com/vi/G0bBLvWXBvc/hqdefault.jpg',
            width: 480,
            height: 360,
          },
          standard: {
            url: 'https://i.ytimg.com/vi/G0bBLvWXBvc/sddefault.jpg',
            width: 640,
            height: 480,
          },
          maxres: {
            url: 'https://i.ytimg.com/vi/G0bBLvWXBvc/maxresdefault.jpg',
            width: 1280,
            height: 720,
          },
        },
        channelTitle: 'Fireship',
        tags: [
          'webdev',
          'app development',
          'lesson',
          'tutorial',
          'beginners',
          'beginner',
          'basic',
          'angular tutorial',
          'angular basics',
          'angular for beginners',
          'angular 8',
          'angular components',
          'learn angular',
        ],
        categoryId: '28',
        liveBroadcastContent: 'none',
        localized: {
          title: "Angular for Beginners - Let's build a Tic-Tac-Toe PWA",
          description: 'Learn the basics of Angular 8 🚀 by building a tic-tac-toe game 🕹️ from scratch...Then deploy it as an installable progressive web app (PWA). Go beyond the basics 👉https://fireship.io/courses/angular/\n\nFull Source Code: https://github.com/fireship-io/angular-tic-tac-toe\nAngular Docs: https://angular.io/\n\n#angular #pwa #tutorial\n\nTake Angular quizzes 🤓\n\niOS https://itunes.apple.com/us/app/fireship/id1462592372?mt=8\nAndroid https://play.google.com/store/apps/details?id=io.fireship.quizapp\n\nUpgrade to Fireship PRO at https://fireship.io/pro\nUse code lORhwXd2 for 25% off your first payment.',
        },
        defaultAudioLanguage: 'en',
      },
      statistics: {
        viewCount: '56657',
        likeCount: '2092',
        dislikeCount: '36',
        favoriteCount: '0',
        commentCount: '128',
      },
    },
  ],
};
