export default interface SingleArt {
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
  uid?: string;
}
