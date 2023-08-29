import { NextResponse } from 'next/server';

export const GET = (req: Request) => {
  const { searchParams } = new URL(req.url);
  return NextResponse.json({
    state: 'success',
    message: '获取数据成功',
    data: Object.fromEntries(searchParams)
  });
};

export const POST = async (req: Request) => {
  const data = await req.json();
  return NextResponse.json({
    state: 'success',
    message: '新增数据成功',
    data
  });
};
