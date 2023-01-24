import React, { FC, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Dispatch } from '@app/store';
import { getRepos } from '@features/repos/selectors';
import { fetchRepos } from '@features/repos/actions';
import { RepoSlide } from '@features/repos/components/RepoSlide/RepoSlide';
import { Carousel, CarouselItem } from '@components/Carousel/Carousel';
import { RepoItemSkeleton } from '@features/repos/components/RepoItem/RepoItemSkeleton';
import { repeat } from '@app/utils';

export const ReposList: FC = () => {
  const dispatch = useDispatch<Dispatch>();
  const repos = useSelector(getRepos);
  const [loading, setLoading] = useState(true);

  const reposWithClones = [...repos];
  reposWithClones.unshift(reposWithClones[reposWithClones.length - 1]);
  reposWithClones.push(reposWithClones[1]);

  React.useEffect(() => {
    setLoading(true);
    dispatch(fetchRepos()).then(() => {
      setLoading(false);
    });
  }, []);

  if (loading) {
    return (
      <Carousel>
        {repeat((i) => {
          return (
            <CarouselItem key={i}>
              <RepoItemSkeleton className="repo-skeleton" />
            </CarouselItem>
          );
        }, 3)}
      </Carousel>
    );
  }

  return (
    <Carousel>
      {reposWithClones.map((item, index) => {
        return (
          <CarouselItem key={item.id + '-' + index}>
            <RepoSlide repo={item} />
          </CarouselItem>
        );
      })}
    </Carousel>
  );
};
