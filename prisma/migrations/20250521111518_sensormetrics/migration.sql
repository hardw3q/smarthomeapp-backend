-- CreateTable
CREATE TABLE "SensorMetrics" (
    "datetime" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "value" JSONB NOT NULL,
    "sensorId" INTEGER NOT NULL,

    CONSTRAINT "SensorMetrics_pkey" PRIMARY KEY ("datetime")
);

-- AddForeignKey
ALTER TABLE "SensorMetrics" ADD CONSTRAINT "SensorMetrics_sensorId_fkey" FOREIGN KEY ("sensorId") REFERENCES "Sensor"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
