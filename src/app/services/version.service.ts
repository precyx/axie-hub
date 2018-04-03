import { Injectable } from '@angular/core';

export class VersionData{
  componentVersion:string;
  componentName:string;
  componentClassname:string;
}

@Injectable()
export class VersionService {

  versionData:VersionData = new VersionData();

  constructor() {}

  /**
   * [get] Gets Version Data
   * @return {VersionData} [description]
   */
  get():VersionData {
    return this.versionData;
  }

  /**
   * [set] Sets version data
   * @param {string} v [component version]
   * @param {string} n [component name]
   * @param {string} n [component class name] used for CSS
   */
  set(v:string, n:string, c:string):void {
    this.versionData.componentVersion = v;
    this.versionData.componentName = n;
    this.versionData.componentClassname = c;
  }
}
