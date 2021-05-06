import express from 'express';

const app = express();

const add = (a: number, b?: number): number => {
    return a + (b as number);
};

app.get('/', (req: any) => {
    req.name = 'bob';
    console.log(req.name);
});

app.listen(1234, () => {
    console.log("server started")
});