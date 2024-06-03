const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

async function seedData() {
  try {
    // Health Facilities
    await prisma.healthFacility.createMany({
      data: [
        {
          name: "Hospital A",
          address: "123 Main St",
          phone_number: "+1234567890",
          email: "hospitalA@example.com",
        },
        {
          name: "Clinic B",
          address: "456 Elm St",
          phone_number: "+0987654321",
          email: "clinicB@example.com",
        },
        {
          name: "Medical Center C",
          address: "789 Oak St",
          phone_number: "+8765432109",
          email: "medcenterC@example.com",
        },
        {
          name: "Health Clinic D",
          address: "456 Pine St",
          phone_number: "+2345678901",
          email: "healthclinicD@example.com",
        },
        {
          name: "Community Hospital E",
          address: "789 Maple St",
          phone_number: "+3456789012",
          email: "communityhospitalE@example.com",
        },
      ],
    });

    // Donors
    await prisma.donor.createMany({
      data: [
        {
          name: "John Doe",
          gender: "L",
          blood_type: "A",
          rhesus_type: "positif",
          date_of_birth: new Date("1980-01-01"),
          address: "123 Main St",
          phone_number: "+1234567890",
        },
        {
          name: "Jane Doe",
          gender: "P",
          blood_type: "B",
          rhesus_type: "negatif",
          date_of_birth: new Date("1975-03-15"),
          address: "456 Elm St",
          phone_number: "+0987654321",
        },
        {
          name: "Alice Smith",
          gender: "P",
          blood_type: "O",
          rhesus_type: "positif",
          date_of_birth: new Date("1990-05-20"),
          address: "789 Oak St",
          phone_number: "+8765432109",
        },
        {
          name: "Bob Johnson",
          gender: "L",
          blood_type: "AB",
          rhesus_type: "negatif",
          date_of_birth: new Date("1988-11-10"),
          address: "456 Pine St",
          phone_number: "+2345678901",
        },
        {
          name: "Mary Williams",
          gender: "P",
          blood_type: "A",
          rhesus_type: "positif",
          date_of_birth: new Date("1970-07-25"),
          address: "789 Maple St",
          phone_number: "+3456789012",
        },
      ],
    });

    // Blood Donations
    await prisma.bloodDonation.createMany({
      data: [
        {
          hf_id: 1,
          donor_id: 1,
          donor_date: new Date("2023-01-01"),
        },
        {
          hf_id: 2,
          donor_id: 2,
          donor_date: new Date("2023-02-01"),
        },
        {
          hf_id: 3,
          donor_id: 3,
          donor_date: new Date("2023-03-01"),
        },
        {
          hf_id: 4,
          donor_id: 4,
          donor_date: new Date("2023-04-01"),
        },
        {
          hf_id: 5,
          donor_id: 5,
          donor_date: new Date("2023-05-01"),
        },
      ],
    });

    // Blood Stocks
    await prisma.bloodStock.createMany({
      data: [
        {
          donation_id: 1,
          hf_id: 1,
          entry_date: new Date("2023-01-02"),
        },
        {
          donation_id: 2,
          hf_id: 2,
          entry_date: new Date("2023-02-02"),
        },
        {
          donation_id: 3,
          hf_id: 3,
          entry_date: new Date("2023-03-02"),
        },
        {
          donation_id: 4,
          hf_id: 4,
          entry_date: new Date("2023-04-02"),
        },
        {
          donation_id: 5,
          hf_id: 5,
          entry_date: new Date("2023-05-02"),
        },
      ],
    });

    // Blood Usages
    await prisma.bloodUsage.createMany({
      data: [
        {
          requester_donor_id: 1,
          stock_id: 1,
          hf_id: 1,
          purpose: "Transfusion for surgery",
          date: new Date("2023-01-10"),
        },
        {
          requester_donor_id: 2,
          stock_id: 2,
          hf_id: 2,
          purpose: "Emergency transfusion",
          date: new Date("2023-02-10"),
        },
        {
          requester_donor_id: 3,
          stock_id: 3,
          hf_id: 3,
          purpose: "Transfusion for anemia",
          date: new Date("2023-03-10"),
        },
        {
          requester_donor_id: 4,
          stock_id: 4,
          hf_id: 4,
          purpose: "Transfusion for accident victim",
          date: new Date("2023-04-10"),
        },
        {
          requester_donor_id: 5,
          stock_id: 5,
          hf_id: 5,
          purpose: "Transfusion for surgery",
          date: new Date("2023-05-10"),
        },
      ],
    });

    // Blood Requests
    await prisma.bloodRequest.createMany({
      data: [
        {
          requester_hf_id: 1,
          responder_hf_id: 2,
          responder_donor_id: 2,
          quantity: 3,
          status: "approved",
          purpose: "Emergency surgery",
          request_date: new Date("2023-01-15"),
          confirmed_date: new Date("2023-01-20"),
        },
        {
          requester_hf_id: 2,
          responder_hf_id: 3,
          responder_donor_id: 3,
          quantity: 2,
          status: "approved",
          purpose: "Emergency transfusion",
          request_date: new Date("2023-02-15"),
          confirmed_date: new Date("2023-02-20"),
        },
        {
          requester_hf_id: 3,
          responder_hf_id: 4,
          responder_donor_id: 4,
          quantity: 1,
          status: "pending",
          purpose: "Transfusion for surgery",
          request_date: new Date("2023-03-15"),
        },
        {
          requester_hf_id: 4,
          responder_hf_id: 5,
          responder_donor_id: 5,
          quantity: 2,
          status: "pending",
          purpose: "Transfusion for accident victim",
          request_date: new Date("2023-04-15"),
        },
        {
          requester_hf_id: 5,
          responder_hf_id: 1,
          responder_donor_id: 1,
          quantity: 3,
          status: "pending",
          purpose: "Transfusion for surgery",
          request_date: new Date("2023-05-15"),
        },
      ],
    });

    console.log("Data seeded successfully.");
  } catch (error) {
    console.error("Error seeding data:", error);
  } finally {
    await prisma.$disconnect();
  }
}

seedData();
