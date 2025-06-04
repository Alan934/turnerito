-- CreateEnum
CREATE TYPE "Role" AS ENUM ('admin', 'patient', 'practitioner', 'organization', 'secretary', 'practitioner_secretary');

-- CreateEnum
CREATE TYPE "Gender" AS ENUM ('MALE', 'FEMALE', 'OTHER', 'RATHER_NOT_SAY');

-- CreateEnum
CREATE TYPE "DocumentType" AS ENUM ('DNI', 'PASSPORT');

-- CreateEnum
CREATE TYPE "Day" AS ENUM ('Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday');

-- CreateEnum
CREATE TYPE "AppointmentStatus" AS ENUM ('pending', 'under_review', 'approved', 'cancelled', 'completed', 'no_show');

-- CreateTable
CREATE TABLE "user" (
    "id" TEXT NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,
    "deleted_at" TIMESTAMP(3),
    "email" TEXT,
    "password" TEXT,
    "role" "Role" NOT NULL,

    CONSTRAINT "user_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "practitioner" (
    "id" TEXT NOT NULL,
    "userId" TEXT NOT NULL,
    "name" TEXT,
    "last_name" TEXT,
    "gender" "Gender",
    "birth" TEXT,
    "document_type" "DocumentType" DEFAULT 'DNI',
    "dni" TEXT,
    "phone" TEXT,
    "url_img" TEXT,
    "license" TEXT,
    "rating" DOUBLE PRECISION NOT NULL DEFAULT 0.0,
    "home_service" BOOLEAN NOT NULL DEFAULT false,
    "duration_appointment" INTEGER NOT NULL DEFAULT 30,
    "accepted_social_works" BOOLEAN NOT NULL DEFAULT false,
    "consultation_time" TEXT,
    "professional_degree_id" TEXT,

    CONSTRAINT "practitioner_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "patient" (
    "id" TEXT NOT NULL,
    "name" TEXT,
    "last_name" TEXT,
    "gender" "Gender",
    "birth" TEXT,
    "document_type" "DocumentType" DEFAULT 'DNI',
    "dni" TEXT,
    "phone" TEXT,
    "url_img" TEXT,

    CONSTRAINT "patient_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "professional_degree" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,

    CONSTRAINT "professional_degree_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "practitioner_role" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "can_prescribe" BOOLEAN,

    CONSTRAINT "practitioner_role_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "category" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,

    CONSTRAINT "category_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "address" (
    "id" TEXT NOT NULL,
    "street" TEXT,
    "number" TEXT,
    "city" TEXT,
    "state" TEXT,
    "country" TEXT,
    "postal_code" TEXT,

    CONSTRAINT "address_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "social_work_enrollment" (
    "id" TEXT NOT NULL,
    "member_number" TEXT,
    "plan" TEXT,
    "social_work_id" TEXT,
    "patient_id" TEXT,

    CONSTRAINT "social_work_enrollment_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "social_work" (
    "id" TEXT NOT NULL,
    "name" TEXT,
    "phone" TEXT,
    "website" TEXT,

    CONSTRAINT "social_work_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "practitioner_social_work" (
    "id" TEXT NOT NULL,
    "price" DOUBLE PRECISION NOT NULL,
    "practitioner_id" TEXT NOT NULL,
    "social_work_id" TEXT NOT NULL,

    CONSTRAINT "practitioner_social_work_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "patient_practitioner_favorite" (
    "id" TEXT NOT NULL,
    "patient_id" TEXT NOT NULL,
    "practitioner_id" TEXT NOT NULL,

    CONSTRAINT "patient_practitioner_favorite_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "appointment" (
    "id" TEXT NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,
    "deleted_at" TIMESTAMP(3),
    "date" TEXT NOT NULL,
    "hour" TEXT NOT NULL,
    "observation" TEXT,
    "status" "AppointmentStatus" NOT NULL DEFAULT 'pending',
    "reprogrammed" BOOLEAN DEFAULT false,
    "email3" TEXT,
    "email24" TEXT,
    "whats3" TEXT,
    "whats24" TEXT,
    "patient_id" TEXT,

    CONSTRAINT "appointment_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "patient_appointment" (
    "id" TEXT NOT NULL,
    "appointment_id" TEXT NOT NULL,

    CONSTRAINT "patient_appointment_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "_PractitionerToPractitionerRole" (
    "A" TEXT NOT NULL,
    "B" TEXT NOT NULL,

    CONSTRAINT "_PractitionerToPractitionerRole_AB_pkey" PRIMARY KEY ("A","B")
);

-- CreateTable
CREATE TABLE "_PractitionerRoleToCategory" (
    "A" TEXT NOT NULL,
    "B" TEXT NOT NULL,

    CONSTRAINT "_PractitionerRoleToCategory_AB_pkey" PRIMARY KEY ("A","B")
);

-- CreateTable
CREATE TABLE "_PractitionerToAddress" (
    "A" TEXT NOT NULL,
    "B" TEXT NOT NULL,

    CONSTRAINT "_PractitionerToAddress_AB_pkey" PRIMARY KEY ("A","B")
);

-- CreateTable
CREATE TABLE "_AddressToPatient" (
    "A" TEXT NOT NULL,
    "B" TEXT NOT NULL,

    CONSTRAINT "_AddressToPatient_AB_pkey" PRIMARY KEY ("A","B")
);

