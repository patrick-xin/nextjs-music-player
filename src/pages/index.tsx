import { gql } from '@apollo/client';
import * as React from 'react';

import { client } from '@/lib/client';

import AboutModal from '@/components/common/AboutModal';
import { Seo } from '@/components/common/Seo';
import { ListScreen } from '@/components/screen/list';
import { PlayingScreen } from '@/components/screen/playing';

import { useSongStore } from '@/store/song';

import { List, Page, Track } from '@/generated/graphql';

type Props = {
  lists: List[];
  page: Page;
};
export default function HomePage({ lists, page }: Props) {
  const { currentScreen, setCurrentSong, setCurrentList } = useSongStore();
  const [isModalOpen, setModalOpen] = React.useState(false);
  React.useEffect(() => {
    const lastPlayedSong = localStorage && localStorage.getItem('current-song');

    if (lastPlayedSong) {
      const lastplayed = JSON.parse(lastPlayedSong) as Track;
      setCurrentSong(lastplayed, false);
      const list = lists.find(
        (list) => list.category === lastplayed.genre
      ) as List;
      setCurrentList(list);
    } else {
      setCurrentList(lists[0]);
    }
  }, [setCurrentSong, setCurrentList, lists]);

  return (
    <div className='overflow-y-auto'>
      <Seo />

      {currentScreen === 'playing' ? (
        <PlayingScreen />
      ) : (
        <ListScreen lists={lists} toggleModal={() => setModalOpen((s) => !s)} />
      )}

      <AboutModal
        content={page}
        isModalOpen={isModalOpen}
        closeModal={() => setModalOpen(false)}
      />
    </div>
  );
}

export async function getStaticProps() {
  const { data } = await client.query({
    query: gql`
      query HomePageQuery {
        lists(orderBy: publishedAt_DESC) {
          id
          image {
            source {
              url
            }
          }
          category
          tracks(orderBy: name_ASC) {
            id
            name
            duration
            genre
            src
            artist
            coverImage {
              source {
                url
              }
            }
          }
        }
        page(where: { slug: "about" }) {
          content {
            raw
          }
        }
      }
    `,
  });

  return {
    props: {
      lists: data.lists as List[],
      page: data.page as Page,
    },
  };
}
