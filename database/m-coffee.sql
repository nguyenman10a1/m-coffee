-- Bảng Nhóm Người Dùng và Quyền
CREATE TABLE UserRoles (
    RoleID CHAR(36) DEFAULT UUID() PRIMARY KEY,
    RoleName VARCHAR(255) NOT NULL
);

-- Bảng Nhân Viên
CREATE TABLE Employees (
    EmployeeID CHAR(36) DEFAULT UUID() PRIMARY KEY,
    FirstName VARCHAR(255) NOT NULL,
    LastName VARCHAR(255) NOT NULL,
    Email VARCHAR(255),
    PhoneNumber VARCHAR(20),
    Position VARCHAR(255),
    UNIQUE (Email)
);

-- Bảng Khách Hàng
CREATE TABLE Customers (
    CustomerID CHAR(36) DEFAULT UUID() PRIMARY KEY,
    FirstName VARCHAR(255) NOT NULL,
    LastName VARCHAR(255) NOT NULL,
    Email VARCHAR(255),
    PhoneNumber VARCHAR(20),
    Address VARCHAR(255)
);

-- Bảng Danh Mục Sản Phẩm
CREATE TABLE Categories (
    CategoryID CHAR(36) DEFAULT UUID() PRIMARY KEY,
    CategoryName VARCHAR(255) NOT NULL
);

-- Bảng Sản Phẩm
CREATE TABLE Products (
    ProductID CHAR(36) DEFAULT UUID() PRIMARY KEY,
    ProductName VARCHAR(255) NOT NULL,
    CategoryID CHAR(36),
    UnitPrice DECIMAL(10, 2) NOT NULL,
    StockQuantity INT NOT NULL,
    FOREIGN KEY (CategoryID) REFERENCES Categories(CategoryID)
);

-- Bảng Phiếu Nhập Kho
CREATE TABLE StockIn (
    StockInID CHAR(36) DEFAULT UUID() PRIMARY KEY,
    ProductID CHAR(36),
    Quantity INT NOT NULL,
    StockInDate DATE NOT NULL,
    FOREIGN KEY (ProductID) REFERENCES Products(ProductID)
);

-- Bảng Bàn
CREATE TABLE Tables (
    TableID CHAR(36) DEFAULT UUID() PRIMARY KEY,
    TableName VARCHAR(255) NOT NULL,
    Status VARCHAR(50) NOT NULL
);

-- Bảng Đơn Hàng
CREATE TABLE Orders (
    OrderID CHAR(36) DEFAULT UUID() PRIMARY KEY,
    CustomerID CHAR(36),
    EmployeeID CHAR(36),
    TableID CHAR(36),
    OrderDate DATETIME NOT NULL,
    TotalAmount DECIMAL(10, 2) NOT NULL,
    Status VARCHAR(50) NOT NULL,
    FOREIGN KEY (CustomerID) REFERENCES Customers(CustomerID),
    FOREIGN KEY (EmployeeID) REFERENCES Employees(EmployeeID),
    FOREIGN KEY (TableID) REFERENCES Tables(TableID)
);

-- Bảng Chi Tiết Đơn Hàng
CREATE TABLE OrderDetails (
    OrderDetailID CHAR(36) DEFAULT UUID() PRIMARY KEY,
    OrderID CHAR(36),
    ProductID CHAR(36),
    Quantity INT NOT NULL,
    UnitPrice DECIMAL(10, 2) NOT NULL,
    Subtotal DECIMAL(10, 2) NOT NULL,
    FOREIGN KEY (OrderID) REFERENCES Orders(OrderID),
    FOREIGN KEY (ProductID) REFERENCES Products(ProductID)
);

-- Bảng Phiếu Thanh Toán
CREATE TABLE Payments (
    PaymentID CHAR(36) DEFAULT UUID() PRIMARY KEY,
    OrderID CHAR(36),
    PaymentDate DATETIME NOT NULL,
    PaymentAmount DECIMAL(10, 2) NOT NULL,
    PaymentMethod VARCHAR(255) NOT NULL,
    FOREIGN KEY (OrderID) REFERENCES Orders(OrderID)
);

-- Bảng Người Dùng
CREATE TABLE Users (
    UserID CHAR(36) DEFAULT UUID() PRIMARY KEY,
    Username VARCHAR(255) NOT NULL,
    Password VARCHAR(255) NOT NULL,
    EmployeeID CHAR(36),
    RoleID CHAR(36),
    FOREIGN KEY (EmployeeID) REFERENCES Employees(EmployeeID),
    FOREIGN KEY (RoleID) REFERENCES UserRoles(RoleID),
    UNIQUE (Username)
);
