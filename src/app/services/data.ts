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

// Services
@Injectable({
  providedIn: 'root'
})
export class DataService {

  // Patients
  public patients = [
    {
      patientId: 'PAT2026-GAP-00005',
      email: 'seigipascual@gmail.com',
      password: 'password123',
      name: 'Seigi Pascual',
      userImg: 'assets/image/user1.jpg',
      location: 'Gapan City',
      contactNo: '09123456789'
    },
    {
      patientId: 'PAT2026-BON-00002',
      email: 'jayrmaglaque@gmail.com',
      password: 'password123',
      name: 'Jay-R Maglaque',
      userImg: 'assets/image/user2.jpg',
      location: 'Bongabon',
      contactNo: '09673725172'
    }
  ];

  // RadTech
  public radtechs = [
    {
      email: 'johndoe@gmail.com',
      password: 'radtech123',
      name: 'John Doe, RRT',
      department: ''
    }
  ];

  // Cases
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

  currentPatient: any = this.patients[0];
  currentRadTech: any = this.radtechs[0];

  loginPatient(email: string, pass: string) {
    const found = this.patients.find(p => p.email === email && p.password === pass);
    if (found) {
      this.currentPatient = found;
    }
    return found;
  }

  loginRadTech(email: string, pass: string) {
    const found = this.radtechs.find(r => r.email === email && r.password === pass);
    if (found) {
      this.currentRadTech = found;
    }
    return found;
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
