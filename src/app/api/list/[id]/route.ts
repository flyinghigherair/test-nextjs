import { NextResponse } from 'next/server';

export const PUT = async (req: Request) => {
  return NextResponse.json({
    state: 'success',
    message: '修改数据成功',
    data: {}
  });
};

export const DELETE = async (req: Request, { params }: any) => {
  console.log(params);
  return NextResponse.json({
    state: 'success',
    message: '删除数据成功',
    data: {}
  });
};
