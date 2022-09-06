import SingleArt from "./SingleArt";

interface QuizScore {
  score: number;
}

interface ArtPiece {
  name: string;
  url: string;
  image_url: string;
  has_fake: boolean;
  fake_image_url: string;
  art_name: string;
  author: string;
  year: string;
  art_style: string;
  description: string;
  buy: number;
  sell: number;
  authenticity: string;
}

export default interface UserProfile {
  _id?: string;
  uid: string;
  displayName: string;
  photoURL: string;
  collections: ArtPiece[];
  quizScore: QuizScore[];
}
