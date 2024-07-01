import { NextRequest, NextResponse } from 'next/server';

export async function GET(req: NextRequest) {
  const urlData = [
    {
      id: 1,
      siteurl: "dental.tempmee.com",
      license: "Obtain a license"
    },  
    {
      id: 2,
      siteurl: "www.transizionedigitable.com",
      license: "Obtain a license"
    },
  ] 
  return NextResponse.json(urlData);
}