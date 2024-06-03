-- CreateTable
CREATE TABLE "health_facilities" (
    "hf_id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "address" TEXT NOT NULL,
    "phone_number" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "health_facilities_pkey" PRIMARY KEY ("hf_id")
);

-- CreateTable
CREATE TABLE "blood_requests" (
    "request_id" SERIAL NOT NULL,
    "requester_hf_id" INTEGER NOT NULL,
    "responder_hf_id" INTEGER NOT NULL,
    "responder_donor_id" INTEGER NOT NULL,
    "quantity" INTEGER NOT NULL,
    "status" TEXT NOT NULL DEFAULT 'pending',
    "purpose" TEXT NOT NULL,
    "request_date" TIMESTAMP(3) NOT NULL,
    "confirmed_date" TIMESTAMP(3),
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "blood_requests_pkey" PRIMARY KEY ("request_id")
);

-- CreateTable
CREATE TABLE "donors" (
    "donor_id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "gender" TEXT NOT NULL DEFAULT 'L',
    "blood_type" TEXT NOT NULL DEFAULT 'A',
    "rhesus_type" TEXT NOT NULL DEFAULT 'positif',
    "date_of_birth" TIMESTAMP(3) NOT NULL,
    "address" TEXT NOT NULL,
    "phone_number" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "donors_pkey" PRIMARY KEY ("donor_id")
);

-- CreateTable
CREATE TABLE "blood_donations" (
    "donation_id" SERIAL NOT NULL,
    "hf_id" INTEGER NOT NULL,
    "donor_id" INTEGER NOT NULL,
    "donor_date" TIMESTAMP(3) NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "blood_donations_pkey" PRIMARY KEY ("donation_id")
);

-- CreateTable
CREATE TABLE "blood_stocks" (
    "stock_id" SERIAL NOT NULL,
    "donation_id" INTEGER NOT NULL,
    "hf_id" INTEGER NOT NULL,
    "entry_date" TIMESTAMP(3) NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "blood_stocks_pkey" PRIMARY KEY ("stock_id")
);

-- CreateTable
CREATE TABLE "blood_usages" (
    "usage_id" SERIAL NOT NULL,
    "requester_donor_id" INTEGER NOT NULL,
    "stock_id" INTEGER NOT NULL,
    "hf_id" INTEGER NOT NULL,
    "purpose" TEXT NOT NULL,
    "date" TIMESTAMP(3) NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "blood_usages_pkey" PRIMARY KEY ("usage_id")
);

-- AddForeignKey
ALTER TABLE "blood_requests" ADD CONSTRAINT "blood_requests_requester_hf_id_fkey" FOREIGN KEY ("requester_hf_id") REFERENCES "health_facilities"("hf_id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "blood_requests" ADD CONSTRAINT "blood_requests_responder_hf_id_fkey" FOREIGN KEY ("responder_hf_id") REFERENCES "health_facilities"("hf_id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "blood_requests" ADD CONSTRAINT "blood_requests_responder_donor_id_fkey" FOREIGN KEY ("responder_donor_id") REFERENCES "donors"("donor_id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "blood_donations" ADD CONSTRAINT "blood_donations_hf_id_fkey" FOREIGN KEY ("hf_id") REFERENCES "health_facilities"("hf_id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "blood_donations" ADD CONSTRAINT "blood_donations_donor_id_fkey" FOREIGN KEY ("donor_id") REFERENCES "donors"("donor_id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "blood_stocks" ADD CONSTRAINT "blood_stocks_donation_id_fkey" FOREIGN KEY ("donation_id") REFERENCES "blood_donations"("donation_id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "blood_stocks" ADD CONSTRAINT "blood_stocks_hf_id_fkey" FOREIGN KEY ("hf_id") REFERENCES "health_facilities"("hf_id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "blood_usages" ADD CONSTRAINT "blood_usages_requester_donor_id_fkey" FOREIGN KEY ("requester_donor_id") REFERENCES "donors"("donor_id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "blood_usages" ADD CONSTRAINT "blood_usages_stock_id_fkey" FOREIGN KEY ("stock_id") REFERENCES "blood_stocks"("stock_id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "blood_usages" ADD CONSTRAINT "blood_usages_hf_id_fkey" FOREIGN KEY ("hf_id") REFERENCES "health_facilities"("hf_id") ON DELETE RESTRICT ON UPDATE CASCADE;
