import { transporter, mailOptions } from "@/lib/nodemailer";

const handler = async(req, res) => {

  if (req.method === 'POST') {

    const data = req.body;
    // Check if the data is valid
    if (!data.name || !data.email) {
      console.log('DATA NOT VALID')
      return res.status(400).json({ message: 'Bad request - data not valid' })
    }

    try {
      console.log(data)
      await transporter.sendMail({
        ...mailOptions,
        text: "This is text string",
        html: `<div><p>Page: ${data.page}</p><p>Name: ${data.name}</p><p>Email: ${data.email}</p><p>Message: ${data.message}</p></div>`
      })

      return res.status(200).json({ message: 'Success' })
    }
    catch (error) {
      console.log(error)
      console.log('ERROR SENDING EMAIL')
      return res.status(400).json({ message: error.message })
    }

  }


  console.log('NOT POST')
  return res.status(400).json({ message: 'Bad request - not post' })
}

export default handler