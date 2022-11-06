-- CreateTable
CREATE TABLE "Car" (
    "id" SERIAL NOT NULL,
    "plate" TEXT NOT NULL,
    "chassis" TEXT NOT NULL,
    "rent" DOUBLE PRECISION NOT NULL,
    "sale" DOUBLE PRECISION NOT NULL,
    "available" BOOLEAN NOT NULL,
    "carMakerId" INTEGER NOT NULL,
    "carModelId" INTEGER NOT NULL,

    CONSTRAINT "Car_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "CarMaker" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "country" TEXT NOT NULL,

    CONSTRAINT "CarMaker_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "CarModel" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "carMakerId" INTEGER NOT NULL,

    CONSTRAINT "CarModel_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "CarModelFeatures" (
    "id" SERIAL NOT NULL,
    "kmpl" INTEGER NOT NULL,
    "cylinders" INTEGER NOT NULL,
    "fuel" TEXT NOT NULL,
    "horsepower" INTEGER NOT NULL,
    "weight" INTEGER NOT NULL,
    "accel" INTEGER NOT NULL,
    "year" INTEGER NOT NULL,
    "carModelId" INTEGER NOT NULL,

    CONSTRAINT "CarModelFeatures_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Car_plate_key" ON "Car"("plate");

-- CreateIndex
CREATE UNIQUE INDEX "Car_chassis_key" ON "Car"("chassis");

-- AddForeignKey
ALTER TABLE "Car" ADD CONSTRAINT "Car_carMakerId_fkey" FOREIGN KEY ("carMakerId") REFERENCES "CarMaker"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Car" ADD CONSTRAINT "Car_carModelId_fkey" FOREIGN KEY ("carModelId") REFERENCES "CarModel"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "CarModel" ADD CONSTRAINT "CarModel_carMakerId_fkey" FOREIGN KEY ("carMakerId") REFERENCES "CarMaker"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "CarModelFeatures" ADD CONSTRAINT "CarModelFeatures_carModelId_fkey" FOREIGN KEY ("carModelId") REFERENCES "CarModel"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
