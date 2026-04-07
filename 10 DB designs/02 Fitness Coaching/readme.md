# 🏋️ Fitness Coaching Platform — Database Design
 
A relational database schema for a fitness coaching platform supporting clients, coaches, subscriptions, plans, sessions, invoices, reminders, check-ins, and more.
 
---
 
## 📦 Tables Overview
 
### 👤 Client
Stores client account and profile information.
 
| Column | Type | Constraints |
|---|---|---|
| client_id | SERIAL | PRIMARY KEY |
| first_name | STRING | |
| last_name | STRING | |
| email | STRING | UNIQUE |
| mobile | STRING | UNIQUE |
| whatsapp | STRING | |
| avatar | STRING | |
| height | INT | |
| weight | INT | |
| gender | TEXT | |
| age | INT | |
| subscription_id | INT | FOREIGN KEY → Subscription |
| any_disease | TEXT | |
| address | INT | FOREIGN KEY → Address |
| hashed_password | STRING | |
| reset_password_token | STRING | |
| reset_password_timer | TIMESTAMP | |
| access_token | STRING | |
| is_verified | BOOLEAN | |
| created_at | TIMESTAMP | |
| updated_at | TIMESTAMP | |
| socials | TEXT | |
 
---
 
### 🧑‍💼 Coach
Stores coach profile, credentials, and preferences.
 
| Column | Type | Constraints |
|---|---|---|
| Coach_id | SERIAL | PRIMARY KEY |
| first_name | STRING | |
| last_name | STRING | |
| qualification | STRING | |
| experience | INT | |
| client_coached | INT | |
| certificate_id | INT | |
| Achivement | BOOLEAN | |
| prefer_check_in_time | TIMESTAMP | |
| prefer_check_out_time | TIMESTAMP | |
| email | STRING | UNIQUE |
| mobile | STRING | UNIQUE |
| whatsapp | STRING | |
| avatar | STRING | |
| address | INT | FOREIGN KEY → Address |
| hashed_password | STRING | |
| reset_password_token | STRING | |
| reset_password_timer | TIMESTAMP | |
| access_token | STRING | |
| is_verified | BOOLEAN | |
| created_at | TIMESTAMP | |
| updated_at | TIMESTAMP | |
| socials | TEXT | |
 
---
 
### 💰 Subscription
Links clients, coaches, and plans into an active subscription.
 
| Column | Type | Constraints |
|---|---|---|
| id | INT | PRIMARY KEY |
| plan_id | INT | FOREIGN KEY → Plan_opted |
| client_id | INT | FOREIGN KEY → Client |
| trainer_id | INT | FOREIGN KEY → Coach |
| invoice_id | INT | FOREIGN KEY → Invoice |
| joining | TIMESTAMP | |
| expiring | TIMESTAMP | |
 
---
 
### 🧾 Invoice
Detailed billing record for a subscription.
 
| Column | Type | Constraints |
|---|---|---|
| invoice_id | INT | PRIMARY KEY |
| client_id | INT | FOREIGN KEY → Client |
| coach_id | INT | FOREIGN KEY → Coach |
| subscription_id | INT | FOREIGN KEY → Subscription |
| address_id | INT | FOREIGN KEY → Address |
| discount | INT | |
| coupon_id | INT | FOREIGN KEY |
| description | TEXT | |
| rider_opted | INT | FOREIGN KEY → Rider |
| total | INT | |
| subtotal | INT | |
| tax | | |
| payment_mode | ENUM | `upi`, `debit-card`, `credit-card`, `emi`, `netBanking` |
| paid_amount | INT | |
| balance_due | INT | |
| date | TIMESTAMP | |
| due_date | TIMESTAMP | |
| personalized_note | TEXT | |
 
---
 
### 🔔 Reminder
Handles automated reminders for sessions and check-ins.
 
| Column | Type | Constraints |
|---|---|---|
| reminder_id | SERIAL | PRIMARY KEY |
| customer_id | INT | FOREIGN KEY → Client |
| is_session | BOOLEAN | |
| session_id | INT | FOREIGN KEY → Session |
| check_in_id | INT | FOREIGN KEY → CheckIn |
| is_personalized | BOOLEAN | |
| reminder_type | ENUM | `basic`, `plus` |
| message_body | TEXT | |
| sent_at | TIMESTAMP | |
| channel_used | TEXT | |
| error_message | | |
 
---
 
### 📞 Session
Tracks live or recorded coaching sessions.
 
| Column | Type | Constraints |
|---|---|---|
| id | INT | PRIMARY KEY |
| session_type | ENUM | `live`, `recorded` |
| is_mass_session | BOOLEAN | |
| thumbnail | TEXT | |
| trainer_id | INT | FOREIGN KEY → Coach |
| client_id | INT | FOREIGN KEY → Client |
| start_at | TIMESTAMP | |
| end_at | TIMESTAMP | |
| plan_id | INT | FOREIGN KEY |
| platform_used | TEXT | |
| platform_credential | TEXT | |
| no_of_participant | INT | |
| max_no_of_participant | INT | |
 
---
 
### 📄 Rider
Add-on services that can be attached to an invoice.
 
| Column | Type | Constraints |
|---|---|---|
| rider_id | INT | PRIMARY KEY |
| service_id | INT | FOREIGN KEY → Services |
| description | TEXT | |
| price | INT | |
 
---
 
### 🎁 Services
Master list of all services offered on the platform.
 
