'use strict';

import * as cp from 'child_process';
import {CliCommandBase, CliCommandBaseOpts} from "../cli-command-base";
import {Readable} from "stream";
import {ChildProcess} from "child_process";


export class Du extends CliCommandBase {

  cmd: string;

  constructor(o: any, v: CliCommandBaseOpts){
    super(v);
  }

  getCommandString(): string {
    return this.cmd;
  }

  getStream(): ChildProcess {
    const k = cp.spawn('bash');
    k.stdin.end(`${this.cmd}`);
    return k;
  }


}
