import { NextResponse } from 'next/server';
import fs from 'fs';
import path from 'path';
import { ClientEnquiry } from '@/lib/types/artisan';

const filePath = path.join(process.cwd(), 'src/lib/data/enquiries.json');

// Helper to read data
function readData(): ClientEnquiry[] {
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
function writeData(data: ClientEnquiry[]) {
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

    const newEnquiry: ClientEnquiry = {
      id: Date.now().toString(),
      artisanName: body.artisanName || 'General Artisan Booking',
      artisanRole: body.artisanRole || 'Zendel Creatives Collective',
      name: body.name || '',
      email: body.email || '',
      phone: body.phone || '',
      country: body.country || 'United Kingdom',
      city: body.city || 'London',
      eventType: body.eventType || 'Luxury Celebration',
      locationPostcode: body.locationPostcode || '',
      eventDate: body.eventDate || '',
      numberOfArtisans: body.numberOfArtisans || '1',
      additionalInfo: body.additionalInfo || '',
      createdAt: new Date().toISOString(),
    };

    data.unshift(newEnquiry); // Prepend so new enquiries show first
    writeData(data);

    return NextResponse.json(newEnquiry, { status: 201 });
  } catch (error) {
    return NextResponse.json({ error: 'Failed to save enquiry' }, { status: 500 });
  }
}

export async function PUT(request: Request) {
  try {
    const body = await request.json();
    const data = readData();

    const index = data.findIndex((item) => item.id === body.id);
    if (index === -1) {
      return NextResponse.json({ error: 'Enquiry not found' }, { status: 404 });
    }

    data[index] = {
      ...data[index],
      ...body,
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
    const filtered = data.filter((item) => item.id !== id);
    
    writeData(filtered);
    return NextResponse.json({ success: true });
  } catch (error) {
    return NextResponse.json({ error: 'Failed to delete enquiry' }, { status: 500 });
  }
}
