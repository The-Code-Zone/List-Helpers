//% weight=100 color=#00a4a6 icon="\uf03a"
namespace listHelpers {
    /**
     * Randomly sample items from an array without replacement (like Python's random.sample)
     * @param array The array to sample from
     * @param count The number of items to sample
     * @returns A new array containing the randomly selected items
     */
    //% blockId=list_helpers_sample
    //% block="sample %count items from %array"
    //% count.defl=3
    //% weight=100
    export function sample<T>(array: T[], count: number): T[] {
        if (count > array.length) {
            count = array.length;
        }

        if (count <= 0) {
            return [];
        }

        let result: T[] = [];
        let available = array.slice(); // Create a copy

        for (let i = 0; i < count; i++) {
            let index = Math.randomRange(0, available.length - 1);
            result.push(available[index]);
            available.splice(index, 1); // Remove selected item
        }

        return result;
    }
}