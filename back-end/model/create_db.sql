drop table if exists rooms;

create table rooms (
    room_id int not null,
    img text,
    people int,
    star float,
    review int,
    detail text,
    title text,
    primary key(room_id)
);

insert into rooms values
(0, 'https://images.homify.com/c_fill,f_auto,h_700,q_auto/v1530498869/p/photo/image/2620463/39BBL.jpg',
5, 4.5, 184, '침실1개, 침대1개, 욕실1개', 'Luxury Gold Coast Hinterland Villa'),
(1, 'https://image.ohou.se/image/resize/bucketplace-v2-development/uploads-advices-photos-1486025595691_d7EDqPqh.JPG/1440/none',
 3, 3, 19, '건물 내 무료주차, 무선 인터넷', 'Forest-and-Heaven Themed Apartment Close to the Heart of the CBD'),
(2, 'https://img1.daumcdn.net/thumb/R720x0/?fname=https://t1.daumcdn.net/liveboard/realty/c613a0fce3224c29bd6d1ff3d2d75838.png',
 1, 5, 321, '주방, 세탁기, 무선인터넷', 'Maleny: "the Bower" - rustique rainforest retreat'),
(3, 'https://post-phinf.pstatic.net/MjAxNzA4MDhfMTU4/MDAxNTAyMTc5MTQ5NTA0.tT2jj-go-9kM-q_vOjNiKG_Sg5_NuC3L4rgbHF0R1_cg.Wideql7UAkFFb_TpqVZK8R44aLwhaSX5Kf1z36_jSo8g.JPEG/001.jpg?type=w1200',
 6, 3.1, 332, '원룸, 침대2개, 욕실1개', 'Central Surfers Studio Ocean View No Cleaning Fee!'),
 (4, 'https://images.homify.com/c_fill,f_auto,h_700,q_auto/v1530498869/p/photo/image/2620463/39BBL.jpg',
5, 2.4, 93, '와이파이 제공, 침대 4개, 단독주택', 'Stone Haven-self contained Yarra Valley Guesthouse'),
(5, 'https://image.ohou.se/image/resize/bucketplace-v2-development/uploads-advices-photos-1486025595691_d7EDqPqh.JPG/1440/none',
 3, 5, 133, '복합주택, 역까지 도보2분', 'Noosa Fig & Mulberry Luxury Apartment'),
(6, 'https://img1.daumcdn.net/thumb/R720x0/?fname=https://t1.daumcdn.net/liveboard/realty/c613a0fce3224c29bd6d1ff3d2d75838.png',
 1, 1.4, 22, '침실1개, 침대 3개, 바다 전경', 'Luxury Master Room w Stunning River View - MODERN'),
(7, 'https://post-phinf.pstatic.net/MjAxNzA4MDhfMTU4/MDAxNTAyMTc5MTQ5NTA0.tT2jj-go-9kM-q_vOjNiKG_Sg5_NuC3L4rgbHF0R1_cg.Wideql7UAkFFb_TpqVZK8R44aLwhaSX5Kf1z36_jSo8g.JPEG/001.jpg?type=w1200',
 6, 0, 0, '주차장 제공, 대중교통 용이', 'Secluded Magical Rainforest Retreat');