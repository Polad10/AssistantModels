interface Appointment {
  id: number
  datetime: string
  actions: string | null | undefined
  treatment_id: number
}

export {Appointment as default, Appointment}
