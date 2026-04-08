# 🏥 Healthcare Management System — Database Design
 
A relational database schema for a healthcare platform supporting patients, doctors, appointments, consultations, diagnostics, reports, invoices, and status tracking.
 
---
 
## 📦 Tables Overview
 
### 👤 Patient
Stores patient profile and medical information.
 
| Column | Type | Constraints |
|---|---|---|
| id | SERIAL | PRIMARY KEY |
| user_id | INT | FOREIGN KEY → User |
| first_name | VARCHAR(50) | |
| last_name | VARCHAR(50) | |
| email | TEXT | FOREIGN KEY → User |
| address | INT | FOREIGN KEY → Address |
| dob | TIMESTAMP | |
| age | INT | |
| gender | TEXT | |
| blood_group | TEXT | |
| height | INT | |
| weight | INT | |
| mobile | TEXT | |
| emergency_contact | STRING | |
| aadhar_no | STRING | |
| policy_opted | BOOLEAN | |
| policy_no | STRING | |
| image_path | TEXT | |
| patient_type | TEXT | |
| clinical_record_path | TEXT | |
 
---
 
### 🩺 Doctor
Stores doctor profile, credentials, and availability.
 
| Column | Type | Constraints |
|---|---|---|
| id | SERIAL | PRIMARY KEY |
| user_id | INT | FOREIGN KEY → User |
| first_name | VARCHAR(50) | |
| last_name | VARCHAR(50) | |
| email | TEXT | FOREIGN KEY → User |
| address | INT | FOREIGN KEY → Address |
| age | INT | |
| gender | TEXT | |
| blood_group | TEXT | |
| mobile | TEXT | |
| emergency_contact | TEXT | |
| aadhar_no | STRING | |
| experience | INT | |
| qualification | STRING | |
| registered_id | STRING | |
| certificate_path | TEXT | |
| dept | TEXT | |
| dept_no | TEXT | |
| available_on | ENUM[] | |
 
---
 
### 🏠 Address
Stores address details.
 
| Column | Type | Constraints |
|---|---|---|
| id | SERIAL | PRIMARY KEY |
| city | STRING | |
| house_no | INT | |
| pin | INT | |
| district | STRING | |
| state | STRING | |
| country | STRING | |
 
---
 
### 🔐 User
Handles authentication and access control.
 
| Column | Type | Constraints |
|---|---|---|
| id | INT | PRIMARY KEY |
| email | VARCHAR(50) | UNIQUE |
| mobile_no | STRING | |
| hashed_password | STRING | |
| reset_password_token | STRING | |
| token_expire | TIMESTAMP | |
| access_token | STRING | |
| can_book_appointment | BOOLEAN | |
| can_book_consultations | BOOLEAN | |
| can_book_diagnostic | BOOLEAN | |
| can_handle_payments | BOOLEAN | |
| can_view_reports | BOOLEAN | |
| created_at | TIMESTAMP | |
| updated_at | TIMESTAMP | |
 
---
 
### 📅 Appointment
Tracks patient appointments with doctors.
 
| Column | Type | Constraints |
|---|---|---|
| id | INT | PRIMARY KEY |
| patient_id | INT | FOREIGN KEY → Patient |
| status_id | INT | FOREIGN KEY → Status |
| department | STRING | |
| department_id | INT | |
| cabin_no | INT | |
| doctor_id | INT | FOREIGN KEY → Doctor |
| symptoms | TEXT | |
| date_of_book | TIMESTAMP | |
| consultation_date | TIMESTAMP | |
| had_previous_visit | BOOLEAN | |
| payment_id | INT | FOREIGN KEY → Invoice |
| signed_by_path | TEXT | |
| created_at | TIMESTAMP | |
| updated_at | TIMESTAMP | |
 
---
 
### 🔄 Status
Tracks the current status of an appointment or diagnosis.
 
| Column | Type | Constraints |
|---|---|---|
| id | INT | PRIMARY KEY |
| current_status | TEXT | |
| is_cancelled | BOOLEAN | |
| is_rerefered | BOOLEAN | |
| re_refered_to | INT | FOREIGN KEY |
| note | TEXT | |
 
---
 
### 💬 Consultation
Records clinical consultation details between doctor and patient.
 
| Column | Type | Constraints |
|---|---|---|
| id | INT | PRIMARY KEY |
| appointment_id | INT | FOREIGN KEY → Appointment |
| patient_name | STRING | FOREIGN KEY → Patient |
| patient_id | INT | FOREIGN KEY → Patient |
| doctor_name | STRING | FOREIGN KEY → Doctor |
| doctor_id | INT | FOREIGN KEY → Doctor |
| initial_assessment | TIMESTAMP | |
| clinical_history | TEXT | |
| examination_finding | TEXT | |
| diagnosis | TEXT | |
| treatment | TEXT | |
| follow_up_advice | TEXT | |
| diagnostment_id | INT | FOREIGN KEY → Diagnosis |
| reports_path | TEXT | FOREIGN KEY |
| referred_to | TEXT | |
| referred_by | TEXT | |
| consultation_time | TIMESTAMP | |
 
