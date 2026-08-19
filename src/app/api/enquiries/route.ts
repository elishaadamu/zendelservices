import { NextResponse } from 'next/server';
import fs from 'fs';
import path from 'path';

const filePath = path.join(process.cwd(), 'src/lib/data/enquiries.json');

// Helper to read data
function readData() {
  try {
    if (!fs.existsSync(filePath)) {
      return [];
    }
    const raw = fs.readFileSync(filePath, 'utf8');
    return JSON.parse(raw || '[]');
  } catch (error) {
    console.error('Error reading enquiries data:', error);
    return [];
  }
}

// Helper to write data
function writeData(data: any) {
  try {
    fs.writeFileSync(filePath, JSON.stringify(data, null, 2), 'utf8');
  } catch (error) {
    console.error('Error writing enquiries data:', error);
  }
}

export async function GET() {
  const data = readData();
  return NextResponse.json(data);
}

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const data = readData();

    const newEnquiry = {
      id: Date.now().toString(),
      artisanName: body.artisanName || 'General',
      artisanRole: body.artisanRole || 'General Creative',
      name: body.name || '',
      email: body.email || '',
      phone: body.phone || '',
      eventDate: body.eventDate || '',
      locationPostcode: body.locationPostcode || '',
      additionalInfo: body.additionalInfo || '',
      createdAt: new Date().toISOString(),
    };

    data.unshift(newEnquiry); // Prepend so new enquiries show first
    writeData(data);

    return NextResponse.json(newEnquiry);
  } catch (error) {
    return NextResponse.json({ error: 'Failed to save enquiry' }, { status: 500 });
  }
}

export async function PUT(request: Request) {
  try {
    const body = await request.json();
    const data = readData();

    const index = data.findIndex((item: any) => item.id === body.id);
    if (index === -1) {
      return NextResponse.json({ error: 'Enquiry not found' }, { status: 404 });
    }

    data[index] = {
      ...data[index],
      name: body.name !== undefined ? body.name : data[index].name,
      email: body.email !== undefined ? body.email : data[index].email,
      phone: body.phone !== undefined ? body.phone : data[index].phone,
      eventDate: body.eventDate !== undefined ? body.eventDate : data[index].eventDate,
      locationPostcode: body.locationPostcode !== undefined ? body.locationPostcode : data[index].locationPostcode,
      additionalInfo: body.additionalInfo !== undefined ? body.additionalInfo : data[index].additionalInfo,
    };

    writeData(data);
    return NextResponse.json(data[index]);
  } catch (error) {
    return NextResponse.json({ error: 'Failed to update enquiry' }, { status: 500 });
  }
}

export async function DELETE(request: Request) {
  try {
    const { searchParams } = new URL(request.url);
    const id = searchParams.get('id');

    if (!id) {
      return NextResponse.json({ error: 'ID is required' }, { status: 400 });
    }

    const data = readData();
    const filtered = data.filter((item: any) => item.id !== id);
    
    writeData(filtered);
    return NextResponse.json({ success: true });
  } catch (error) {
    return NextResponse.json({ error: 'Failed to delete enquiry' }, { status: 500 });
  }
}
