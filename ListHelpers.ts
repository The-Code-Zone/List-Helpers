/**
 * Helper functions for working with arrays and lists
 */
//% weight=1 color=#00a4a6 icon="\uf03a" advanced=true
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

    /**
     * Check if an item is in an array (like Python's 'in' operator)
     * @param array The array to search in
     * @param item The item to search for
     * @returns True if the item is in the array, false otherwise
     */
    //% blockId=list_helpers_includes
    //% block="%array contains %item"
    //% weight=90
    export function includes<T>(array: T[], item: T): boolean {
        for (let i = 0; i < array.length; i++) {
            if (array[i] === item) {
                return true;
            }
        }
        return false;
    }

    /**
     * Remove the first occurrence of an item from an array by value (like Python's list.remove())
     * Modifies the array in place
     * @param array The array to remove from
     * @param item The item to remove
     * @returns True if an item was removed, false if the item was not found
     */
    //% blockId=list_helpers_remove
    //% block="remove %item from %array"
    //% weight=80
    export function remove<T>(array: T[], item: T): boolean {
        for (let i = 0; i < array.length; i++) {
            if (array[i] === item) {
                array.splice(i, 1);
                return true;
            }
        }
        return false;
    }
}