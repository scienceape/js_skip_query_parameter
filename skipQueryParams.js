    function skipParameters(url) {
        const paragraph = url;
        // including the query operator '?'
        //const regexQuery = /^(.*?)\?/g;
        
        //	skipping the query opaerator
        const regexQuery = /^.+?(?=\?)/g;
        let foundWebSource = paragraph.match(regexQuery);
        
        return foundWebSource[0];
    }
    
    // returns "https://www.abc.com/segment"
    console.log(skipParameters('https://www.abc.com/segment?parameter'))
