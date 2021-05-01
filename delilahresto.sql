-- phpMyAdmin SQL Dump
-- version 5.0.4
-- https://www.phpmyadmin.net/
--
-- Servidor: 127.0.0.1
-- Tiempo de generación: 01-05-2021 a las 16:47:07
-- Versión del servidor: 10.4.17-MariaDB
-- Versión de PHP: 8.0.2

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de datos: `delilahresto`
--

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `forma_parte`
--

CREATE TABLE `forma_parte` (
  `id_pedido` int(11) NOT NULL,
  `id_plato` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Volcado de datos para la tabla `forma_parte`
--

INSERT INTO `forma_parte` (`id_pedido`, `id_plato`) VALUES
(2, 1),
(2, 2),
(2, 3),
(69, 1),
(69, 2),
(69, 3),
(69, 5),
(70, 1),
(70, 2),
(70, 3),
(70, 4),
(70, 5),
(71, 1),
(71, 2),
(71, 3),
(71, 4),
(71, 5);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `pedidos`
--

CREATE TABLE `pedidos` (
  `id` int(11) NOT NULL,
  `id_usuario` int(11) NOT NULL,
  `estado` varchar(25) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Volcado de datos para la tabla `pedidos`
--

INSERT INTO `pedidos` (`id`, `id_usuario`, `estado`) VALUES
(2, 1, 'entregado'),
(69, 1, 'preparando'),
(70, 1, 'cancelado'),
(71, 5, 'preparando');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `platos`
--

CREATE TABLE `platos` (
  `id` int(11) NOT NULL,
  `nombre_plato` varchar(80) NOT NULL,
  `descripcion` varchar(200) DEFAULT NULL,
  `precio` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Volcado de datos para la tabla `platos`
--

INSERT INTO `platos` (`id`, `nombre_plato`, `descripcion`, `precio`) VALUES
(1, 'Milanesa de carne con papas fritas', 'Tradicional mila con fritas', 450),
(2, 'Matambre a la pizza', NULL, 500),
(3, 'Papas fritas', NULL, 23),
(4, 'Parrillada para dos con fritas', 'tirada de asado, vacio, pollo, chori y morci', 0),
(5, 'Ensalada cesar', 'Lechuga, tomate, pan duro, jamon crudo, salsa cesar', 0);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `usuarios`
--

CREATE TABLE `usuarios` (
  `id` int(11) NOT NULL,
  `user` varchar(30) NOT NULL,
  `password` varchar(30) NOT NULL,
  `email` varchar(30) NOT NULL,
  `name` varchar(30) DEFAULT NULL,
  `telefono` varchar(16) NOT NULL,
  `direccion` varchar(50) NOT NULL,
  `admin` tinyint(1) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Volcado de datos para la tabla `usuarios`
--

INSERT INTO `usuarios` (`id`, `user`, `password`, `email`, `name`, `telefono`, `direccion`, `admin`) VALUES
(1, 'tatto', 'asd23', 'tatto@gmail.com', 'santiago', '+542262562389', '9 de julio 1052', 0),
(2, 'bren', '12345', 'brenwayne@gmail.com', 'bren', '+542494568989', 'alberdi 1880', 0),
(5, 'bren2', 'ss22d3', 'brenwayne2@gmail.com', 'bren', '+542284584848', 'alberdi 1880', 0),
(9, 'admin', 'admin', 'admin@gmail.com', 'admin', '+54226215568941', '9 de julio 552', 1),
(11, 'otroAdm', 'admin', 'admin32@gmail.com', 'admin', '+54226215568941', '9 de julio 1015', 1),
(12, 'pepe', 'pepe', 'pepe94@gmail.com', 'pepe', '+542262484874', 'General Paz 541', 0),
(15, 'jorge', 'asdjorge', 'jorge@gmail.com', 'jorge32', '+542262484874', 'Alberdi 1008', 0);

--
-- Índices para tablas volcadas
--

--
-- Indices de la tabla `forma_parte`
--
ALTER TABLE `forma_parte`
  ADD PRIMARY KEY (`id_pedido`,`id_plato`),
  ADD KEY `fk_id_plato` (`id_plato`);

--
-- Indices de la tabla `pedidos`
--
ALTER TABLE `pedidos`
  ADD PRIMARY KEY (`id`),
  ADD KEY `fk_id_usuario` (`id_usuario`);

--
-- Indices de la tabla `platos`
--
ALTER TABLE `platos`
  ADD PRIMARY KEY (`id`);

--
-- Indices de la tabla `usuarios`
--
ALTER TABLE `usuarios`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `user` (`user`),
  ADD UNIQUE KEY `email` (`email`);

--
-- AUTO_INCREMENT de las tablas volcadas
--

--
-- AUTO_INCREMENT de la tabla `pedidos`
--
ALTER TABLE `pedidos`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=72;

--
-- AUTO_INCREMENT de la tabla `platos`
--
ALTER TABLE `platos`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=8;

--
-- AUTO_INCREMENT de la tabla `usuarios`
--
ALTER TABLE `usuarios`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=29;

--
-- Restricciones para tablas volcadas
--

--
-- Filtros para la tabla `forma_parte`
--
ALTER TABLE `forma_parte`
  ADD CONSTRAINT `fk_id_pedido` FOREIGN KEY (`id_pedido`) REFERENCES `pedidos` (`id`),
  ADD CONSTRAINT `fk_id_plato` FOREIGN KEY (`id_plato`) REFERENCES `platos` (`id`);

--
-- Filtros para la tabla `pedidos`
--
ALTER TABLE `pedidos`
  ADD CONSTRAINT `fk_id_usuario` FOREIGN KEY (`id_usuario`) REFERENCES `usuarios` (`id`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
