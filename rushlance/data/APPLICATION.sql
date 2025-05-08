SELECT * FROM APPLICATION;
SELECT * FROM SERVICE;
SELECT * FROM BOOKING;

CREATE TABLE APPLICATION (
    application_id SERIAL PRIMARY KEY,
    freelancer_id INT NOT NULL REFERENCES USERS(user_id),
    service_title TEXT NOT NULL,
    service_detail TEXT NOT NULL,
    status VARCHAR(8) DEFAULT 'Pending' CHECK (status IN ('Approved', 'Rejected', 'Pending')),
    submission DATE NOT NULL DEFAULT CURRENT_DATE
);

CREATE TABLE SERVICE (
    service_id SERIAL PRIMARY KEY,
    freelancer_id INT NOT NULL REFERENCES USERS(user_id),
    service_title TEXT NOT NULL,
    service_detail TEXT NOT NULL,
    status VARCHAR(12) DEFAULT 'Active' CHECK (status IN ('Active', 'Discontinued'))
);

CREATE TABLE BOOKING (
    booking_id SERIAL PRIMARY KEY,
    service_id INT NOT NULL REFERENCES SERVICE(service_id),
    client_id INT NOT NULL REFERENCES USERS(user_id),
    freelancer_id INT NOT NULL REFERENCES USERS(user_id),
    date DATE NOT NULL,
    status VARCHAR(9) DEFAULT 'Pending' CHECK (status IN ('Pending', 'Completed'))
);

