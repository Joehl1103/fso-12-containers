import { NewPatientEntry, Patient, NonSensitivePatient } from "../data/types";
declare function getPatients(): NonSensitivePatient[];
declare function getPatientById(id: string): Patient;
declare function addPatient(newPatientEntry: NewPatientEntry): Patient;
declare const _default: {
    getPatients: typeof getPatients;
    getPatientById: typeof getPatientById;
    addPatient: typeof addPatient;
};
export default _default;
//# sourceMappingURL=patientsService.d.ts.map