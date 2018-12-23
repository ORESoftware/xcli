'use strict';

import {Readable} from "stream";
import {ChildProcess} from "child_process";

export interface CliCommandBaseOpts {
  osType?:string
}

export abstract class CliCommandBase {

  cmd: string;
  osType: string;

  constructor(o: CliCommandBaseOpts){

    o = o || <CliCommandBaseOpts>{};

    if('osType' in o){
      this.osType = o.osType;
    }
  }

  abstract getCommandString(): string;
  abstract getStream(): ChildProcess


}
