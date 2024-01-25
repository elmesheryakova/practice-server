import {app} from "./app";

const port = process.env.PORT || 8089
app.listen(port, () => {
    console.log(`listen ${port}`)
})
