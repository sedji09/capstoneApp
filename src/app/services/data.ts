import { Injectable } from '@angular/core';

export interface RadiologyCase {
  id: string;
  caseNumber: string;
  patientId: string;
  patientName: string;
  modality: string;
  date: string;
  status: 'Pending' | 'Completed' | 'STAT';
  isEmergency: boolean;
  findings: string;
}

@Injectable({
  providedIn: 'root'
})
export class DataService {

  // Static Data: Patients
  public patients = [
    {
      patientId: 'PAT2026-GAP-00005',
      email: 'juandelacruz@gmail.com',
      password: 'password123',
      name: 'Juan Dela Cruz',
      userImg: 'assets/image/user1.jpg',
      location: 'Gapan City',
      contactNo: '09123456789'
    },
    {
      patientId: 'PAT2026-BON-00002',
      email: 'mariaclara@gmail.com',
      password: 'password123',
      name: 'Maria Clara',
      userImg: 'assets/image/user2.jpg',
      location: 'Bongabon',
      contactNo: '09673725172'
    }
  ];

  // Static Data: RadTech
  public radtechs = [
    {
      email: 'johndoe@gmail.com',
      password: 'radtech123',
      name: 'John Doe, RRT',
      department: 'Radiology'
    }
  ];

  // Static Data: Radiology Cases
  public cases: RadiologyCase[] = [
    {
      id: '1',
      caseNumber: 'GAP2026-00001',
      patientId: 'PAT2026-GAP-00005',
      patientName: 'Juan Dela Cruz',
      modality: 'Chest X-Ray',
      date: '2026-08-25',
      status: 'STAT',
      isEmergency: true,
      findings: 'Hazy opacity on right lung lobe. Immediate attention advised.'
    },
    {
      id: '2',
      caseNumber: 'BON2026-00001',
      patientId: 'PAT2026-BON-00002',
      patientName: 'Maria Clara',
      modality: 'Chest X-Ray',
      date: '2026-08-25',
      status: 'Completed',
      isEmergency: false,
      findings: 'Clear lung fields. Normal chest radiograph.'
    },
    {
      id: '3',
      caseNumber: 'GAP2026-00003',
      patientId: 'PAT2026-GAP-00005',
      patientName: 'Juan Dela Cruz',
      modality: 'Spine X-Ray',
      date: '2026-08-24',
      status: 'Pending',
      isEmergency: false,
      findings: 'Mild degenerative changes at lumbar area.'
    }
  ];

  // Service Methods
  loginPatient(email: string, pass: string) {
    return this.patients.find(p => p.email === email && p.password === pass);
  }

  loginRadTech(email: string, pass: string) {
    return this.radtechs.find(
      r => r.email === email && r.password === pass
    );
  }

  getPatient(email: string) {
    return this.patients.find(p => p.email === email);
  }

  getCases() {
    return this.cases;
  }

  getPatientCases(patientId: string) {
    return this.cases.filter(c => c.patientId === patientId);
  }

  updateStatus(caseId: string, newStatus: 'Pending' | 'Completed' | 'STAT') {
    const item = this.cases.find(c => c.id === caseId);
    if (item) {
      item.status = newStatus;
      item.isEmergency = newStatus === 'STAT';
    }
  }
}
