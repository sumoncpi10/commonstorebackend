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
    "substationCode" TEXT NOT NULL,
    "substationName" TEXT NOT NULL,
    "zonalCode" TEXT NOT NULL,
    "pbsCode" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "substations_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "complain_center" (
    "id" TEXT NOT NULL,
    "complainCode" TEXT NOT NULL,
    "complainName" TEXT NOT NULL,
    "zonalCode" TEXT NOT NULL,
    "pbsCode" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "complain_center_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "users" (
    "id" TEXT NOT NULL,
    "mobileNo" TEXT NOT NULL,
    "password" TEXT NOT NULL,
    "role" TEXT NOT NULL,
    "pbsCode" TEXT NOT NULL,
    "zonalCode" TEXT NOT NULL,
    "substationCode" TEXT NOT NULL,
    "complainCode" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "users_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "employees" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "designation" TEXT NOT NULL,
    "phone" TEXT NOT NULL,
    "address" TEXT NOT NULL,
    "trgId" TEXT NOT NULL,
    "photoUrl" TEXT NOT NULL,
    "signUrl" TEXT NOT NULL,
    "userInfoId" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "employees_pkey" PRIMARY KEY ("id")
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
CREATE TABLE "brand" (
    "id" TEXT NOT NULL,
    "brandName" TEXT NOT NULL,
    "pbsCode" TEXT NOT NULL,
    "zonalCode" TEXT NOT NULL,
    "substationCode" TEXT NOT NULL,
    "complainCode" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "brand_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "model" (
    "id" TEXT NOT NULL,
    "brandName" TEXT NOT NULL,
    "pbsCode" TEXT NOT NULL,
    "zonalCode" TEXT NOT NULL,
    "substationCode" TEXT NOT NULL,
    "complainCode" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "model_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "item_type" (
    "id" TEXT NOT NULL,
    "itemType" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "item_type_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "category" (
    "id" TEXT NOT NULL,
    "categoryName" TEXT NOT NULL,
    "itemTypeId" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "category_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "sub_category" (
    "id" TEXT NOT NULL,
    "subCategoryCame" TEXT NOT NULL,
    "itemTypeId" TEXT NOT NULL,
    "categoryId" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "sub_category_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "capital_item" (
    "id" TEXT NOT NULL,
    "itemName" TEXT NOT NULL,
    "modelNo" TEXT NOT NULL,
    "brand" TEXT NOT NULL,
    "serialNo" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "purchaseNate" TEXT NOT NULL,
    "price" TEXT NOT NULL,
    "warranty" TEXT NOT NULL,
    "identificationNo" TEXT NOT NULL,
    "status" TEXT NOT NULL,
    "pbsCode" TEXT NOT NULL,
    "zonalCode" TEXT NOT NULL,
    "complainId" TEXT NOT NULL,
    "substationId" TEXT NOT NULL,
    "itemTypeId" TEXT NOT NULL,
    "categoryId" TEXT NOT NULL,
    "subCategoryid" TEXT NOT NULL,
    "assignTo" TEXT NOT NULL,
    "supplierId" TEXT NOT NULL,
    "issueById" TEXT NOT NULL,
    "approveById" TEXT NOT NULL,
    "receiveById" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "capital_item_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "revenue_item" (
    "id" TEXT NOT NULL,
    "itemName" TEXT NOT NULL,
    "modelNo" TEXT NOT NULL,
    "brand" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "purchaseNate" TEXT NOT NULL,
    "Price" TEXT NOT NULL,
    "warranty" TEXT NOT NULL,
    "status" TEXT NOT NULL,
    "pbsCode" TEXT NOT NULL,
    "zonalCode" TEXT NOT NULL,
    "complainId" TEXT NOT NULL,
    "substationId" TEXT NOT NULL,
    "itemTypeId" TEXT NOT NULL,
    "categoryId" TEXT NOT NULL,
    "subCategoryid" TEXT NOT NULL,
    "assignTo" TEXT NOT NULL,
    "supplierId" TEXT NOT NULL,
    "issueById" TEXT NOT NULL,
    "approveById" TEXT NOT NULL,
    "receiveById" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "revenue_item_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "suppliers" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "address" TEXT NOT NULL,
    "phone" TEXT NOT NULL,
    "pbsCode" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "suppliers_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "role" (
    "id" TEXT NOT NULL,
    "employee" TEXT NOT NULL,
    "storeInCharge" TEXT NOT NULL,
    "approve" TEXT NOT NULL,
    "zonalHead" TEXT NOT NULL,
    "admin" TEXT NOT NULL,
    "superAdmin" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "role_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "survicing" (
    "id" TEXT NOT NULL,
    "identificationNo" TEXT NOT NULL,
    "itemType" TEXT NOT NULL,
    "category" TEXT NOT NULL,
    "subCategory" TEXT NOT NULL,
    "cost" TEXT NOT NULL,
    "supplier" TEXT NOT NULL,
    "survicingDate" TEXT NOT NULL,
    "supervisedBy" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "survicing_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "pbs_pbsCode_key" ON "pbs"("pbsCode");

-- CreateIndex
CREATE UNIQUE INDEX "employees_userInfoId_key" ON "employees"("userInfoId");

-- AddForeignKey
ALTER TABLE "zonals" ADD CONSTRAINT "zonals_pbsCode_fkey" FOREIGN KEY ("pbsCode") REFERENCES "pbs"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "substations" ADD CONSTRAINT "substations_zonalCode_fkey" FOREIGN KEY ("zonalCode") REFERENCES "zonals"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "substations" ADD CONSTRAINT "substations_pbsCode_fkey" FOREIGN KEY ("pbsCode") REFERENCES "pbs"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "complain_center" ADD CONSTRAINT "complain_center_zonalCode_fkey" FOREIGN KEY ("zonalCode") REFERENCES "zonals"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "complain_center" ADD CONSTRAINT "complain_center_pbsCode_fkey" FOREIGN KEY ("pbsCode") REFERENCES "pbs"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "users" ADD CONSTRAINT "users_pbsCode_fkey" FOREIGN KEY ("pbsCode") REFERENCES "pbs"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "users" ADD CONSTRAINT "users_zonalCode_fkey" FOREIGN KEY ("zonalCode") REFERENCES "zonals"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "users" ADD CONSTRAINT "users_substationCode_fkey" FOREIGN KEY ("substationCode") REFERENCES "substations"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "users" ADD CONSTRAINT "users_complainCode_fkey" FOREIGN KEY ("complainCode") REFERENCES "complain_center"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "employees" ADD CONSTRAINT "employees_userInfoId_fkey" FOREIGN KEY ("userInfoId") REFERENCES "users"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "designations" ADD CONSTRAINT "designations_departmentId_fkey" FOREIGN KEY ("departmentId") REFERENCES "departments"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "brand" ADD CONSTRAINT "brand_pbsCode_fkey" FOREIGN KEY ("pbsCode") REFERENCES "pbs"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "brand" ADD CONSTRAINT "brand_zonalCode_fkey" FOREIGN KEY ("zonalCode") REFERENCES "zonals"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "brand" ADD CONSTRAINT "brand_substationCode_fkey" FOREIGN KEY ("substationCode") REFERENCES "substations"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "brand" ADD CONSTRAINT "brand_complainCode_fkey" FOREIGN KEY ("complainCode") REFERENCES "complain_center"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "model" ADD CONSTRAINT "model_pbsCode_fkey" FOREIGN KEY ("pbsCode") REFERENCES "pbs"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "model" ADD CONSTRAINT "model_zonalCode_fkey" FOREIGN KEY ("zonalCode") REFERENCES "zonals"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "model" ADD CONSTRAINT "model_substationCode_fkey" FOREIGN KEY ("substationCode") REFERENCES "substations"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "model" ADD CONSTRAINT "model_complainCode_fkey" FOREIGN KEY ("complainCode") REFERENCES "complain_center"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "category" ADD CONSTRAINT "category_itemTypeId_fkey" FOREIGN KEY ("itemTypeId") REFERENCES "item_type"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "sub_category" ADD CONSTRAINT "sub_category_itemTypeId_fkey" FOREIGN KEY ("itemTypeId") REFERENCES "item_type"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "sub_category" ADD CONSTRAINT "sub_category_categoryId_fkey" FOREIGN KEY ("categoryId") REFERENCES "category"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "capital_item" ADD CONSTRAINT "capital_item_pbsCode_fkey" FOREIGN KEY ("pbsCode") REFERENCES "pbs"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "capital_item" ADD CONSTRAINT "capital_item_zonalCode_fkey" FOREIGN KEY ("zonalCode") REFERENCES "zonals"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "capital_item" ADD CONSTRAINT "capital_item_complainId_fkey" FOREIGN KEY ("complainId") REFERENCES "complain_center"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "capital_item" ADD CONSTRAINT "capital_item_substationId_fkey" FOREIGN KEY ("substationId") REFERENCES "substations"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "capital_item" ADD CONSTRAINT "capital_item_itemTypeId_fkey" FOREIGN KEY ("itemTypeId") REFERENCES "item_type"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "capital_item" ADD CONSTRAINT "capital_item_categoryId_fkey" FOREIGN KEY ("categoryId") REFERENCES "category"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "capital_item" ADD CONSTRAINT "capital_item_subCategoryid_fkey" FOREIGN KEY ("subCategoryid") REFERENCES "sub_category"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "capital_item" ADD CONSTRAINT "capital_item_assignTo_fkey" FOREIGN KEY ("assignTo") REFERENCES "users"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "capital_item" ADD CONSTRAINT "capital_item_supplierId_fkey" FOREIGN KEY ("supplierId") REFERENCES "suppliers"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "revenue_item" ADD CONSTRAINT "revenue_item_pbsCode_fkey" FOREIGN KEY ("pbsCode") REFERENCES "pbs"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "revenue_item" ADD CONSTRAINT "revenue_item_zonalCode_fkey" FOREIGN KEY ("zonalCode") REFERENCES "zonals"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "revenue_item" ADD CONSTRAINT "revenue_item_complainId_fkey" FOREIGN KEY ("complainId") REFERENCES "complain_center"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "revenue_item" ADD CONSTRAINT "revenue_item_substationId_fkey" FOREIGN KEY ("substationId") REFERENCES "substations"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "revenue_item" ADD CONSTRAINT "revenue_item_itemTypeId_fkey" FOREIGN KEY ("itemTypeId") REFERENCES "item_type"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "revenue_item" ADD CONSTRAINT "revenue_item_categoryId_fkey" FOREIGN KEY ("categoryId") REFERENCES "category"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "revenue_item" ADD CONSTRAINT "revenue_item_subCategoryid_fkey" FOREIGN KEY ("subCategoryid") REFERENCES "sub_category"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "revenue_item" ADD CONSTRAINT "revenue_item_assignTo_fkey" FOREIGN KEY ("assignTo") REFERENCES "users"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "revenue_item" ADD CONSTRAINT "revenue_item_supplierId_fkey" FOREIGN KEY ("supplierId") REFERENCES "suppliers"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "suppliers" ADD CONSTRAINT "suppliers_pbsCode_fkey" FOREIGN KEY ("pbsCode") REFERENCES "pbs"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
