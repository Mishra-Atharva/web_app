-- First, clear existing data to avoid conflicts
-- TRUNCATE TABLE BOOKING, SERVICE, APPLICATION RESTART IDENTITY;


-- Recreate tables with proper constraints
CREATE TABLE APPLICATION (
    application_id SERIAL PRIMARY KEY,
    freelancer_id INT NOT NULL,
    service_title TEXT NOT NULL,
    service_detail TEXT NOT NULL,
    status VARCHAR(8) DEFAULT 'Pending' CHECK (status IN ('Approved', 'Rejected', 'Pending')),
    submission DATE NOT NULL DEFAULT CURRENT_DATE
);

CREATE TABLE SERVICE (
    service_id SERIAL PRIMARY KEY,
    freelancer_id INT NOT NULL,
    service_title TEXT NOT NULL,
    service_detail TEXT NOT NULL,
    status VARCHAR(12) DEFAULT 'Active' CHECK (status IN ('Active', 'Discontinued'))
);

CREATE TABLE BOOKING (
    booking_id SERIAL PRIMARY KEY,
    service_id INT NOT NULL,
    client_id INT NOT NULL,
    freelancer_id INT NOT NULL,
    service_title VARCHAR(255),
    service_detail TEXT,
    date DATE NOT NULL,
    status VARCHAR(9) DEFAULT 'Pending' CHECK (status IN ('Pending', 'Completed')),
    FOREIGN KEY (service_id) REFERENCES SERVICE(service_id)
);

-- Insert consistent APPLICATION data
INSERT INTO APPLICATION (freelancer_id, service_title, service_detail, status, submission) VALUES 
(7, 'Window cleaning', 'Cleaning interior and exterior window glass for homes or businesses.', 'Approved', '2024-08-10'),
(7, 'Gutter cleaning and maintenance', 'Removal of debris from roof gutters and downspouts.', 'Approved', '2025-04-05'),
(11, 'Car detailing and cleaning', 'Thorough interior and exterior cleaning of vehicles including polishing and vacuuming.', 'Approved', '2025-03-26'),
(11, 'Lawn mowing and yard maintenance', 'Trimming grass and maintaining neat lawn edges for curb appeal.', 'Pending', '2024-06-12'),
(16, 'Furniture assembly', 'Assembling furniture like desks, beds, chairs, and cabinets from flat packs.', 'Rejected', '2025-04-26'),
(16, 'Painting', 'Interior and exterior painting of walls, ceilings, and fences.', 'Approved', '2024-08-28'),
(16, 'Moving assistance', 'Help with packing, loading, and transporting items to a new location.', 'Pending', '2024-09-01'),
(20, 'Cleaning', 'General house or office cleaning including dusting, vacuuming, and sanitizing surfaces.', 'Approved', '2024-09-09'),
(24, 'Tree trimming and removal', 'Pruning or removing trees and overgrown branches for safety and aesthetics.', 'Pending', '2024-12-03'),
(25, 'Tree trimming and removal', 'Includes disposal of debris and stump grinding if needed.', 'Approved', '2024-05-20'),
(25, 'Handyman services', 'Minor home repairs such as door fixes, shelf installations, and drywall patching.', 'Pending', '2024-10-28'),
(25, 'Moving assistance', 'Includes disassembly and reassembly of furniture if required.', 'Approved', '2024-11-18'),
(30, 'Pest control', 'Eliminates insects, rodents, and other unwanted pests from homes or businesses.', 'Approved', '2025-02-19'),
(30, 'Personal shopping and errand running', 'Shopping for groceries, gifts, or supplies based on client needs.', 'Approved', '2024-12-10'),
(30, 'Plumbing repairs and installations', 'Fixing leaks, clogs, or pipe issues in kitchens, bathrooms, and laundry rooms.', 'Approved', '2025-01-27'),
(30, 'Pressure washing', 'Restores outdoor surfaces to like-new condition.', 'Approved', '2025-05-01');

-- Move approved applications to SERVICE table
INSERT INTO SERVICE (freelancer_id, service_title, service_detail)
SELECT freelancer_id, service_title, service_detail 
FROM APPLICATION 
WHERE status = 'Approved';

-- Insert consistent BOOKING data with proper service references
INSERT INTO BOOKING (service_id, client_id, freelancer_id, service_title, service_detail, date, status)
SELECT 
    s.service_id,
    b.client_id,
    s.freelancer_id,
    s.service_title,
    s.service_detail,
    b.date::DATE,  -- Explicitly cast to DATE type
    b.status
FROM (
    VALUES
    (1, 10, '2024-06-17', 'Pending'),
    (2, 10, '2025-02-13', 'Completed'),
    (3, 2, '2025-01-28', 'Completed'),
    (4, 22, '2024-06-08', 'Pending'),
    (2, 15, '2025-05-23', 'Completed'),
    (6, 2, '2024-06-06', 'Pending'),
    (4, 22, '2025-05-27', 'Pending'),
    (7, 27, '2025-01-12', 'Pending'),
    (1, 13, '2025-08-07', 'Completed'),
    (3, 18, '2024-11-25', 'Pending'),
    (1, 13, '2025-07-24', 'Pending'),
    (7, 12, '2025-01-24', 'Pending'),
    (6, 2, '2024-11-04', 'Completed'),
    (4, 14, '2024-12-03', 'Pending'),
    (5, 28, '2024-08-10', 'Pending'),
    (1, 9, '2025-05-31', 'Completed'),
    (3, 15, '2025-06-30', 'Completed'),
    (7, 22, '2024-12-02', 'Completed'),
    (5, 2, '2024-10-04', 'Pending'),
    (3, 22, '2025-09-27', 'Completed'),
    (8, 17, '2025-10-08', 'Completed'),
    (5, 10, '2025-05-25', 'Pending'),
    (5, 2, '2025-01-10', 'Completed'),
    (9, 15, '2025-02-17', 'Pending'),
    (2, 2, '2024-09-26', 'Completed'),
    (8, 28, '2025-05-31', 'Completed'),
    (4, 14, '2024-09-17', 'Completed'),
    (8, 23, '2025-08-18', 'Completed'),
    (4, 12, '2025-07-29', 'Pending'),
    (1, 23, '2024-06-19', 'Pending')
) AS b(service_num, client_id, date, status)
JOIN (
    SELECT service_id, freelancer_id, service_title, service_detail, 
           ROW_NUMBER() OVER (ORDER BY service_id) as service_num
    FROM SERVICE
) s ON b.service_num = s.service_num;