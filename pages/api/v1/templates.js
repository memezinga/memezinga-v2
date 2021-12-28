import { getAll } from '../../../stores/templates'

export default function handler (req, res) {
  res.status(200).json({ data: getAll() })
}
