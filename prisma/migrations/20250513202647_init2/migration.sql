-- AlterTable
ALTER TABLE "Appartment" ALTER COLUMN "description" DROP NOT NULL;

-- AlterTable
ALTER TABLE "Device" ALTER COLUMN "description" DROP NOT NULL,
ALTER COLUMN "status" DROP NOT NULL,
ALTER COLUMN "attributes" DROP NOT NULL;

-- AlterTable
ALTER TABLE "DeviceType" ALTER COLUMN "description" DROP NOT NULL,
ALTER COLUMN "attributes" DROP NOT NULL;

-- AlterTable
ALTER TABLE "Room" ALTER COLUMN "description" DROP NOT NULL;

-- AlterTable
ALTER TABLE "Sensor" ALTER COLUMN "description" DROP NOT NULL,
ALTER COLUMN "attributes" DROP NOT NULL,
ALTER COLUMN "value" DROP NOT NULL;

-- AlterTable
ALTER TABLE "SensorType" ALTER COLUMN "description" DROP NOT NULL,
ALTER COLUMN "attributes" DROP NOT NULL;
