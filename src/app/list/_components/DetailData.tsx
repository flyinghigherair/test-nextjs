'use client'
import {useParams, useSearchParams} from 'next/navigation';

function DetailData() {
  const { id } = useParams();
  const searchParams = useSearchParams();
  return (
    <div>
      <div>DetailData---{id}
      <p>{searchParams.get('name')}</p>
      </div>
    </div>
  );
}

export default DetailData;
