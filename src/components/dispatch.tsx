import { SegmentedButtons } from "../common/SegmentedButtons.tsx";

const SECTIONS = [
  "Nueva Órden",
  "Órdenes Externas",
  "Desasignadas",
  "Asignadas",
  "Programadas",
  "Completadas",
];

export const Dispatch = () => {
  return (
    <>
      <h1>Dispatch</h1>
      <SegmentedButtons labels={SECTIONS} />
    </>
  );
};
