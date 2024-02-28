SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";

CREATE TABLE `user_role` (
  `id` varchar(255) NOT NULL DEFAULT (uuid()),
  `role_name` varchar(20) NOT NULL,
  `created_at` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `updated_at` timestamp NULL DEFAULT NULL,
  `deleted_at` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (id)
);

CREATE TABLE `employees` (
  `id` varchar(255) NOT NULL DEFAULT (uuid()),
  `first_name` varchar(20) NOT NULL,
  `last_name` varchar(255) NOT NULL,
  `email` varchar(255) NOT NULL,
  `phone` varchar(20) NOT NULL,
  `gender` varchar(20) NOT NULL,
  `position` varchar(20) NOT NULL,
  `created_at` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `updated_at` timestamp NULL DEFAULT NULL,
  `deleted_at` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (id)
);

CREATE TABLE `customers` (
  `id` varchar(255) NOT NULL DEFAULT (uuid()),
  `first_name` varchar(20) NOT NULL,
  `last_name` varchar(255) NOT NULL,
  `email` varchar(255),
  `address` varchar(255),
  `phone` varchar(20),
  `gender` varchar(20),
  `created_at` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `updated_at` timestamp NULL DEFAULT NULL,
  `deleted_at` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (id)
);

CREATE TABLE `users` (
  `id` varchar(255) NOT NULL DEFAULT (uuid()),
  `employee_id` varchar(255) NOT NULL,
  `role_id` varchar(255) NOT NULL,
  `user_name` varchar(255) NOT NULL,
  `password` varchar(255) NOT NULL,
  `created_at` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `updated_at` timestamp NULL DEFAULT NULL,
  `deleted_at` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (id),
  FOREIGN KEY (role_id) REFERENCES user_role(id),
  FOREIGN KEY (employee_id) REFERENCES employees(id)
);

CREATE TABLE `orders` (
  `id` varchar(255) NOT NULL DEFAULT (uuid()),
  `customer_id` varchar(255) NOT NULL,
  `employee_id` varchar(255) NOT NULL,
  `order_date` timestamp NOT NULL,
  `total_amount` int(10) NOT NULL,
  `created_at` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `updated_at` timestamp NULL DEFAULT NULL,
  `deleted_at` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (id),
  FOREIGN KEY (customer_id) REFERENCES customers(id),
  FOREIGN KEY (employee_id) REFERENCES employees(id)
);

CREATE TABLE `categories` (
  `id` varchar(255) NOT NULL DEFAULT (uuid()),
  `category_name` varchar(255) NOT NULL,
  `created_at` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `updated_at` timestamp NULL DEFAULT NULL,
  `deleted_at` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (id)
);

CREATE TABLE `products` (
  `id` varchar(255) NOT NULL DEFAULT (uuid()),
  `category_id` varchar(255) NOT NULL,
  `product_name` varchar(255) NOT NULL,
  `price` decimal(10,2) NOT NULL,
  `quantity` int(10) NOT NULL,
  `active` boolean DEFAULT true,
  `created_at` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `updated_at` timestamp NULL DEFAULT NULL,
  `deleted_at` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (id),
  FOREIGN KEY (category_id) REFERENCES categories(id)
);

CREATE TABLE `order_details` (
    `id` varchar(255) NOT NULL DEFAULT (uuid()),
    `order_id` varchar(255) NOT NULL,
    `product_id` varchar(255) NOT NULL,
    `unit_price` decimal(10,2) NOT NULL,
    `quantity` int(10) NOT NULL,
    `sub_total` decimal(10,2) NOT NULL,
    `created_at` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
    `updated_at` timestamp NULL DEFAULT NULL,
    `deleted_at` timestamp NULL DEFAULT NULL,
    PRIMARY KEY (id),
    FOREIGN KEY (order_id) REFERENCES orders(id),
    FOREIGN KEY (product_id) REFERENCES products(id)
);
