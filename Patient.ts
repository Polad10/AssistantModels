interface Patient {
  id: number
  first_name: string
  last_name: string
  city: string | null | undefined
  phone: string | null | undefined
  extra_info: string | null | undefined
}

export {Patient as default, Patient}
