
CREATE DATABASE Bamazon;
USE Bamazon;
CREATE TABLE Products (
    item_id int AUTO_INCREMENT,
    product_name varchar(50) NOT NULL,
    department_name varchar(50) NOT NULL,
    price varchar(30) NOT NULL,
    stock_quantity int NOT NULL, 
    PRIMARY KEY(ItemID) );

select * from Products; 

INSERT INTO Products (item_id, product_name, department_name, price, stock_quantity) 
VALUES (1, "Dog Bed", "Pet", 74.99, 25);

INSERT INTO Products (item_id, product_name, department_name, price, stock_quantity) 
VALUES (2, "Dog Bone - 3pk", "Pet", 13.99, 11);

INSERT INTO Products (item_id, product_name, department_name, price, stock_quantity) 
VALUES (3, "Dog Food - 15lb", "Pet", 22.25, 3);

INSERT INTO Products (item_id, product_name, department_name, price, stock_quantity) 
VALUES (4, "Dog Blanket", "Pet", 17.99, 17);

INSERT INTO Products (item_id, product_name, department_name, price, stock_quantity) 

VALUES (5, "22 inch Rolling Suitcase", "Travel", 25.00, 41);
INSERT INTO Products (item_id, product_name, department_name, price, stock_quantity) 
VALUES (6, "Sleep Eye Mask", "Travel", 13.00, 13); 

INSERT INTO Products (item_id, product_name, department_name, price, stock_quantity) 
VALUES (7, "Wooden Mixing Spoon", "Kitchen", 4.99, 7); 

INSERT INTO Products (item_id, product_name, department_name, price, stock_quantity) 
VALUES (8, "Stainless Steel Mixing Bowl", "Kitchen", 7.99, 111);


select * from Products;