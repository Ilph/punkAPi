import { RootState } from '../store'

const getHistorys = (state: RootState) => state.historys.historys

export const historySelectors = { getHistorys }