-- INSERT DATA FOR APPLICATION
insert into APPLICATION (freelancer_id, service_title, service_detail, status, submission) values (24, 'Tree trimming and removal', 'Pruning or removing trees and overgrown branches for safety and aesthetics.', 'Pending', '2024-12-03 15:36:14');
insert into APPLICATION (freelancer_id, service_title, service_detail, status, submission) values (16, 'Furniture assembly', 'Assembling furniture like desks, beds, chairs, and cabinets from flat packs.', 'Rejected', '2025-04-26 05:50:10');
insert into APPLICATION (freelancer_id, service_title, service_detail, status, submission) values (25, 'Pool cleaning and maintenance', 'Regular skimming, vacuuming, and chemical balancing of swimming pools.', 'Rejected', '2024-07-17 09:11:09');
insert into APPLICATION (freelancer_id, service_title, service_detail, status, submission) values (25, 'Handyman services', 'Minor home repairs such as door fixes, shelf installations, and drywall patching.', 'Pending', '2024-10-28 15:04:26');
insert into APPLICATION (freelancer_id, service_title, service_detail, status, submission) values (7, 'Window cleaning', 'Cleaning interior and exterior window glass for homes or businesses.', 'Rejected', '2024-08-10 07:11:57');
insert into APPLICATION (freelancer_id, service_title, service_detail, status, submission) values (24, 'Pool cleaning and maintenance', 'Includes equipment checks and filter cleaning.', 'Rejected', '2025-01-21 03:02:57');
insert into APPLICATION (freelancer_id, service_title, service_detail, status, submission) values (25, 'Tree trimming and removal', 'Includes disposal of debris and stump grinding if needed.', 'Approved', '2024-05-20 01:54:02');
insert into APPLICATION (freelancer_id, service_title, service_detail, status, submission) values (30, 'Pest control', 'Eliminates insects, rodents, and other unwanted pests from homes or businesses.', 'Approved', '2025-02-19 13:47:44');
insert into APPLICATION (freelancer_id, service_title, service_detail, status, submission) values (16, 'Fence installation and repair', 'Building new fences or fixing damaged panels and posts.', 'Rejected', '2025-02-28 04:59:36');
insert into APPLICATION (freelancer_id, service_title, service_detail, status, submission) values (1, 'Pressure washing', 'High-pressure cleaning of driveways, patios, siding, and decks.', 'Rejected', '2024-09-01 02:14:56');
insert into APPLICATION (freelancer_id, service_title, service_detail, status, submission) values (24, 'Handyman services', 'Ideal for odd jobs that do not require a specialized contractor.', 'Rejected', '2024-05-10 06:17:32');
insert into APPLICATION (freelancer_id, service_title, service_detail, status, submission) values (11, 'Car detailing and cleaning', 'Thorough interior and exterior cleaning of vehicles including polishing and vacuuming.', 'Approved', '2025-03-26 22:00:55');
insert into APPLICATION (freelancer_id, service_title, service_detail, status, submission) values (1, 'Tree trimming and removal', 'Prevents property damage and promotes healthy tree growth.', 'Rejected', '2025-04-21 10:10:49');
insert into APPLICATION (freelancer_id, service_title, service_detail, status, submission) values (16, 'Moving assistance', 'Help with packing, loading, and transporting items to a new location.', 'Pending', '2024-09-01 19:06:00');
insert into APPLICATION (freelancer_id, service_title, service_detail, status, submission) values (11, 'Lawn mowing and yard maintenance', 'Trimming grass and maintaining neat lawn edges for curb appeal.', 'Pending', '2024-06-12 22:23:49');
insert into APPLICATION (freelancer_id, service_title, service_detail, status, submission) values (25, 'Car detailing and cleaning', 'Includes services like waxing, engine cleaning, and upholstery shampooing.', 'Pending', '2024-12-12 20:41:53');
insert into APPLICATION (freelancer_id, service_title, service_detail, status, submission) values (16, 'Painting', 'Interior and exterior painting of walls, ceilings, and fences.', 'Approved', '2024-08-28 14:21:21');
insert into APPLICATION (freelancer_id, service_title, service_detail, status, submission) values (20, 'Cleaning', 'General house or office cleaning including dusting, vacuuming, and sanitizing surfaces.', 'Approved', '2024-09-09 00:47:51');
insert into APPLICATION (freelancer_id, service_title, service_detail, status, submission) values (30, 'Personal shopping and errand running', 'Shopping for groceries, gifts, or supplies based on client needs.', 'Approved', '2024-12-10 02:07:40');
insert into APPLICATION (freelancer_id, service_title, service_detail, status, submission) values (7, 'Gutter cleaning and maintenance', 'Removal of debris from roof gutters and downspouts.', 'Approved', '2025-04-05 15:24:04');
insert into APPLICATION (freelancer_id, service_title, service_detail, status, submission) values (11, 'Painting', 'Surface preparation, priming, and color consultation included.', 'Rejected', '2025-02-28 08:46:18');
insert into APPLICATION (freelancer_id, service_title, service_detail, status, submission) values (24, 'Pest control', 'Includes preventive treatments and emergency extermination.', 'Pending', '2024-05-22 13:45:13');
insert into APPLICATION (freelancer_id, service_title, service_detail, status, submission) values (25, 'Moving assistance', 'Includes disassembly and reassembly of furniture if required.', 'Approved', '2024-11-18 01:51:23');
insert into APPLICATION (freelancer_id, service_title, service_detail, status, submission) values (24, 'Pest control', 'Uses safe and effective methods to ensure long-term protection.', 'Rejected', '2024-11-06 04:06:49');
insert into APPLICATION (freelancer_id, service_title, service_detail, status, submission) values (30, 'Plumbing repairs and installations', 'Fixing leaks, clogs, or pipe issues in kitchens, bathrooms, and laundry rooms.', 'Approved', '2025-01-27 17:01:29');
insert into APPLICATION (freelancer_id, service_title, service_detail, status, submission) values (30, 'Electrical services', 'Installing or repairing outlets, switches, light fixtures, and wiring.', 'Pending', '2024-08-16 18:38:57');
insert into APPLICATION (freelancer_id, service_title, service_detail, status, submission) values (11, 'Painting', 'Revitalizes spaces and protects surfaces from wear and weather.', 'Pending', '2024-12-20 17:33:49');
insert into APPLICATION (freelancer_id, service_title, service_detail, status, submission) values (20, 'Cleaning', 'Can be scheduled regularly or for deep cleaning purposes.', 'Rejected', '2024-11-06 20:45:24');
insert into APPLICATION (freelancer_id, service_title, service_detail, status, submission) values (30, 'Pressure washing', 'Restores outdoor surfaces to like-new condition.', 'Approved', '2025-05-01 04:41:52');
insert into APPLICATION (freelancer_id, service_title, service_detail, status, submission) values (1, 'Moving assistance', 'Reduces stress and speeds up the moving process.', 'Pending', '2025-04-25 11:18:32');


-- Moving from APPLICATION --> SERVICE
CREATE OR REPLACE FUNCTION update_application()
RETURNS VOID AS 
$$
DECLARE 
    val RECORD;
BEGIN
    FOR val IN SELECT * FROM APPLICATION WHERE status = 'Approved'
    LOOP
        INSERT INTO SERVICE(freelancer_id, service_title, service_detail)
        VALUES (val.freelancer_id, val.service_title, val.service_detail);
    END LOOP;
END;
$$ 
LANGUAGE plpgsql;

SELECT update_application();

