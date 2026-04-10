# 🛗 Elevator Management System — Database Design
 
A relational database schema for an elevator management platform supporting buildings, blocks, floors, shafts, elevators, requests, logs, maintenance records, and status tracking.
 
---
 
## 📦 Tables Overview
 
### 🏢 Building
Stores building-level information.
 
| Column | Type | Constraints |
|---|---|---|
| id | SERIAL | PRIMARY KEY |
| address | TEXT | |
| no_of_floors | INT | |
| no_of_blocks | INT | |
| no_of_elevators | INT | |
 
---
 
### 🧱 Block
Represents a block within a building.
 
| Column | Type | Constraints |
|---|---|---|
| id | SERIAL | PRIMARY KEY |
| building_id | INT | FOREIGN KEY → Building |
 
---
 
### 🚩 Floor
Represents individual floors within a block.
 
| Column | Type | Constraints |
|---|---|---|
| id | SERIAL | PRIMARY KEY |
| block_id | INT | FOREIGN KEY → Block |
 
---
 
### 🛗 Elevator
Stores elevator details, status, and maintenance linkage.
 
| Column | Type | Constraints |
|---|---|---|
| id | SERIAL | PRIMARY KEY |
| max_capacity | INT | |
| shaft_id | INT | FOREIGN KEY → Shaft |
| installed_at | TIMESTAMP | |
| status_id | INT | FOREIGN KEY → Status |
| maintenance_record | INT | FOREIGN KEY → Maintenance_record |
 
---
 
### 📦 Shaft
Represents the physical shaft an elevator operates in.
 
| Column | Type | Constraints |
|---|---|---|
| shaft_id | INT | PRIMARY KEY |
| block_id | INT | FOREIGN KEY → Block |
| shaft_number | INT | |
 
---
 
### #️⃣ Request
Tracks elevator call requests from floors.
 
| Column | Type | Constraints |
|---|---|---|
| id | SERIAL | PRIMARY KEY |
| elevator_id | INT | FOREIGN KEY → Elevator |
| from_floor | INT | |
| status | INT | FOREIGN KEY → Status |
| to_floor | INT | |
| req_created | TIMESTAMP | |
| req_completed | TIMESTAMP | |
| direction | ENUM | `up`, `down` |
 
---
 
### 📋 Logs
Logs events tied to elevator requests.
 
| Column | Type | Constraints |
|---|---|---|
| id | INT | PRIMARY KEY |
| request_id | INT | FOREIGN KEY → Request |
| log_created | TIMESTAMP | |
 
---
 
### 🕐 Status
Tracks the real-time operational status of an elevator.
 
| Column | Type | Constraints |
|---|---|---|
| id | INT | PRIMARY KEY |
| elevator_id | INT | FOREIGN KEY → Elevator |
| status | ENUM | `idle`, `moving`, `maintenance` |
 
---
 
### 🔧 Maintenance_record
Records maintenance issues and resolution details for elevators and shafts.
 
| Column | Type | Constraints |
|---|---|---|
| id | SERIAL | PRIMARY KEY |
| elevator_id | INT | |
| shaft_id | INT | |
| issue | TEXT | |
| status | ENUM | `resolved`, `assigned`, `under_maintenance` |
| created_at | TIMESTAMP | |
| resolve_at | TIMESTAMP | |
 
---
 
## 🔗 Relationships
 
```
// Relationships
 
Block.id > Building.id  // A Building can have many Block but a blcok will be in single builiding
 
Floor.block_id > Block.id // A Floor will be in single Block but a Block can have many floors 
 
Shaft.block_id > Block.id // Shaft will be in single block but a block can have multiple shafts
 
Elevator.shaft_id - Shaft.shaft_id
// A single elevator will be in single shaft a shaft will have single elevator
 
Request.id > Elevator.id // A Multiple elevator can have many request meanwhile Request will be of Single Elevator
Logs.request_id <> Request.elevator_id
// A Log's can have many requests and we can store a request into multiple Logs
 
Request.status - Status.id       
 
Elevator.maintenance_record < Maintenance_record.id 
```
 
---
 
## ✅ Business Rules & Constraints
 
- A **Building** can have multiple blocks, each block can have multiple floors and shafts
- Each **Elevator** operates in exactly one shaft (one-to-one)
- **Request direction** is restricted to: `up`, `down`
- **Elevator status** is restricted to: `idle`, `moving`, `maintenance`
- **Maintenance status** is restricted to: `resolved`, `assigned`, `under_maintenance`
- A single elevator can accumulate **multiple maintenance records**
- **Logs** can store a single request across multiple log entries for full event history
 
---