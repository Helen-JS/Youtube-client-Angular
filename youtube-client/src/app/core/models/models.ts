interface ILocalized{
    description: string
    title: string
}
interface IThumbnailsProperty{
    url:string
    width: number
    height: number
}
export interface IThumbnails{
    default: IThumbnailsProperty
    high: IThumbnailsProperty
    maxres: IThumbnailsProperty
    medium: IThumbnailsProperty
    standard: IThumbnailsProperty
}

export interface IStatistics{
    commentCount: string
    dislikeCount: string
    favoriteCount: string
    likeCount: string
    viewCount: string
}

export interface ISnippet{
    categoryId: string
    channelId: string
    channelTitle: string
    defaultAudioLanguage: string
    defaultLanguage?: string
    description: string
    liveBroadcastContent: string
    localized: ILocalized
    publishedAt: string
    tags: string[]
    thumbnails: IThumbnails
    title: string
}
export interface IItemId {
    king: string
    videoId: string
}
export interface IItem{
    etag:string
    id:IItemId
    kind:string
    snippet: ISnippet
    statistics: IStatistics
}
export interface IResponse{
    etag:string
    items:IItem[]
    kind: string
    nextPageToken?:string
    pageInfo:{
        resultsPerPage: number
        totalResults: number
    }
    regionCode?: string
}
