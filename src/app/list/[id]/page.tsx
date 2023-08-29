import DetailData from '../_components/DetailData';
import { Metadata, ResolvingMetadata } from 'next';

type Props = {
  params: { id: string };
  searchParams: { [key: string]: string | string[] | undefined };
};
export async function generateMetadata(
  { params, searchParams }: Props,
  parent?: ResolvingMetadata
): Promise<Metadata> {
  return {
    title: searchParams.name
  };
}
function DetailPage() {
  console.log('run on server');
  return (
    <div>
      <h1 className="detail">
        <DetailData />
      </h1>
    </div>
  );
}

export default DetailPage;
