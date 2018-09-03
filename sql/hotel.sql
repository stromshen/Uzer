SET NAMES UTF8;
USE uzer;
DROP TABLE IF EXISTS hotel;
CREATE TABLE hotel (
  id INT PRIMARY KEY AUTO_INCREMENT,
  hotel_name VARCHAR(30),
  hotel_xingxing VARCHAR(30),
  hotel_distance VARCHAR(64),
  hotel_positioning VARCHAR(8),
  hotel_type VARCHAR(5),
  hotel_img VARCHAR(255)
);
INSERT INTO hotel VALUES
("", "迪拜水下酒店","5","2600", "阿联酋迪拜","2", '../../images/index/1.jpg'),
("", "迪拜喜来登","4","2700", "阿联酋迪拜","2", '../../images/index/3.jpg'),
("", "莱佛士酒店","5","3700", "阿联酋迪拜","2", '../../images/index/4.jpg')
