import React from 'react'
import { Button } from "@mui/material";

const Error = () => {
    const [error, setError] = React.useState(false);
    return (
        <div>
            {/* @ts-ignore */}
            <>
                {!error ? (
                    <div>
                        <h1>Error</h1>
                        <Button onClick={() => setError(true)}>Set Error</Button>
                    </div>
                ) : (
                    //  @ts-ignore
                    Error("I am crashed")
                )}
            </>
        </div>

    )
}

export default Error