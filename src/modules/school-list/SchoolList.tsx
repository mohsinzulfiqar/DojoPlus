import React from 'react';
import { useRouter } from 'next/router';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import { FixedSizeList, ListChildComponentProps } from 'react-window';
import CircularProgress from '@mui/material/CircularProgress';
import AutoSizer from 'react-virtualized-auto-sizer';

import { useGetSchoolListQuery, School } from '../../shared/types/generated';

export const SchoolList: React.FC = () => {
  const router = useRouter();
  const { data, loading } = useGetSchoolListQuery();
  const list = data?.schoolsList?.items || [];
  const count = data?.schoolsList?.count || 0;

  const renderRow = (
    props: ListChildComponentProps<School>,
  ): React.ReactElement => {
    const { index, style } = props;

    return (
      <ListItem
        onClick={() => {
          if (list[index]?.slug) {
            router.push(`/school/${list[index]?.slug}/schedule`);
          }
        }}
        style={style}
        key={index}
        disablePadding
      >
        <ListItemButton>
          <ListItemText
            primary={`${index} -- ${
              list[index]?.schoolName || 'This school has no name'
            }`}
          />
        </ListItemButton>
      </ListItem>
    );
  };

  if (loading) {
    return <CircularProgress />;
  }

  return (
    <AutoSizer>
      {({ height, width }) => (
        <FixedSizeList
          width={width}
          height={height}
          itemSize={46}
          itemCount={count}
        >
          {renderRow}
        </FixedSizeList>
      )}
    </AutoSizer>
  );
};
