import {
  Column,
  CreateDateColumn,
  Entity,
  PrimaryGeneratedColumn,
} from "typeorm";

@Entity("usersSessions")
export default class userSessions {
  @PrimaryGeneratedColumn("uuid")
  id: string;

  @Column("char", { length: 36 })
  userId: string;

  @CreateDateColumn()
  createdAt: string;

  @Column("datetime")
  expiresAt: string;
}
