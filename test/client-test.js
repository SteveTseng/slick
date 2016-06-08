import React from 'react';
import { expect } from 'chai';
import { shallow, mount, render } from 'enzyme';
import Songs from '../src/components/Songs.jsx';

let songs = shallow(<Songs
  key = '0'
  artist = 'Kanye West'
  songName = "We Don't Care"
  thumbnailUrl = 'some url'
  handleNewSongClick = 'click function' />);

describe('Songs component', function() {

  it("has class 'songs-in-queue'", function() {
    expect(songs.hasClass('songs-in-queue')).to.equal(true);
  });

  it("has expected props", function() {
    expect(songs.props().to.include.keys(
      'key',
      'artist',
      'songName',
      'thumbnailUrl',
      'handleNewSongClick')
    );
  });

  it("has an 'onClick' function", function() {
    expect(songs.props()).to.have.property('onClick');
    expect(songs.prop('onClick')).to.equal('click function');
  });

});
