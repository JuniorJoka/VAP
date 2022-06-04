import { MuseMeta } from '../../../shared/types/moth';
import Track from './Track';

export default {
  title: 'Component/Track',
  component: Track,
};

const Template = (args) => <Track {...args} />;

const track: MuseMeta = {
  source: 'source',
  title: 'A title',
  artist: 'Billie Eilish',
  artists: [],
  genre: [],
  album: 'Where in the world',
  albumTrack: 1,
  year: 2020,
  duration: undefined,
  cover: undefined,
};

export const Even = Template.bind({});
Even.args = {
  even: true,
  track,
};

export const Odd = Template.bind({});
Odd.args = {
  even: false,
  track,
};
