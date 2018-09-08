SET NAMES UTF8;
USE uzer;
DROP TABLE IF EXISTS room;
CREATE TABLE room (
  id INT PRIMARY KEY AUTO_INCREMENT,
  sid VARCHAR(5),
  rid VARCHAR(5),
  room_name VARCHAR(25),
  room_number VARCHAR(8),
  room_initial VARCHAR(25),
  room_recharge VARCHAR(25),
  room_money VARCHAR(25),
  room_type VARCHAR(5),
  room_img VARCHAR(255)
);
INSERT INTO room VALUES
("","1","1", "麻将欢乐房","307","2000","555","666","",'../../images/index/1.jpg'),
("","1","2", "双人大房","309","5000","666","777","",'../../images/index/3.jpg'),
("","1","3", "总统套房","309","8000","888","999","",'../../images/index/4.jpg'),
("","2","1", "麻将欢乐房","400","2000","555","666","",'../../images/index/1.jpg'),
("","2","2", "双人大房","401","5000","666","777","",'../../images/index/3.jpg'),
("","2","3", "总统套房","402","8000","888","999","",'../../images/index/4.jpg'),
("","3","1", "麻将欢乐房","500","2000","555","666","",'../../images/index/1.jpg'),
("","3","2", "双人大房","501","5000","666","777","",'../../images/index/3.jpg'),
("","3","3", "总统套房","502","8000","888","999","",'../../images/index/4.jpg')
