interface BaseTreatment {
  start_date: string
  title: string
  patient_id: number
}

interface Treatment extends BaseTreatment {
  id: number
  finished: boolean
}

interface TreatmentRequest extends BaseTreatment {
  id?: number | null | undefined
  finished?: boolean | null | undefined
}

export { Treatment, TreatmentRequest }
