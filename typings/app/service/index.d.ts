// This file is created by egg-ts-helper@1.25.5
// Do not modify this file!!!!!!!!!

import 'egg';
import ExportNews from '../../../app/service/News';
import ExportTest from '../../../app/service/Test';

declare module 'egg' {
  interface IService {
    news: ExportNews;
    test: ExportTest;
  }
}
