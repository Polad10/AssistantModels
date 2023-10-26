interface Appointment {
  id: number
  datetime: string
  actions: string | null
  treatment_id: number
}

export {Appointment as default, Appointment}
