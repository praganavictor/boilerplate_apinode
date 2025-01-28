import { ApiProperty } from '@nestjs/swagger';

export class Post {
  /**
   * The title of the Post
   * @example 'My Post'
   */
  title: string;

  @ApiProperty({ example: 1, description: 'The body of my post' })
  content: string;

  @ApiProperty({
    example: false,
    description: 'Whether the post should be published or not',
  })
  publish: boolean;
}