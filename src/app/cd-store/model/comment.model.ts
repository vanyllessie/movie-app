export class Comment{
  id: number;
  albumId: number;
  comment: string;
  stars: number;
  constructor(comment:Comment){
    this.id = comment.id;
    this.albumId = comment.albumId;
    this.comment = comment.comment;
    this.stars = comment.stars;
  }
}
