import type { SimulationFormData, SimulationRecord } from "@/data/simulation"

const LOCAL_STORAGE_KEY = 'simulation-data'

export const useSimulationStorage = () => {
  const saveFormData = (formData: SimulationFormData) => {
    const id = crypto.randomUUID()
    const record: SimulationRecord = {...formData, id}

    const storage = localStorage.getItem(LOCAL_STORAGE_KEY)
    const savedData = storage
      ? (JSON.parse(storage) as SimulationRecord[])
      : []

    localStorage.setItem(
      LOCAL_STORAGE_KEY,
      JSON.stringify([...savedData, record]),
    )

    return id
  }

   const getFormData = (id: string) => {
    const storage = localStorage.getItem(LOCAL_STORAGE_KEY)

    if (!storage) {
      return null
    }

    const saveData = JSON.parse(storage) as SimulationRecord[]
    return saveData.find((record) => record.id === id) || null
   }

   const getAllFormData = () => {
  const storage = localStorage.getItem(LOCAL_STORAGE_KEY)

  if (!storage) {
    return []
  }

  return JSON.parse(storage) as SimulationRecord[]
}

   const updateSimulation = (id: string, data: SimulationRecord) => {
    const storage = localStorage.getItem(LOCAL_STORAGE_KEY)
    const savedData = storage ? (JSON.parse(storage) as SimulationRecord[]) : []

    const update = savedData.map((record) =>
      record.id === id ? { ...data } : record,)

    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(update))
   }

  return { saveFormData, getFormData, getAllFormData, updateSimulation}
}

