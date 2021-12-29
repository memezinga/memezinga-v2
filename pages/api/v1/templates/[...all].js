import path from 'path'
import fs from 'fs'
import { getById } from '../../../../stores/templates'

export default function handler (req, res) {
  const [templateId, imgRequested] = req.query.all
  const data = getById(templateId)

  if (!data) {
    return res.status(404).json({ message: 'template not found' })
  }

  if (imgRequested) {
    const imageLocation = path.join(process.cwd(), 'data', 'templates', data.id)
    fs.readFile(imageLocation, (error, image) => {
      if (error) {
        return res.status(500).json({ message: 'image is not available' })
      }
      res.setHeader('content-type', data['content-type'])
      return res.status(200).send(image)
    })
  } else {
    res.status(200).json({ data })
  }
}
