import { Schema, Prop, SchemaFactory } from '@nestjs/mongoose'

@Schema({
    timestamps: true
})
export class Queries {
    @Prop({
        unique: true,
        required: true,
        trim: true
    })
    owner: string;

    @Prop({
        unique: true,
        required: true,
        trim: true,
    })
    repo: string;
}

export const QueriesSchema = SchemaFactory.createForClass(Queries);