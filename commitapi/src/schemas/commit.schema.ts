import { Schema, Prop, SchemaFactory } from '@nestjs/mongoose'

@Schema({
    timestamps: true
})
export class Commit {
    
    @Prop({
        required: true,
    })
    sha: string;

    @Prop({
        required: true,
    })
    author: string;

    @Prop({
        required: true,
    })
    repo: string;

    @Prop({
        required: true,
    })
    avatar: string;

    @Prop({
        required: true,
    })
    url: string;

    @Prop({
        required: true,
    })
    message: string;

    @Prop({
        required: true,
    })
    date: string;

/*     @Prop({
        unique: true,
        required: true,
    })
    index: number; */
}

export const CommitSchema = SchemaFactory.createForClass(Commit);