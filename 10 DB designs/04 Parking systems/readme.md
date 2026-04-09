# 🅿️ Parking Management System — Database Design
 
A relational database schema for a parking management platform supporting vehicles, parking slots, reservations, pricing, invoices, and slot status tracking.
 
---
 
## 📦 Tables Overview
 
### 🚗 Vehicle
Stores vehicle and owner information.
 
| Column | Type | Constraints |
|---|---|---|
| id | SERIAL | PRIMARY KEY |
| category_id | INT | FOREIGN KEY → Vehicle_category |
| registration_number | INT | |
| reservation_category | TEXT | FOREIGN KEY → Reservation_category |
| brand | STRING | |
| parking_slip | INT | FOREIGN KEY → Parking_Slip |
| owner_name | STRING | |
| contact | STRING | |
| emergency_contact | STRING | |
| image_path | TEXT | |
| time_in | TIMESTAMP | |
| time_out | TIMESTAMP | |
| is_insurance_opted | BOOLEAN | |
 
---
 
### 🎫 Parking_Slip
Records each parking session for a vehicle.
 
| Column | Type | Constraints |
|---|---|---|
| receipt_id | SERIAL | PRIMARY KEY |
| vehicle_id | INT | FOREIGN KEY → Vehicle |
| category_id | INT | FOREIGN KEY → Parking_category |
| slot | INT | FOREIGN KEY → Parking_slot |
| level | INT | |
| sublevel | INT | |
| floor | INT | |
| contact | TEXT | FOREIGN KEY |
| registration_number | | |
| pricelist | INT | FOREIGN KEY → Pricelist |
| is_electric | BOOLEAN | |
| total | FLOAT | |
| subtotal | FLOAT | |
| tax | FLOAT | |
| payment_id | INT | FOREIGN KEY → Invoice |
| amount_paid | INT | |
| date | TIMESTAMP | |
| vehicle_in | TIMESTAMP | |
| vehicle_out | TIMESTAMP | |
 
---
 
### 💲 Pricelist
Defines pricing rules per parking category.
 
| Column | Type | Constraints |
|---|---|---|
| id | SERIAL | PRIMARY KEY |
| category_id | | FOREIGN KEY → Parking_category |
| base_price | FLOAT | |
| rate_per_hour | FLOAT | |
| max_rate | FLOAT | |
 
---
 
### 🏅 Reservation_category
Defines reserved parking categories and their eligibility rules.
 
| Column | Type | Constraints |
|---|---|---|
| id | SERIAL | PRIMARY KEY |
| reserved_for | TEXT | |
| requirements | TEXT | |
| valid_from | TIMESTAMP | |
| valid_upto | TIMESTAMP | |
| max_discount | INT | |
| max_limit | INT | |
 
---
 
### 🚩 Vehicle_category
Classifies vehicles by dimensions and permissions.
 
| Column | Type | Constraints |
|---|---|---|
| category_id | SERIAL | PRIMARY KEY |
| length | FLOAT | |
| height | FLOAT | |
| broad | FLOAT | |
| category | TEXT | |
| permission_from | TIMESTAMP | |
| permission_upto | TIMESTAMP | |
| is_taxi | BOOLEAN | |
| is_electric | BOOLEAN | |
 
---
 
### 🅿️ Parking_slot
Represents individual physical parking slots.
 
| Column | Type | Constraints |
|---|---|---|
| slot_id | SERIAL | PRIMARY KEY |
| level | INT | |
| sublevel | INT | |
| floor | INT | |
| block_id | INT | |
 
---
 
### 💵 Invoice
Billing record for a parking session.
 
| Column | Type | Constraints |
|---|---|---|
| invoice_id | INT | PRIMARY KEY |
| vehicle_id | INT | FOREIGN KEY → Vehicle |
| description | TEXT | |
| total | INT | |
| subtotal | INT | |
| tax | INT | |
| payment_mode | TEXT | |
| paid_amount | INT | |
| date | TIMESTAMP | |
| personalized_note | TEXT | |
 
---
 
### 🗂️ Parking_category
Defines types of parking areas and their availability.
 
| Column | Type | Constraints |
|---|---|---|
| id | SERIAL | PRIMARY KEY |
| is_for_electric | BOOLEAN | |
| available_from | TIMESTAMP | |
| available_upto | TIMESTAMP | |
| total_capacity | INT | |
| dimension_upto | INT | |
| reserved_for | STRING | |
 
---
 
### 🕐 Slot_status
Tracks real-time occupancy of parking slots.
 
| Column | Type | Constraints |
|---|---|---|
| slot_status_id | INT | PRIMARY KEY |
| floor | INT | |
| level | INT | |
| total_capacity | INT | |
| parked | INT | |
| remaining | INT | |
 
---
 
## 🔗 Relationships
 
```
// Relatioships
 
Vehicle.category_id >  Vehicle_category.category_id // A Vehile will lie unders single category but that category will have many vehicles
 
Vehicle.reservation_category < Reservation_category.id // A vehicle will lie under single reservation category but that category can have many vehicles
 
Vehicle.parking_slip < Parking_Slip.vechicle_id
// A vehicle can have multiple parkiing slips in diff. session but every parking slip will have single vehicle
Parking_Slip.category_id > Parking_category.id // A pariking slip can have multiple categories but all parking category can have multiple Parking slips
 
Parking_Slip.slot > Parking_slot.sloat_id // A Paring slip will have only one parking slot but A parking slot can have multiple slips
 
Parking_Slip.pricelist > Pricelist.id // A single Parking slip will fall unders multiple parking slips but a price list can have multiplle Parking slips
 
Parking_Slip.payment_id - Invoice.invoice_id
// A parking slip will have a single Invoice id mentioned on it and a Particular invoice id there will be a single Parking slip 
Parking_slot.sloat_id > Slot_status.slot_status
// A parking slot will have single Slot status but Slot's will Slot status can be of many Parking Slot's
Pricelist.category_id - Parking_category.id // A pricelist will be of single Parking category and each parking category will be have sinlge price list  
```
 