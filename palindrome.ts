function isPalindrome1(str: string): boolean {
    const reversed = str.split('').reverse().join('');
    return reversed === str;
}

function isPalindrome2(str: string): boolean {
    const unmatched = new Set<string>();
    str.split('').forEach(char => {
        if (unmatched.has(char)) unmatched.delete(char);
        else unmatched.add(char);
    });
    return unmatched.size <= 1;
}