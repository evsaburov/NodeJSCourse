#!/usr/bin/env node
import { getArgs } from './helpers/args.js';
import { printHelp } from './services/log.service.js';

const initCli = () => {
  console.log('started');
  // console.log(process.argv);
  const args = getArgs(process.args)
  if (args.h){
    printHelp();
  }
  if (args.s){

  }
  if(args.t){
    
  }
}

initCli();