import { CommonBigPKEntity } from 'src/res/common/entity/common.entity';
import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';
import { MovieRequestDto } from '../dto/movie-request.dto';

@Entity()
export class Movie extends CommonBigPKEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: 'varchar', length: 255 })
  title: string;

  @Column({ type: 'varchar', length: 100 })
  directorName: string;

  @Column({ type: 'varchar', length: 100 })
  genre: string;

  @Column({ type: 'text' })
  contents: string;

  @Column({ type: 'varchar', length: 255 })
  posterUrl: string;

  @Column({ type: 'int' })
  favorite: number;

  @Column({ type: 'int' })
  runningTime: number;

  // KMDb
  @Column({ type: 'varchar', length: 100 })
  nation: string; 

  @Column({ type: 'varchar', length: 255 })
  company: string; 

  @Column({ type: 'boolean' })
  ratedYn: boolean; 

  @Column({ type: 'varchar', length: 50 })
  type: string; 

  @Column({ type: 'varchar', length: 255 })
  actor: string;

  @Column({ type: 'timestamp', nullable: true })
  releasedAt: Date;

  @Column({ type: 'timestamp', nullable: true })
  createdAt: Date;

  @Column({ type: 'timestamp', nullable: true })
  modifiedAt: Date;

  constructor(movieRequestDto: MovieRequestDto) {
    super();
    if (movieRequestDto) {
      this.title = movieRequestDto.title;
      this.directorName = movieRequestDto.directorName;
      this.genre = movieRequestDto.genre;
      this.contents = movieRequestDto.contents;
      this.posterUrl = movieRequestDto.posterUrl;
      this.favorite = movieRequestDto.favorite;
      this.runningTime = movieRequestDto.runningTime;
    }
  }

  update(movieRequestDto: MovieRequestDto) {
    this.title = movieRequestDto.title;
    this.directorName = movieRequestDto.directorName;
    this.genre = movieRequestDto.genre;
    this.contents = movieRequestDto.contents;
    this.posterUrl = movieRequestDto.posterUrl;
    this.favorite = movieRequestDto.favorite;
    this.runningTime = movieRequestDto.runningTime;
  }
}
