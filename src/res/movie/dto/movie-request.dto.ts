export class MovieRequestDto {
  directorId: number;
  title: string;
  genre: string;
  contents: string;
  posterUrl: string;
  runningTime: number;
  favorite: number;

  // KMDb
  nation: string;
  company: string;
  ratedYn: boolean; // 심의여부
  type: string; // 극영, 애니, 다큐, ...
  actor: string;
}
