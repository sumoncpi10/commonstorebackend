-- CreateTable
CREATE TABLE "pbs" (
    "id" TEXT NOT NULL,
    "pbsCode" TEXT NOT NULL,
    "pbsName" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "pbs_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "zonals" (
    "id" TEXT NOT NULL,
    "zonalCode" TEXT NOT NULL,
    "zonalName" TEXT NOT NULL,
    "pbsCode" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "zonals_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "substations" (
    "id" TEXT NOT NULL,
    "ss_code" TEXT NOT NULL,
    "ss_name" TEXT NOT NULL,
    "zonal_code" TEXT NOT NULL,
    "pbs_code" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "substations_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "complain_center" (
    "id" TEXT NOT NULL,
    "cc_code" TEXT NOT NULL,
    "cc_name" TEXT NOT NULL,
    "zonal_code" TEXT NOT NULL,
    "pbs_code" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "complain_center_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "users" (
    "id" TEXT NOT NULL,
    "mobile_no" TEXT NOT NULL,
    "password" TEXT NOT NULL,
    "role" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "users_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "employee_info" (
    "id" TEXT NOT NULL,
    "user_id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "designation" TEXT NOT NULL,
    "phone" TEXT NOT NULL,
    "address" TEXT NOT NULL,
    "trg_id" TEXT NOT NULL,
    "photo_url" TEXT NOT NULL,
    "sign_url" TEXT NOT NULL,
    "pbs_code" TEXT NOT NULL,
    "zonal_code" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "employee_info_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "departments" (
    "id" TEXT NOT NULL,
    "title" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "departments_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "designations" (
    "id" TEXT NOT NULL,
    "title" TEXT NOT NULL,
    "departmentId" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "designations_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "item_type" (
    "id" TEXT NOT NULL,
    "item_type" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "item_type_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "category" (
    "id" TEXT NOT NULL,
    "category_name" TEXT NOT NULL,
    "item_type" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "category_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "sub_category" (
    "id" TEXT NOT NULL,
    "sub_category_name" TEXT NOT NULL,
    "item_type" TEXT NOT NULL,
    "category_id" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "sub_category_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "capital_item" (
    "id" TEXT NOT NULL,
    "item_name" TEXT NOT NULL,
    "model_no" TEXT NOT NULL,
    "brand" TEXT NOT NULL,
    "serial_no" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "purchase_date" TEXT NOT NULL,
    "price" TEXT NOT NULL,
    "warranty" TEXT NOT NULL,
    "pbs_code" TEXT NOT NULL,
    "zonal_code" TEXT NOT NULL,
    "item_type" TEXT NOT NULL,
    "category" TEXT NOT NULL,
    "sub_category" TEXT NOT NULL,
    "assign_to" TEXT NOT NULL,
    "identification_no" TEXT NOT NULL,
    "supplier" TEXT NOT NULL,
    "status" TEXT NOT NULL,
    "issue_by" TEXT NOT NULL,
    "approve_by" TEXT NOT NULL,
    "receive_by" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "capital_item_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "revenue_item" (
    "id" TEXT NOT NULL,
    "item_name" TEXT NOT NULL,
    "model_no" TEXT NOT NULL,
    "brand" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "purchase_date" TEXT NOT NULL,
    "Price" TEXT NOT NULL,
    "warranty" TEXT NOT NULL,
    "pbs_code" TEXT NOT NULL,
    "zonal_code" TEXT NOT NULL,
    "item_type" TEXT NOT NULL,
    "category" TEXT NOT NULL,
    "sub_category" TEXT NOT NULL,
    "assign_to" TEXT NOT NULL,
    "supplier" TEXT NOT NULL,
    "status" TEXT NOT NULL,
    "issue_by" TEXT NOT NULL,
    "approve_by" TEXT NOT NULL,
    "receive_by" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "revenue_item_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "pbs_pbsCode_key" ON "pbs"("pbsCode");

-- AddForeignKey
ALTER TABLE "zonals" ADD CONSTRAINT "zonals_pbsCode_fkey" FOREIGN KEY ("pbsCode") REFERENCES "pbs"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
