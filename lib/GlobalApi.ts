import { PrismaClient } from '@prisma/client';
import { NextResponse } from 'next/server';

const prisma = new PrismaClient();

// HealthFacility CRUD
export async function getHealthFacilities() {
  try {
    const data = await prisma.healthFacility.findMany();
    return NextResponse.json(data,{status:200});
  } catch (error) {
    return NextResponse.error();
  }
}

export async function createHealthFacility(data) {
  try {
    const newData = await prisma.healthFacility.create({ data });
    return NextResponse.json(newData, { status: 201 });
  } catch (error) {
    return NextResponse.error();
  }
}

export async function updateHealthFacility(id, updateData) {
  try {
    const updatedData = await prisma.healthFacility.update({
      where: { hf_id: id },
      data: updateData,
    });
    return NextResponse.json(updatedData);
  } catch (error) {
    return NextResponse.error();
  }
}

export async function deleteHealthFacility(id) {
  try {
    await prisma.healthFacility.delete({ where: { hf_id: id } });
    return NextResponse.json({ message: 'Successfully deleted' });
  } catch (error) {
    return NextResponse.error();
  }
}

// Donor CRUD
export async function getDonors() {
  try {
    const data = await prisma.donor.findMany();
    return NextResponse.json(data);
  } catch (error) {
    return NextResponse.error();
  }
}

export async function createDonor(data) {
  try {
    const newData = await prisma.donor.create({ data });
    return NextResponse.json(newData, { status: 201 });
  } catch (error) {
    return NextResponse.error();
  }
}

export async function updateDonor(id, updateData) {
  try {
    const updatedData = await prisma.donor.update({
      where: { donor_id: id },
      data: updateData,
    });
    return NextResponse.json(updatedData);
  } catch (error) {
    return NextResponse.error();
  }
}

export async function deleteDonor(id) {
  try {
    await prisma.donor.delete({ where: { donor_id: id } });
    return NextResponse.json({ message: 'Successfully deleted' });
  } catch (error) {
    return NextResponse.error();
  }
}

// BloodDonation CRUD
export async function getBloodDonations() {
  try {
    const data = await prisma.bloodDonation.findMany();
    return NextResponse.json(data);
  } catch (error) {
    return NextResponse.error();
  }
}

export async function createBloodDonation(data) {
  try {
    const newData = await prisma.bloodDonation.create({ data });
    return NextResponse.json(newData, { status: 201 });
  } catch (error) {
    return NextResponse.error();
  }
}

export async function updateBloodDonation(id, updateData) {
  try {
    const updatedData = await prisma.bloodDonation.update({
      where: { donation_id: id },
      data: updateData,
    });
    return NextResponse.json(updatedData);
  } catch (error) {
    return NextResponse.error();
  }
}

export async function deleteBloodDonation(id) {
  try {
    await prisma.bloodDonation.delete({ where: { donation_id: id } });
    return NextResponse.json({ message: 'Successfully deleted' });
  } catch (error) {
    return NextResponse.error();
  }
}

// BloodStock CRUD
export async function getBloodStocks() {
  try {
    const data = await prisma.bloodStock.findMany();
    return NextResponse.json(data);
  } catch (error) {
    return NextResponse.error();
  }
}

export async function createBloodStock(data) {
  try {
    const newData = await prisma.bloodStock.create({ data });
    return NextResponse.json(newData, { status: 201 });
  } catch (error) {
    return NextResponse.error();
  }
}

export async function updateBloodStock(id, updateData) {
  try {
    const updatedData = await prisma.bloodStock.update({
      where: { stock_id: id },
      data: updateData,
    });
    return NextResponse.json(updatedData);
  } catch (error) {
    return NextResponse.error();
  }
}

export async function deleteBloodStock(id) {
  try {
    await prisma.bloodStock.delete({ where: { stock_id: id } });
    return NextResponse.json({ message: 'Successfully deleted' });
  } catch (error) {
    return NextResponse.error();
  }
}

// BloodUsage CRUD
export async function getBloodUsages() {
  try {
    const data = await prisma.bloodUsage.findMany();
    return NextResponse.json(data);
  } catch (error) {
    return NextResponse.error();
  }
}

export async function createBloodUsage(data) {
  try {
    const newData = await prisma.bloodUsage.create({ data });
    return NextResponse.json(newData, { status: 201 });
  } catch (error) {
    return NextResponse.error();
  }
}

export async function updateBloodUsage(id, updateData) {
  try {
    const updatedData = await prisma.bloodUsage.update({
      where: { usage_id: id },
      data: updateData,
    });
    return NextResponse.json(updatedData);
  } catch (error) {
    return NextResponse.error();
  }
}

export async function deleteBloodUsage(id) {
  try {
    await prisma.bloodUsage.delete({ where: { usage_id: id } });
    return NextResponse.json({ message: 'Successfully deleted' });
  } catch (error) {
    return NextResponse.error();
  }
}

// BloodRequest CRUD
export async function getBloodRequests() {
  try {
    const data = await prisma.bloodRequest.findMany();
    return NextResponse.json(data);
  } catch (error) {
    return NextResponse.error();
  }
}

export async function createBloodRequest(data) {
  try {
    const newData = await prisma.bloodRequest.create({ data });
    return NextResponse.json(newData, { status: 201 });
  } catch (error) {
    return NextResponse.error();
  }
}

export async function updateBloodRequest(id, updateData) {
  try {
    const updatedData = await prisma.bloodRequest.update({
      where: { request_id: id },
      data: updateData,
    });
    return NextResponse.json(updatedData);
  } catch (error) {
    return NextResponse.error();
  }
}

export async function deleteBloodRequest(id) {
  try {
    await prisma.bloodRequest.delete({ where: { request_id: id } });
    return NextResponse.json({ message: 'Successfully deleted' });
  } catch (error) {
    return NextResponse.error();
  }
}
