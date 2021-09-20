module.exports = {
    // Will reduce the length of the post text and add a ... at the end 
    format_post_text: text => {
        const textArray = text.split('');
        if(textArray.length > 150) {
            return `${textArray.slice(0,150).join('')}...`;
        }
        return text; 
    }
}


