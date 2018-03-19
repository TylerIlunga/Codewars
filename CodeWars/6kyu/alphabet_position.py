def alphabet_position(text):
    #holds the results that will be joined into a string
    result = []
    #query through string chars
    for i in text:
        #set val to the ascii value of the letter
        val = ord(i.lower())
        #setting range of ascii value
        if val > 96 and val < 123:
            #store alphabet position in array
            result.append(str(val-96))
        #join array of alphabet positions to a single string
    final = " ".join(result)
    return final

print alphabet_position("Hello")
