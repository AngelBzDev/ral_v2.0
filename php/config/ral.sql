-- phpMyAdmin SQL Dump
-- version 5.1.0
-- https://www.phpmyadmin.net/
--
-- Servidor: localhost
-- Tiempo de generación: 06-04-2021 a las 18:56:39
-- Versión del servidor: 10.4.18-MariaDB
-- Versión de PHP: 8.0.3

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de datos: `ral`
--

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `aulas`
--

CREATE TABLE `aulas` (
  `id` int(11) NOT NULL,
  `nombre_aula` varchar(30) COLLATE utf8_spanish2_ci NOT NULL,
  `estatus` char(1) COLLATE utf8_spanish2_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_spanish2_ci;

--
-- Volcado de datos para la tabla `aulas`
--

INSERT INTO `aulas` (`id`, `nombre_aula`, `estatus`) VALUES
(1, 'Laboratorio de idiomas', 'd'),
(2, 'B-201', 'd'),
(3, 'B-202', 'd'),
(4, 'B-203', 'd'),
(5, 'B-204', 'd'),
(6, 'B-205', 'd'),
(7, 'Sala B', 'd');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `aulas_ocupadas`
--

CREATE TABLE `aulas_ocupadas` (
  `id` int(11) NOT NULL,
  `fecha` varchar(30) COLLATE utf8_spanish2_ci NOT NULL,
  `horas` varchar(30) COLLATE utf8_spanish2_ci NOT NULL,
  `id_aula` int(11) NOT NULL,
  `id_profesor` int(11) NOT NULL,
  `id_grupo` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_spanish2_ci;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `grupos`
--

CREATE TABLE `grupos` (
  `id` int(11) NOT NULL,
  `grupo` varchar(30) COLLATE utf8_spanish2_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_spanish2_ci;

--
-- Volcado de datos para la tabla `grupos`
--

INSERT INTO `grupos` (`id`, `grupo`) VALUES
(1, 'IC10M'),
(2, 'IC12M'),
(3, 'IC14M'),
(4, 'IC20M'),
(5, 'IC22M'),
(6, 'IC32M'),
(7, 'IC42M'),
(8, 'IC52M');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `laboratorios`
--

CREATE TABLE `laboratorios` (
  `id` int(11) NOT NULL,
  `nombre_lab` varchar(30) COLLATE utf8_spanish2_ci NOT NULL,
  `estatus` char(1) COLLATE utf8_spanish2_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_spanish2_ci;

--
-- Volcado de datos para la tabla `laboratorios`
--

INSERT INTO `laboratorios` (`id`, `nombre_lab`, `estatus`) VALUES
(1, 'Desarrollo', 'd'),
(2, 'Macros', 'd'),
(3, 'Mantenimiento', 'd'),
(4, 'Redes', 'd'),
(5, 'Lunix', 'd');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `lab_ocupados`
--

CREATE TABLE `lab_ocupados` (
  `id` int(11) NOT NULL,
  `fecha` varchar(30) COLLATE utf8_spanish2_ci NOT NULL,
  `horas` varchar(30) COLLATE utf8_spanish2_ci NOT NULL,
  `id_lab` int(11) NOT NULL,
  `id_grupo` int(11) NOT NULL,
  `id_profesor` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_spanish2_ci;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `profesor`
--

CREATE TABLE `profesor` (
  `id` int(11) NOT NULL,
  `nombres` varchar(50) COLLATE utf8_spanish2_ci NOT NULL DEFAULT '',
  `apellidos` varchar(50) COLLATE utf8_spanish2_ci NOT NULL DEFAULT '',
  `correo` varchar(50) COLLATE utf8_spanish2_ci NOT NULL DEFAULT '',
  `pass` char(60) COLLATE utf8_spanish2_ci NOT NULL DEFAULT '0',
  `sexo` char(1) COLLATE utf8_spanish2_ci NOT NULL DEFAULT ''
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_spanish2_ci;

--
-- Volcado de datos para la tabla `profesor`
--

INSERT INTO `profesor` (`id`, `nombres`, `apellidos`, `correo`, `pass`, `sexo`) VALUES
(30, 'Angel', 'Baez', 'angel1@gmail.com', '$2y$10$N21omxFur1fHcGFSsT3gBezNI6uzL9b2n57PeIWGc5D5FHV.BJDxa', 'm'),
(31, 'Cristian', 'Baez', 'cris12@gmail.com', '$2y$10$8i1k25PgiE7KtAWtfAquP.L68c/NeoWoccVWBqUacI4ZvjsFlK.Du', 'm'),
(32, 'Liz', 'Baez', 'lizbz@gmail.com', '$2y$10$h8tQPghqu9gidLXE7wtlwecEqe6jYBldbVhUXaQYCsZVc8FEoc0UO', 'f'),
(34, 'Benito', 'Camelo', 'benito@gmail.com', '$2y$10$dLM5IW6w8IZ/Q/WWeRwPHepfo/m5o9Z4R.zdFN7M1szMAYmsvPhxq', 'm');

--
-- Índices para tablas volcadas
--

--
-- Indices de la tabla `aulas`
--
ALTER TABLE `aulas`
  ADD PRIMARY KEY (`id`);

--
-- Indices de la tabla `aulas_ocupadas`
--
ALTER TABLE `aulas_ocupadas`
  ADD PRIMARY KEY (`id`),
  ADD KEY `id_aula` (`id_aula`),
  ADD KEY `id_profesor` (`id_profesor`),
  ADD KEY `id_grupo` (`id_grupo`);

--
-- Indices de la tabla `grupos`
--
ALTER TABLE `grupos`
  ADD PRIMARY KEY (`id`);

--
-- Indices de la tabla `laboratorios`
--
ALTER TABLE `laboratorios`
  ADD PRIMARY KEY (`id`);

--
-- Indices de la tabla `lab_ocupados`
--
ALTER TABLE `lab_ocupados`
  ADD PRIMARY KEY (`id`),
  ADD KEY `id_grupo` (`id_grupo`),
  ADD KEY `id_lab` (`id_lab`),
  ADD KEY `id_profesor` (`id_profesor`);

--
-- Indices de la tabla `profesor`
--
ALTER TABLE `profesor`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT de las tablas volcadas
--

--
-- AUTO_INCREMENT de la tabla `aulas`
--
ALTER TABLE `aulas`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=8;

--
-- AUTO_INCREMENT de la tabla `aulas_ocupadas`
--
ALTER TABLE `aulas_ocupadas`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=10;

--
-- AUTO_INCREMENT de la tabla `grupos`
--
ALTER TABLE `grupos`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=9;

--
-- AUTO_INCREMENT de la tabla `laboratorios`
--
ALTER TABLE `laboratorios`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;

--
-- AUTO_INCREMENT de la tabla `lab_ocupados`
--
ALTER TABLE `lab_ocupados`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=8;

--
-- AUTO_INCREMENT de la tabla `profesor`
--
ALTER TABLE `profesor`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=35;

--
-- Restricciones para tablas volcadas
--

--
-- Filtros para la tabla `aulas_ocupadas`
--
ALTER TABLE `aulas_ocupadas`
  ADD CONSTRAINT `aulas_ocupadas_ibfk_1` FOREIGN KEY (`id_aula`) REFERENCES `aulas` (`id`),
  ADD CONSTRAINT `aulas_ocupadas_ibfk_2` FOREIGN KEY (`id_profesor`) REFERENCES `profesor` (`id`),
  ADD CONSTRAINT `aulas_ocupadas_ibfk_3` FOREIGN KEY (`id_grupo`) REFERENCES `grupos` (`id`);

--
-- Filtros para la tabla `lab_ocupados`
--
ALTER TABLE `lab_ocupados`
  ADD CONSTRAINT `lab_ocupados_ibfk_1` FOREIGN KEY (`id_grupo`) REFERENCES `grupos` (`id`),
  ADD CONSTRAINT `lab_ocupados_ibfk_2` FOREIGN KEY (`id_lab`) REFERENCES `laboratorios` (`id`),
  ADD CONSTRAINT `lab_ocupados_ibfk_3` FOREIGN KEY (`id_profesor`) REFERENCES `profesor` (`id`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
