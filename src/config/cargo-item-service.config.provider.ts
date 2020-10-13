import {ObjectFactory} from 'typescript-ioc';

const baseUrl: string = "https://cargo-booking-liberty-api-kafkaimplement-bluecargo-dev-kafka.appdev-cloudnative-ocp43-6fb0b86391cd68c8282858623a1dddff-0000.eu-gb.containers.appdomain.cloud";

export const cargoItemConfigFactory: ObjectFactory = () => ({
  baseUrl,
});