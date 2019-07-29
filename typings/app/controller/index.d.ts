// This file is created by egg-ts-helper@1.25.5
// Do not modify this file!!!!!!!!!

import 'egg';
import ExportHome from '../../../app/controller/home';
import ExportMusic from '../../../app/controller/music';
import ExportUsers from '../../../app/controller/users';

declare module 'egg' {
  interface IController {
    home: ExportHome;
    music: ExportMusic;
    users: ExportUsers;
  }
}
