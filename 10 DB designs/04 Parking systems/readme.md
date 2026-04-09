🅿️ Parking Management System — Database Design
A relational database schema for a parking management platform supporting vehicles, parking slots, reservations, pricing, invoices, and slot status tracking.

📦 Tables Overview
🚗 Vehicle
Stores vehicle and owner information.
ColumnTypeConstraintsidSERIALPRIMARY KEYcategory_idINTFOREIGN KEY → Vehicle_categoryregistration_numberINTreservation_categoryTEXTFOREIGN KEY → Reservation_categorybrandSTRINGparking_slipINTFOREIGN KEY → Parking_Slipowner_nameSTRINGcontactSTRINGemergency_contactSTRINGimage_pathTEXTtime_inTIMESTAMPtime_outTIMESTAMPis_insurance_optedBOOLEAN

🎫 Parking_Slip
Records each parking session for a vehicle.
ColumnTypeConstraintsreceipt_idSERIALPRIMARY KEYvehicle_idINTFOREIGN KEY → Vehiclecategory_idINTFOREIGN KEY → Parking_categoryslotINTFOREIGN KEY → Parking_slotlevelINTsublevelINTfloorINTcontactTEXTFOREIGN KEYregistration_numberpricelistINTFOREIGN KEY → Pricelistis_electricBOOLEANtotalFLOATsubtotalFLOATtaxFLOATpayment_idINTFOREIGN KEY → Invoiceamount_paidINTdateTIMESTAMPvehicle_inTIMESTAMPvehicle_outTIMESTAMP

💲 Pricelist
Defines pricing rules per parking category.
ColumnTypeConstraintsidSERIALPRIMARY KEYcategory_idFOREIGN KEY → Parking_categorybase_priceFLOATrate_per_hourFLOATmax_rateFLOAT

🏅 Reservation_category
Defines reserved parking categories and their eligibility rules.
ColumnTypeConstraintsidSERIALPRIMARY KEYreserved_forTEXTrequirementsTEXTvalid_fromTIMESTAMPvalid_uptoTIMESTAMPmax_discountINTmax_limitINT

🚩 Vehicle_category
Classifies vehicles by dimensions and permissions.
ColumnTypeConstraintscategory_idSERIALPRIMARY KEYlengthFLOATheightFLOATbroadFLOATcategoryTEXTpermission_fromTIMESTAMPpermission_uptoTIMESTAMPis_taxiBOOLEANis_electricBOOLEAN

🅿️ Parking_slot
Represents individual physical parking slots.
ColumnTypeConstraintsslot_idSERIALPRIMARY KEYlevelINTsublevelINTfloorINTblock_idINT

💵 Invoice
Billing record for a parking session.
ColumnTypeConstraintsinvoice_idINTPRIMARY KEYvehicle_idINTFOREIGN KEY → VehicledescriptionTEXTtotalINTsubtotalINTtaxINTpayment_modeTEXTpaid_amountINTdateTIMESTAMPpersonalized_noteTEXT

🗂️ Parking_category
Defines types of parking areas and their availability.
ColumnTypeConstraintsidSERIALPRIMARY KEYis_for_electricBOOLEANavailable_fromTIMESTAMPavailable_uptoTIMESTAMPtotal_capacityINTdimension_uptoINTreserved_forSTRING

🕐 Slot_status
Tracks real-time occupancy of parking slots.
ColumnTypeConstraintsslot_status_idINTPRIMARY KEYfloorINTlevelINTtotal_capacityINTparkedINTremainingINT

🔗 Relationships
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