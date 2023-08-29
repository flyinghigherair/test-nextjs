import Link from 'next/link';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: '列表',
  description: '这是列表'
};

const loadDataFromMHY = () => {
  return fetch(
    'https://api-mall.mihoyogift.com/common/homeishop/v1/goods/search_goods_spu_list?limit=40&page=1&shop_code=ys&order_by=comprehensive&show_sale_type=1&hide_sold_out=false'
  ).then((res) => res.json());
};
async function ListPage() {
  const data = [
    {
      id: 1,
      name: '第1个数据'
    },
    {
      id: 2,
      name: '第2个数据'
    },
    {
      id: 3,
      name: '第3个数据'
    }
  ];
  const mhyData = await loadDataFromMHY();
  return (
    <div>
      ListPage
      <ul>
        {data.map((item) => (
          <li key={item.id}>
            <Link href={'/list/' + item.id + '?name=' + item.name}>
              {item.name}
            </Link>
          </li>
        ))}
        {mhyData.data.list.map((item: any) => (
          <li key={item.goods_id}>
            <Link href={'/list/' + item.goods_id + '?name=' + item.name}>
              {item.name}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ListPage;
