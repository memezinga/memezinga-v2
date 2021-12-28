import { getById } from '../../../../stores/templates'

export default function handler (req, res) {
  const { templateId } = req.query
  const data = getById(templateId)
  if (!data) {
    return res.status(404).json({ message: 'template not found' })
  }
  res.status(200).json({ data })
}
