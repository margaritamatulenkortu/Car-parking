create TABLE users (

    id           SERIAL       PRIMARY KEY,
    name         VARCHAR(50)  NOT NULL,
    surname      VARCHAR(50)  NOT NULL,
    email        VARCHAR(80)  NOT NULL,
    password     VARCHAR(80)  NOT NULL,
    position     VARCHAR(80)  NOT NULL,
    image        VARCHAR(250),
    is_admin     BOOLEAN      DEFAULT FALSE,
    is_active    BOOLEAN      DEFAULT TRUE
);

create TABLE room (

    id               SERIAL       PRIMARY KEY,
    name             VARCHAR(50) ,
    floor            INT  NOT NULL,
    max_capacity     INT  NOT NULL,
    is_available     BOOLEAN      DEFAULT TRUE
);

create TABLE booking (

    id             SERIAL         PRIMARY KEY,
    user_id        INT            NOT NULL,
    room_id        INT            NOT NULL,
    start_date     TIMESTAMP      NOT NULL,
    end_date       TIMESTAMP      NOT NULL,
    comments       VARCHAR(255),
    title          VARCHAR(100),
    CONSTRAINT fk_user
        FOREIGN KEY (user_id)
             REFERENCES users (id)
             ON DELETE CASCADE,
    CONSTRAINT fk_room
         FOREIGN KEY (room_id)
             REFERENCES room (id)
             ON DELETE CASCADE
);