| Column | Type | Constraints |
|---|---|---|
| id | INT | PRIMARY KEY |
| service_image | TEXT | |
| description | TEXT | |
| rating | INT | |
| review | TEXT | |
| created_by | STRING | |
| is_in_freetier | BOOLEAN | |
| is_in_bheem | BOOLEAN | |
| is_in_Yudhistir | BOOLEAN | |
| is_in_arjun | BOOLEAN | |
 
---
 
### 🆓 Freetier
Free tier plan details.
 
| Column | Type | Constraints |
|---|---|---|
| id | INT | PRIMARY KEY |
| serice_offered | INT | FOREIGN KEY → Services |
| no_of_client | INT | |
| no_of_coach | INT | |
| coupon | INT | |
 
---
 
### 💎 Bheem (Silver Plan)
Silver-tier subscription plan.
 
| Column | Type | Constraints |
|---|---|---|
| id | INT | PRIMARY KEY |
| services_offered | INT | FOREIGN KEY → Services |
| happy_client | INT | |
| no_of_coach | INT | |
| image | TEXT | |
| price | INT | |
| no_of_sessions | INT | |
| duration | TEXT | |
| discount_avalable | BOOLEAN | |
| description | TEXT | |
| testimonial | INT | FOREIGN KEY |
| is_coupon_available | BOOLEAN | |
 
---
 
### 🥇 Yudisthir (Gold Plan)
Gold-tier subscription plan.
 
| Column | Type | Constraints |
|---|---|---|
| id | INT | PRIMARY KEY |
| services_offered | INT | FOREIGN KEY → Services |
| happy_client | INT | |
| no_of_coach | INT | |
| image | TEXT | |
| price | INT | |
| no_of_sessions | INT | |
| duration | TEXT | |
| discount_avalable | BOOLEAN | |
| description | TEXT | |
| testimonial | INT | FOREIGN KEY |
| is_coupon_available | BOOLEAN | |
 
---
 
### 🏹 Arjun (Blue Plan)
Premium blue-tier subscription plan.
 
| Column | Type | Constraints |
|---|---|---|
| id | INT | PRIMARY KEY |
| services_offered | INT | FOREIGN KEY → Services |
| happy_client | INT | |
| no_of_coach | INT | |
| image | TEXT | |
| price | INT | |
| no_of_sessions | INT | |
| duration | TEXT | |
| discount_avalable | BOOLEAN | |
| description | TEXT | |
| testimonial | INT | FOREIGN KEY |
| is_coupon_available | BOOLEAN | |
 
---
 
### 🏠 Address
Stores address details for both clients and coaches.
 
| Column | Type | Constraints |
|---|---|---|
| id | SERIAL | PRIMARY KEY |
| customer_id | | FOREIGN KEY → Client |
| trainer_id | | FOREIGN KEY → Coach |
| city | STRING | |
| house_no | INT | |
| pin | INT | |
| district | STRING | |
| state | STRING | |
| country | STRING | |
 
---
 
### 📈 CheckIn
Tracks client fitness check-in data over time.
 
| Column | Type | Constraints |
|---|---|---|
| check_in_id | INT | PRIMARY KEY |
| client_id | INT | FOREIGN KEY → Client |
| subscription_id | INT | FOREIGN KEY → Subscription |
| trainer_id | INT | FOREIGN KEY → Coach |
| fitness_goal | TEXT | |
| current_weight | INT | |
| run_time_distance | INT | |
| yoga_opted | INT | |
| diet_plan_id | INT | FOREIGN KEY |
| exercise_days_per_week | INT | |
| goal_timeframe | INT | |
| confidence_score | INT | |
 
---
 
### 💼 Plan_opted
Maps a subscription to one of the available plans (Bheem, Yudisthir, Arjun).
 
| Column | Type | Constraints |
|---|---|---|
| id | INT | PRIMARY KEY |
| bheem_id | INT | FOREIGN KEY → Bheem |
| Yudisthir_id | INT | FOREIGN KEY → Yudisthir |
| Arjun_id | INT | FOREIGN KEY → Arjun |
 
---
 
## 🔗 Relationships
 
```
// Relationships 
 
Client.client_id - Address.id // A single client will be having a single adress and single address will be having a single client
Client.subscription_id - Subscription.client_id // A single client will have single subscription and at Subscription there will be a single client
 
Coach.address - Address.id // A Coach will have single Address and At a address there will be single coach
Subscription.trainer_id <> Coach.Coach_id // A subscription can have multiple coaches and Multiple coaches can be in multiple subscriptions 
 
Subscription.plan_id >  Plan_opted.id 
 
Subscription.invoice_id   -Invoice.invoice_id 
Invoice.client_id - Subscription.client_id
Invoice.coach_id - Subscription.trainer_id
Invoice.subscription_id - Subscription.id
Invoice.address_id - Address.id
Invoice.rider_opted < Rider.rider_id 
 
Plan_opted.bheem_id > Bheem.id
 
Plan_opted.Yudisthir_id > Yudisthir.id
 
Plan_opted.Arjun_id > Arjun.id
 
Bheem.services_offered < Services.id
Yudisthir.services_offered < Services.id
Arjun.services_offered < Services.id
Freetier.serice_offered < Services.id
Session.trainer_id <> Coach.Coach_id
Session.client_id < Client.client_id
Reminder.reminder_id <>Session.client_id
Reminder.session_id > Session.id
```
 
---