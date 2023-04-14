import {createClient} from '@sanity/client'

export const client = createClient({
    projectId: "pvy3ng19",
    dataset: "production",
    useCdn: true,
    apiVersion: "2021-10-21"

})

export const writeClient = createClient({
    token: "skx6aD3uAmtrd2q01HWIru6XpijsntXWZmLI399O413chLtji3wmqcl5hFoquz6b16B951l4ogfm7QCvJydlhLg3YrxEirUFyqjhkVgKfHjPE1Ozihgo8e3iWkjJJ3RIGOnK7wFHuVtgQPJe27R1zdqNwisI0BOlrUgdIYMkYceFncX8IZXo",
    projectId: "pvy3ng19",
    dataset: "production"
})