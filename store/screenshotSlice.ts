import { Screenshot } from "@/components/Hero";
import {createSlice} from '@reduxjs/toolkit'

interface ScreenshotState {
    screenshots: Screenshot[]
}

const initialState: ScreenshotState = {
    screenshots: []
}

const screenshotSlice = createSlice({
    name: "screenshots",
    initialState,
    reducers: {
        setScreenshots: (state, action) => {
            state.screenshots = action.payload
        }
    }
})

export const { setScreenshots } = screenshotSlice.actions

export default screenshotSlice.reducer