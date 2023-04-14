export default {
    name: "show",
    type: "document",
    title: "tv-serier",
    fields: [
        {
            name: "title",
            type: "string",
            title: "Title",

        },
        {
            name: "reviews",
            type: "array",
            of: [{type: "review"}],
            title: "Vurderinger"
        }
    ]

}