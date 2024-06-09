def subarray_sum(arr, target):
    curr_sum, start = 0, 0
    for end, value in enumerate(arr):
        curr_sum += value
        while curr_sum > target and start <= end:
            curr_sum -= arr[start]
            start += 1
        if curr_sum == target:
            return True
    return False

# Example usage:
arr = [4, 2, 7, 1, 9, 5]
target = 17
print(subarray_sum(arr, target))  # Output: true
