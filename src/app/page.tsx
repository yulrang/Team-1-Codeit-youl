'use client';

import { useState } from 'react';
import CategoryWrap from '@/src/components/common/category/category-wrap';
import DropDown from '@/src/components/common/input/drop-down';

export default function Home() {
  const [sort, setSort] = useState<string | null>('latest');

  return (
    <div className="container mx-auto my-0 max-w-pc">
      <CategoryWrap />
      <DropDown
        variant="sort"
        data={[
          { value: 'latest', label: '최신순' },
          { value: 'best', label: '인기순' },
        ]}
        placeholder="최신순"
        value={sort}
        className="w-[110px]"
        onChange={setSort}
      />
    </div>
  );
}
