export interface BuguRoutesData {
  sort: number
  name?: string
  path: string
  redirect?: string
  component: string
  label: string
  icon?: string
  children?: Array<BuguRoutesData>
  hidden?: boolean
}
