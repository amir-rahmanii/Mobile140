import React from 'react'
import { HashLoader } from 'react-spinners'

export default function LoadingSpinner({ loading }) {
    return (
        <div className="flex justify-center items-center h-screen">
            <HashLoader
                size={80}
                color={"#16509D"}
                loading={loading}
            />
        </div>
    )
}
