import projects from '../../src/mocks/projects';

// eslint-disable-next-line import/no-anonymous-default-export
export default function (req, res) {
  let arr = projects
  
  if (req.method === 'GET') {
    res.status(200).json(arr)
  } else if (req.method === 'POST') {
    const body = req.body
  
    if (!body.name) {
      res.status(400).json({message: 'Project is not created'})
    }
    
    arr.push(body)
    
    res.status(201).json({message: "Project successfully created", data: arr});
  } else if (req.method === 'PUT') {
    const body = req.body
  
    if (!body.name) {
      res.status(400).json({message: 'Project is not updated'})
    }
    
    let index = arr.findIndex(i => i.id === body.id)
  
    arr[index] = {...arr[index], ...body}
  
    res.status(201).json({message: "Project successfully updated", data: arr});
  } else if (req.method === 'DELETE') {
    const body = req.body
    
    let index = arr.findIndex(i => i.id === body.id)
    
    arr.splice(index, 1)
    
    res.status(201).json({message: "Project successfully deleted", data: arr});
  }
}