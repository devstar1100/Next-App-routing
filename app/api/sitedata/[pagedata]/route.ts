import { NextRequest, NextResponse } from 'next/server';

export async function GET(req: NextRequest) {
  const pageData = [
    {
      id: 1,
      page: "sito.com/home",
      scan: "3 maggio 2024",
      waring: 15,
    },
    {
      id: 2,
      page: "sito.com/contact",
      scan: "3 kkk 2023",
      waring: 28,
    },
    {
      id: 3,
      page: "sito.com/about",
      scan: "3 oiu 2021",
      waring: 9,
    },
  ]
  return NextResponse.json(pageData);
}