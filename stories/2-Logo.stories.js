import React from 'react';
import { Logo } from '../src/Logo';

export default {
  title: 'Logo',
};

export const normal = () => <Logo/>;

export const white = () => <Logo white/>

export const animated = () => <Logo animated/>;