/*
SQLyog Ultimate v11.24 (32 bit)
MySQL - 5.5.49-log : Database - baidunews
*********************************************************************
*/

/*!40101 SET NAMES utf8 */;

/*!40101 SET SQL_MODE=''*/;

/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;
CREATE DATABASE /*!32312 IF NOT EXISTS*/`baidunews` /*!40100 DEFAULT CHARACTER SET utf8 COLLATE utf8_unicode_ci */;

USE `baidunews`;

/*Table structure for table `news` */

DROP TABLE IF EXISTS `news`;

CREATE TABLE `news` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `newType` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  `newImge` varchar(1000) COLLATE utf8_unicode_ci NOT NULL,
  `newTitle` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  `newPubDate` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  `newMark` varchar(255) COLLATE utf8_unicode_ci DEFAULT NULL,
  `newurl` varchar(255) COLLATE utf8_unicode_ci DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=26 DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

/*Data for the table `news` */

insert  into `news`(`id`,`newType`,`newImge`,`newTitle`,`newPubDate`,`newMark`,`newurl`) values (3,'funny','http://t12.baidu.com/it/u=1949135042,1696194290&fm=170&s=F0BB31D4639B1FD64C77318B0300708C&w=218&h=146&img.JPEG','富士康郭台铭：马云的演讲，让我惊慌','2016-11-16','热点','www.163.com'),(10,'jingxuan','http://t12.baidu.com/it/u=1949135042,1696194290&fm=170&s=F0BB31D4639B1FD64C77318B0300708C&w=218&h=146&img.JPEG','这是什么&lt;script&gt;alert(0)&lt;/script&gt;','2016-11-04','热点','www.baidu.com'),(18,'internet','http://t12.baidu.com/it/u=1949135042,1696194290&fm=170&s=F0BB31D4639B1FD64C77318B0300708C&w=218&h=146&img.JPEG','这是什么&lt;script&gt;alert(0)&lt;/script&gt;','2016-11-15','热点','www.baidu.com'),(20,'internet','http://t12.baidu.com/it/u=1949135042,1696194290&fm=170&s=F0BB31D4639B1FD64C77318B0300708C&w=218&h=146&img.JPEG','富士康郭台铭：马云的演讲，让我惊慌','2016-11-15','4555','www.baidu.com'),(23,'local','http://t12.baidu.com/it/u=1949135042,1696194290&fm=170&s=F0BB31D4639B1FD64C77318B0300708C&w=218&h=146&img.JPEG','这是什么','2016-11-02','热点','www.baidu.com'),(24,'jingxuan','http://t12.baidu.com/it/u=1949135042,1696194290&fm=170&s=F0BB31D4639B1FD64C77318B0300708C&w=218&h=146&img.JPEG','这是什么','2016-11-09','4555','www.baidu.com'),(25,'jingxuan','http://t12.baidu.com/it/u=1949135042,1696194290&fm=170&s=F0BB31D4639B1FD64C77318B0300708C&w=218&h=146&img.JPEG','这是什么','2016-11-10','热点','www.baidu.com');

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;