-- CreateTable
CREATE TABLE "_AppointmentToPractitioner" (
    "A" TEXT NOT NULL,
    "B" TEXT NOT NULL,

    CONSTRAINT "_AppointmentToPractitioner_AB_pkey" PRIMARY KEY ("A","B")
);

-- CreateIndex
CREATE UNIQUE INDEX "user_email_key" ON "user"("email");

-- CreateIndex
CREATE UNIQUE INDEX "practitioner_userId_key" ON "practitioner"("userId");

-- CreateIndex
CREATE UNIQUE INDEX "practitioner_dni_key" ON "practitioner"("dni");

-- CreateIndex
CREATE UNIQUE INDEX "patient_dni_key" ON "patient"("dni");

-- CreateIndex
CREATE UNIQUE INDEX "practitioner_role_name_key" ON "practitioner_role"("name");

-- CreateIndex
CREATE UNIQUE INDEX "social_work_enrollment_patient_id_key" ON "social_work_enrollment"("patient_id");

-- CreateIndex
CREATE INDEX "_PractitionerToPractitionerRole_B_index" ON "_PractitionerToPractitionerRole"("B");

-- CreateIndex
CREATE INDEX "_PractitionerRoleToCategory_B_index" ON "_PractitionerRoleToCategory"("B");

-- CreateIndex
CREATE INDEX "_PractitionerToAddress_B_index" ON "_PractitionerToAddress"("B");

-- CreateIndex
CREATE INDEX "_AddressToPatient_B_index" ON "_AddressToPatient"("B");

-- CreateIndex
CREATE INDEX "_AppointmentToPractitioner_B_index" ON "_AppointmentToPractitioner"("B");

-- AddForeignKey
ALTER TABLE "practitioner" ADD CONSTRAINT "practitioner_userId_fkey" FOREIGN KEY ("userId") REFERENCES "user"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "practitioner" ADD CONSTRAINT "practitioner_professional_degree_id_fkey" FOREIGN KEY ("professional_degree_id") REFERENCES "professional_degree"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "social_work_enrollment" ADD CONSTRAINT "social_work_enrollment_social_work_id_fkey" FOREIGN KEY ("social_work_id") REFERENCES "social_work"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "social_work_enrollment" ADD CONSTRAINT "social_work_enrollment_patient_id_fkey" FOREIGN KEY ("patient_id") REFERENCES "patient"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "practitioner_social_work" ADD CONSTRAINT "practitioner_social_work_practitioner_id_fkey" FOREIGN KEY ("practitioner_id") REFERENCES "practitioner"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "practitioner_social_work" ADD CONSTRAINT "practitioner_social_work_social_work_id_fkey" FOREIGN KEY ("social_work_id") REFERENCES "social_work"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "patient_practitioner_favorite" ADD CONSTRAINT "patient_practitioner_favorite_patient_id_fkey" FOREIGN KEY ("patient_id") REFERENCES "patient"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "patient_practitioner_favorite" ADD CONSTRAINT "patient_practitioner_favorite_practitioner_id_fkey" FOREIGN KEY ("practitioner_id") REFERENCES "practitioner"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "appointment" ADD CONSTRAINT "appointment_patient_id_fkey" FOREIGN KEY ("patient_id") REFERENCES "patient"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "patient_appointment" ADD CONSTRAINT "patient_appointment_appointment_id_fkey" FOREIGN KEY ("appointment_id") REFERENCES "appointment"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_PractitionerToPractitionerRole" ADD CONSTRAINT "_PractitionerToPractitionerRole_A_fkey" FOREIGN KEY ("A") REFERENCES "practitioner"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_PractitionerToPractitionerRole" ADD CONSTRAINT "_PractitionerToPractitionerRole_B_fkey" FOREIGN KEY ("B") REFERENCES "practitioner_role"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_PractitionerRoleToCategory" ADD CONSTRAINT "_PractitionerRoleToCategory_A_fkey" FOREIGN KEY ("A") REFERENCES "category"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_PractitionerRoleToCategory" ADD CONSTRAINT "_PractitionerRoleToCategory_B_fkey" FOREIGN KEY ("B") REFERENCES "practitioner_role"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_PractitionerToAddress" ADD CONSTRAINT "_PractitionerToAddress_A_fkey" FOREIGN KEY ("A") REFERENCES "address"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_PractitionerToAddress" ADD CONSTRAINT "_PractitionerToAddress_B_fkey" FOREIGN KEY ("B") REFERENCES "practitioner"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_AddressToPatient" ADD CONSTRAINT "_AddressToPatient_A_fkey" FOREIGN KEY ("A") REFERENCES "address"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_AddressToPatient" ADD CONSTRAINT "_AddressToPatient_B_fkey" FOREIGN KEY ("B") REFERENCES "patient"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_AppointmentToPractitioner" ADD CONSTRAINT "_AppointmentToPractitioner_A_fkey" FOREIGN KEY ("A") REFERENCES "appointment"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_AppointmentToPractitioner" ADD CONSTRAINT "_AppointmentToPractitioner_B_fkey" FOREIGN KEY ("B") REFERENCES "practitioner"("id") ON DELETE CASCADE ON UPDATE CASCADE;
