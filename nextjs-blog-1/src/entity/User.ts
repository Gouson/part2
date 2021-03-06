import { Column, CreateDateColumn, Entity, OneToMany, PrimaryGeneratedColumn, UpdateDateColumn } from 'typeorm';
import { Comment } from './Comment';
import { Post } from './Post'
@Entity('users')
export class User {
    @PrimaryGeneratedColumn('increment')
    id: string;
    @Column('varchar')
    username: string;
    @Column('varchar')
    passwordDigest: string;
    @CreateDateColumn()
    createdAt: Date;
    @UpdateDateColumn()
    updatedAt: Date;

    @OneToMany(type => Post, post => post.author)
    posts: Post[]
    @OneToMany(type => Comment, comment => comment.user)
    comments: Comment[]
}
