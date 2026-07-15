class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s: string, t: string): boolean {
        if (s.length !== t.length) {
            return false
        }
        const freq: Record<string, number> = {}
        for (const ch of s) {
            if (freq[ch] == undefined) {
                freq[ch] = 1
            } else {
                freq[ch]++
            }

        }
        for (const ch of t) {
            if (freq[ch] === undefined) {
                return false
            }
            freq[ch]--
        }
        for (const key in freq) {
            if (freq[key] !== 0)
                return false
        }
        return true


    }
}