SELECT * FROM SERVICE;

-- INSERT BOOKING
insert into BOOKING (service_id, client_id, freelancer_id, date, status) values (7, 10, 7, '2024-06-17 21:03:43', 'Pending');
insert into BOOKING (service_id, client_id, freelancer_id, date, status) values (8, 10, 25, '2025-02-13 23:51:41', 'Completed');
insert into BOOKING (service_id, client_id, freelancer_id, date, status) values (4, 2, 16, '2025-01-28 17:05:20', 'Completed');
insert into BOOKING (service_id, client_id, freelancer_id, date, status) values (5, 22, 20, '2024-06-08 08:50:08', 'Pending');
insert into BOOKING (service_id, client_id, freelancer_id, date, status) values (8, 15, 25, '2025-05-23 02:23:35', 'Completed');
insert into BOOKING (service_id, client_id, freelancer_id, date, status) values (10, 2,30, '2024-06-06 03:16:28', 'Pending');
insert into BOOKING (service_id, client_id, freelancer_id, date, status) values (5, 22, 20, '2025-05-27 21:12:07', 'Pending');
insert into BOOKING (service_id, client_id, freelancer_id, date, status) values (2, 27,30, '2025-01-12 10:34:22', 'Pending');
insert into BOOKING (service_id, client_id, freelancer_id, date, status) values (7, 13, 7, '2025-08-07 12:53:35', 'Completed');
insert into BOOKING (service_id, client_id, freelancer_id, date, status) values (4, 18, 16, '2024-11-25 20:57:50', 'Pending');
insert into BOOKING (service_id, client_id, freelancer_id, date, status) values (7, 13, 7, '2025-07-24 23:07:15', 'Pending');
insert into BOOKING (service_id, client_id, freelancer_id, date, status) values (2, 12, 30, '2025-01-24 19:35:03', 'Pending');
insert into BOOKING (service_id, client_id, freelancer_id, date, status) values (10, 2, 30, '2024-11-04 14:46:55', 'Completed');
insert into BOOKING (service_id, client_id, freelancer_id, date, status) values (5, 14, 20, '2024-12-03 09:030:13', 'Pending');
insert into BOOKING (service_id, client_id, freelancer_id, date, status) values (1, 28, 25, '2024-08-10 21:17:53', 'Pending');
insert into BOOKING (service_id, client_id, freelancer_id, date, status) values (7, 9, 7, '2025-05-31 01:35:19', 'Completed');
insert into BOOKING (service_id, client_id, freelancer_id, date, status) values (4, 15, 16, '2025-06-30 01:51:23', 'Completed');
insert into BOOKING (service_id, client_id, freelancer_id, date, status) values (2, 22, 30, '2024-12-02 19:10:43', 'Completed');
insert into BOOKING (service_id, client_id, freelancer_id, date, status) values (1, 2, 19, '2024-10-04 08:21:21', 'Pending');
insert into BOOKING (service_id, client_id, freelancer_id, date, status) values (4, 22, 16, '2025-09-27 22:38:00', 'Completed');
insert into BOOKING (service_id, client_id, freelancer_id, date, status) values (6, 17, 30, '2025-10-08 17:23:04', 'Completed');
insert into BOOKING (service_id, client_id, freelancer_id, date, status) values (1, 10, 25, '2025-05-25 01:21:09', 'Pending');
insert into BOOKING (service_id, client_id, freelancer_id, date, status) values (1, 2, 25, '2025-01-10 10:50:29', 'Completed');
insert into BOOKING (service_id, client_id, freelancer_id, date, status) values (3, 15, 11, '2025-02-17 11:25:30', 'Pending');
insert into BOOKING (service_id, client_id, freelancer_id, date, status) values (8, 2, 25, '2024-09-26 22:33:19', 'Completed');
insert into BOOKING (service_id, client_id, freelancer_id, date, status) values (6, 28, 30, '2025-05-31 11:20:55', 'Completed');
insert into BOOKING (service_id, client_id, freelancer_id, date, status) values (5, 14, 20, '2024-09-17 21:53:07', 'Completed');
insert into BOOKING (service_id, client_id, freelancer_id, date, status) values (6, 23, 30, '2025-08-18 09:07:25', 'Completed');
insert into BOOKING (service_id, client_id, freelancer_id, date, status) values (5, 12, 20, '2025-07-29 09:29:36', 'Pending');
insert into BOOKING (service_id, client_id, freelancer_id, date, status) values (7, 23, 7, '2024-06-19 09:13:30', 'Pending');
