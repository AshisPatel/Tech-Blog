const {format_post_text} = require('../utils/helpers');

test('format_post_text returns a reduced text string if the given string is too long', () =>{
    const text1 = "How long is this string of characters? Well it is longer than 150 characters, that's for sure. So, we are going to return a reduced string instead of the entire thing."
    const text2 = "This string is less than 150 characters, and so all of it will be returned!";

    expect(format_post_text(text1)).toBe("How long is this string of characters? Well it is longer than 150 characters, that's for sure. So, we are going to return a reduced string instead of ...");

    expect(format_post_text(text2)).toBe(text2);
})