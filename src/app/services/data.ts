import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  // Static Database
  public patients = [
    { 
      patientId: 'PAT2026-GAP-00001',
      email: 'juandelacruz@gmail.com', 
      password: 'password123', 
      name: 'Juan Dela Cruz',
      userImg: 'assets/image/user1.jpg',
      location: 'Gapan',
      contactNo: '09123456789',
    },
    { 
      patientId: 'PAT2026-GAP-00002',
      email: 'mariaclara@gmail.com', 
      password: 'password123', 
      name: 'Maria Clara',
      userImg: 'assets/image/user2.jpg',
      location: 'Bongabon',
      contactNo: '09673725172', 
    }
  ];

  public radiologists = [
    { 
      email: 'johndoe@gmail.com', 
      password: 'radiologist123', 
      name: 'John Doe', 
      department: 'X-Ray' 
    }
  ];

  constructor() { }

  // Check kung may patient sa database
  loginPatient(email: string, pass: string) {
    const found = this.patients.find(p => p.email === email && p.password === pass);
    return found; // Ibabalik yung data kung meron, undefined kung wala
  }

  // Check kung may radiologist sa database
  loginRadiologist(email: string, pass: string) {
    const found = this.radiologists.find(r => r.email === email && r.password === pass);
    return found;
  }

  // Helper para kunin yung patient by ID mamaya pag nasa portal na
  getPatient(email: string) {
    return this.patients.find(p => p.email === email);
  }
}
