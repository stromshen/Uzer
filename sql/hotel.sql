SET NAMES UTF8;
USE uzer;
DROP TABLE IF EXISTS hotel;
CREATE TABLE hotel (
  id INT PRIMARY KEY AUTO_INCREMENT,
  sid VARCHAR(5),
  hotel_name VARCHAR(30),
  hotle_lubbo VARCHAR(255),
  hotel_xingxing VARCHAR(30),
  hotel_distance VARCHAR(64),
  hotel_positioning VARCHAR(8),
  hotel_phone VARCHAR(30),
  hotel_type VARCHAR(5),
  hotel_img VARCHAR(255)
);
INSERT INTO hotel VALUES
("","","","../../images/lunbo/1.jpg","","","","","1",""),
("","","","../../images/lunbo/2.jpg","","","","","1",""),
("","","","../../images/lunbo/3.jpg","","","","","1",""),
("","1","迪拜水下酒店","../../images/index/1.jpg^../../images/index/3.jpg^../../images/index/4.jpg","5","2600","阿联酋迪拜","17307499159","2","../../images/index/1.jpg"),
("","2","迪拜喜来登","../../images/index/1.jpg^../../images/index/3.jpg^../../images/index/4.jpg","4","2700","阿联酋迪拜","15194648820","2","../../images/index/3.jpg"),
("","3","莱佛士酒店","../../images/index/1.jpg^../../images/index/3.jpg^../../images/index/4.jpg","5","3700","阿联酋迪拜","18877402270","2","../../images/index/4.jpg")
