import React from 'react';
import sinon from 'sinon';
import { shallow } from 'enzyme';

import * as setupTests from '../setupTests';

import { PROVIDERS } from '../constants/loginProviders';

describe('Providers constant', () => {
  it('should have login providers defined', () => {
    expect(PROVIDERS.length).toEqual(4);

    expect(PROVIDERS[0].className).toBe('facebook');
    expect(PROVIDERS[0].provider).toBe('fbProvider');
    expect(PROVIDERS[0].displayName).toBe('Facebook');

    expect(PROVIDERS[1].className).toBe('google');
    expect(PROVIDERS[1].provider).toBe('gProvider');
    expect(PROVIDERS[1].displayName).toBe('Google');

    expect(PROVIDERS[2].className).toBe('twitter');
    expect(PROVIDERS[2].provider).toBe('twProvider');
    expect(PROVIDERS[2].displayName).toBe('Twitter');

    expect(PROVIDERS[3].className).toBe('github');
    expect(PROVIDERS[3].provider).toBe('ghProvider');
    expect(PROVIDERS[3].displayName).toBe('Github');
  });
});
