var listing_1 = {
    'podcasts': [{
        'repeat(100)': {
            id: '{{objectId()}}',
            index: '{{index()}}',
            name: '{{lorem(5,"words").toUpperCase()}}',
            status: '{{random("Completed","Ongoing","Hiatus")}}',
            listeners: '{{integer(100,999999)}}',
            picture: 'http://placehold.it/320x320',
            about: '{{lorem(1, "paragraphs")}}',
            releaseDate: '{{moment(this.date(new Date(2014, 0, 1), new Date())).format("LLLL")}}',
            category: '{{random("interviews", "fiction", "series")}}',
            hosts: [{
                'repeat(1,3)': {
                    id: '{{index()}}',
                    name: '{{firstName()}} {{surname()}}'
                }
            }]
        }
    }]
}