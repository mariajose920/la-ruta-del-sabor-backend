CREATE DATABASE IF NOT EXISTS ruta_del_sabor;
USE ruta_del_sabor;

CREATE TABLE IF NOT EXISTS categorias (
  id INT AUTO_INCREMENT PRIMARY KEY,
  nombre VARCHAR(100) NOT NULL
);

CREATE TABLE IF NOT EXISTS restaurantes (
  id INT AUTO_INCREMENT PRIMARY KEY,
  nombre VARCHAR(150) NOT NULL,
  direccion VARCHAR(255),
  telefono VARCHAR(20),
  categoria_id INT,
  FOREIGN KEY (categoria_id) REFERENCES categorias(id)
);

CREATE TABLE IF NOT EXISTS platos (
  id INT AUTO_INCREMENT PRIMARY KEY,
  nombre VARCHAR(150) NOT NULL,
  descripcion TEXT,
  precio DECIMAL(10,2),
  restaurante_id INT,
  FOREIGN KEY (restaurante_id) REFERENCES restaurantes(id)
);

CREATE TABLE IF NOT EXISTS equipos (
  id INT AUTO_INCREMENT PRIMARY KEY,
  nombre VARCHAR(100) NOT NULL,
  cargo VARCHAR(100),
  restaurante_id INT,
  FOREIGN KEY (restaurante_id) REFERENCES restaurantes(id)
);

INSERT INTO categorias (nombre) VALUES
('Italiana'),
('Chilena'),
('Japonesa');

INSERT INTO restaurantes (nombre, direccion, telefono, categoria_id) VALUES
('El Fogón del Sur', 'Av. Providencia 123', '223344556', 2),
('Sakura Sushi', 'Calle Japón 45', '229988776', 3),
('La Trattoria', 'Paseo Italia 78', '226655443', 1);

INSERT INTO platos (nombre, descripcion, precio, restaurante_id) VALUES
('Cazuela de vacuno', 'Cazuela tradicional chilena', 8500, 1),
('Empanada frita', 'Empanada de pino frita', 2500, 1),
('Roll California', 'Roll de cangrejo y palta', 7900, 2),
('Sashimi mixto', 'Selección de pescados frescos', 12500, 2),
('Pasta Carbonara', 'Pasta con huevo, tocino y queso', 9800, 3);

INSERT INTO equipos (nombre, cargo, restaurante_id) VALUES
('María Pérez', 'Chef principal', 1),
('Juan Soto', 'Garzón', 1),
('Akira Tanaka', 'Sushiman', 2),
('Camila Rojas', 'Administradora', 3);