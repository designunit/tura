import QueryString from 'query-string'
import { NextApiRequest, NextApiResponse } from 'next'

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    const url = QueryString.stringifyUrl({
        url: 'https://script.google.com/macros/s/AKfycbyihfTZdfTieKoGuOMTsYrI39SCghw-jr0YHxaZqn3UrOOK7-Eub7GE/exec',
        query: {}, // req.query,
    }, {
        arrayFormat: 'comma'
    })

    await fetch(url, {
        method: 'POST',
        body: JSON.stringify({
            'sectionOne_gender': '2',
            'sectionOne_age': '2',
            'sectionOne_occupation': '2',
            'sectionOne_district': '2',
        })
    })
        .then(res => {
            console.log("RES",res)
            if (res.status !== 200) {
                console.log(res)
            }
            return res // .json()
        })
        // .then(res => {
        //     res.result === 'error' && console.log('result error', res)
        // })
}