---
 
### 🔬 Diagnosis
Stores lab/diagnostic test details for a patient.
 
| Column | Type | Constraints |
|---|---|---|
| id | INT | PRIMARY KEY |
| patient_name | STRING | FOREIGN KEY → Patient |
| age | INT | FOREIGN KEY → Patient |
| gender | TEXT | FOREIGN KEY → Patient |
| tests_id | INT | FOREIGN KEY → Register_test |
| final_report_id | INT | FOREIGN KEY → Report |
| appointment_id | INT | FOREIGN KEY → Appointment |
| consultation_id | INT | FOREIGN KEY → Consultation |
| referred_by | TEXT | |
| sample_type | TEXT | |
| barcode_url | TEXT | |
| sample_collected_on | TIMESTAMP | |
| sample_received_on | TIMESTAMP | |
| report_generated_on | TIMESTAMP | FOREIGN KEY |
| sample_temperature | TIMESTAMP | |
| finded_value | INT | |
| report_status | INT | FOREIGN KEY → Status |
| health_score | INT | |
| total_bill | INT | |
| bill_id | INT | FOREIGN KEY → Invoice |
 
---
 
### 🧪 Register_test
Master list of registered diagnostic tests.
 
| Column | Type | Constraints |
|---|---|---|
| test_id | INT | PRIMARY KEY |
| test_method | STRING | |
| test_machine | STRING | |
| test_department | STRING | |
| test_reference | STRING | |
| test_remarks | STRING | |
 
---
 
### 📄 Report
Stores generated diagnostic reports.
 
| Column | Type | Constraints |
|---|---|---|
| report_id | SERIAL | PRIMARY KEY |
| test_name | STRING | |
| sample_collected_on | TIMESTAMP | FOREIGN KEY |
| sample_received_on | TIMESTAMP | FOREIGN KEY |
| report_generated_on | TIMESTAMP | |
| sample_temperature | TIMESTAMP | FOREIGN KEY |
| finded_value | INT | |
| unit | INT | |
 
---
 
### 💵 Invoice
Billing record for appointments and diagnostics.
 
| Column | Type | Constraints |
|---|---|---|
| invoice_id | INT | PRIMARY KEY |
| patient_id | INT | FOREIGN KEY → Patient |
| description | TEXT | |
| total | INT | |
| subtotal | INT | |
| tax | INT | |
| payment_mode | TEXT | |
| paid_amount | INT | |
| balance_due | INT | |
| date | TIMESTAMP | |
| due_date | TIMESTAMP | |
| personalized_note | TEXT | |
 
---
 
## 🔗 Relationships
 
```
// Relationships
 
User.id - Patient.user_id // A single Patient will have a single user id and at one Userid there will be a single patient
 
User.id - Doctor.user_id // A single Doctor will have a single User id and at one User is there will be single Doctor
Patient.email - User.email // A single Patient will have single email and on single email there will be single Patient
Doctor.email - User.email // A user email will only belong to single Doctor and A doctor will have single email
 
Appointment.patient_id > Patient.id // A single Patient can have multiple Appointement but on single appointement there will be single patient
 
Appointment.status_id - Status.id
 
Appointment.doctor_id <> Doctor.id // A single Appointment id can have multiple doctor's and Doctor can have multiple Appointment's 
 
Appointment.payment_id < Invoice.invoice_id
 // A Single Appointment can have Multiple Invoices but Multiple Invoice's can be related to single Appointment
 
Consultation.appointment_id > Appointment.id // Many Consulatations can be related to single Appointmentt and a Single Appointemnt can have multiple consultations 
 
Consultation.patient_id - Appointment.patient_id
 
Consultation.id <> Doctor.id // A Single consultation can have multiple doctors and Multiple doctors can be related to multiple consultations
 
Consultation.diagnostment_id < Diagnosis.id // A single Consultations can multiple consultations's but on single Diagnosis there will be single Consultation  
 
Diagnosis.final_report_id < Report.report_id // A single Diagnosis can have multiple reports but on single Report there will be single Dignoisis id
 
Diagnosis.appointment_id > Appointment.id // Multiple Diagnosis will have single Appointment but Multiple Appointment there will be single Diagnosis id
 
Diagnosis.consultaion_id > Consultation.id // Multiple Diagnosis will have single Consultations but Multiple Multiple Consultation there will be single Diagnosis id
 
Diagnosis.report_status - Status.id
 
Diagnosis.bill_id - Invoice.invoice_id // A single Diagnosis will have single Invoice but Multiple Invoice will have single invoice
 
Diagnosis.tests_id <> Register_test.test_id  // A single Diagnosis will be have multiple test But that servide can also be in Multiple Diagnosis       
 
Patient.address - Address.id
Doctor.address - Address.id 
```