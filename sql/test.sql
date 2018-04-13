/*
Navicat MySQL Data Transfer

Source Server         : localhost
Source Server Version : 50520
Source Host           : localhost:3306
Source Database       : test

Target Server Type    : MYSQL
Target Server Version : 50520
File Encoding         : 65001

Date: 2018-04-13 16:31:40
*/

SET FOREIGN_KEY_CHECKS=0;

-- ----------------------------
-- Table structure for `userinfo`
-- ----------------------------
DROP TABLE IF EXISTS `userinfo`;
CREATE TABLE `userinfo` (
  `uuid` varchar(50) NOT NULL COMMENT '主键',
  `userName` varchar(150) NOT NULL COMMENT '姓名',
  `passWord` varchar(150) NOT NULL COMMENT '密码',
  `create_time` datetime DEFAULT NULL COMMENT '创建时间',
  `update_time` datetime DEFAULT NULL COMMENT '更新时间',
  PRIMARY KEY (`uuid`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- ----------------------------
-- Records of userinfo
-- ----------------------------
INSERT INTO `userinfo` VALUES ('95139ff0-3eee-11e8-815e-b7e436d38fb0', '11', '11', '2018-04-12 15:57:27', '2018-04-13 15:57:31');
INSERT INTO `userinfo` VALUES ('961b3a00-3ef0-11e8-a0a2-9d2fb0c96fe1', '85', '11', '2018-04-13 15:58:00', '2018-04-13 15:58:00');
INSERT INTO `userinfo` VALUES ('b3318730-3ef4-11e8-a0b3-2155d03f840e', '123', '11', '2018-04-13 16:28:00', '2018-04-13 16:28:00');

-- ----------------------------
-- Table structure for `username`
-- ----------------------------
DROP TABLE IF EXISTS `username`;
CREATE TABLE `username` (
  `id` int(32) NOT NULL,
  `name` int(64) NOT NULL,
  `sex` int(32) NOT NULL,
  `age` int(32) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- ----------------------------
-- Records of username
-- ----------------------------
INSERT INTO `username` VALUES ('0', '0', '0', '0');
INSERT INTO `username` VALUES ('1', '1', '1', '1');
INSERT INTO `username` VALUES ('2', '2', '2', '2');
INSERT INTO `username` VALUES ('4', '4', '4', '4');
