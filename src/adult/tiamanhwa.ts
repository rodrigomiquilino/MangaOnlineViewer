import madarawp from '../main/madarawp';
import { Category, type ISite, Language } from '../types';

const tiamanhwa: ISite = {
  ...madarawp,
  name: 'Tia Manhwa',
  url: /https?:\/\/(www\.)?tiamanhwa\.com\/manhwa\/.+\/.+/,
  homepage: 'https://tiamanhwa.com',
  language: [Language.PORTUGUESE],
  category: Category.HENTAI,
};

export default tiamanhwa;
