import { NextResponse } from 'next/server';
import fs from 'fs';
import path from 'path';
import { Artisan } from '@/lib/types/artisan';

const filePath = path.join(process.cwd(), 'src/lib/data/artisans.json');

// Helper to read data
function readData(): Artisan[] {
  try {
    if (!fs.existsSync(filePath)) {
      return [];
    }
    const raw = fs.readFileSync(filePath, 'utf8');
    return JSON.parse(raw || '[]');
  } catch (error) {
    console.error('Error reading artisans data:', error);
    return [];
  }
}

// Helper to write data
function writeData(data: Artisan[]) {
  try {
    fs.writeFileSync(filePath, JSON.stringify(data, null, 2), 'utf8');
  } catch (error) {
    console.error('Error writing artisans data:', error);
  }
}

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const statusFilter = searchParams.get('status'); // 'all' for admin, or default verified

  const data = readData();

  if (statusFilter === 'all') {
    return NextResponse.json(data);
  }

  // Public endpoint returns only verified artisans
  const verifiedArtisans = data.filter((item) => item.status === 'verified');
  return NextResponse.json(verifiedArtisans);
}

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const data = readData();

    const newArtisan: Artisan = {
      id: 'artisan-' + Date.now().toString(),
      name: body.name || '',
      title: body.title || '',
      category: body.category || 'Creative Vision',
      email: body.email || '',
      phone: body.phone || '',
      country: body.country || 'United Kingdom',
      city: body.city || 'London',
      about: body.about || '',
      expertise: body.expertise || '',
      signatureStyle: body.signatureStyle || '',
      experienceCredentials: body.experienceCredentials || '',
      portfolio: body.portfolio || '',
      zendelRole: body.zendelRole || '',
      image: body.image || '/artisan-event-planner.jpg',
      status: 'pending', // New registrations must be reviewed and verified by the admin
      createdAt: new Date().toISOString(),
    };

    data.unshift(newArtisan);
    writeData(data);

    return NextResponse.json(newArtisan, { status: 201 });
  } catch (error) {
    return NextResponse.json({ error: 'Failed to register artisan' }, { status: 500 });
  }
}

export async function PUT(request: Request) {
  try {
    const body = await request.json();
    const data = readData();

    const index = data.findIndex((item) => item.id === body.id);
    if (index === -1) {
      return NextResponse.json({ error: 'Artisan not found' }, { status: 404 });
    }

    data[index] = {
      ...data[index],
      ...body,
    };

    writeData(data);
    return NextResponse.json(data[index]);
  } catch (error) {
    return NextResponse.json({ error: 'Failed to update artisan' }, { status: 500 });
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
    return NextResponse.json({ error: 'Failed to delete artisan' }, { status: 500 });
  }
}
