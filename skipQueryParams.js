function skipParameters(url) {
        const paragraph = url;
        // including the query operator '?'
        //const regexQuery = /^(.*?)\?/g;
        
        //	skipping the query opaerator
        const regexQuery = /^.+?(?=\?)/g;
        let foundWebSource = paragraph.match(regexQuery);
        
        // if there was a query in the url return the regexed data else return the URL
        if (foundWebSource) {
        	return foundWebSource[0];
        }
        else {
            return url;
        }
        
    }
    
    // returns "https://www.abc.com/segment"
    console.log(skipParameters('https://www.abc.com/segment?parameter'))
