#!/usr/bin/env rust-script

fn reverse_pairs(nums: Vec<i32>) -> i32 {
    let mut pairs = 0;

    for i in 0..nums.len() {
        for j in (i + 1)..nums.len() {
            // check overflow
            let mul = nums[j].checked_mul(2);

            if mul == None {
                continue;
            }

            if nums[i] > 2 * nums[j] {
                println!("Found pair! {:?}", (i, j));
                pairs += 1;
            }
        }
    }

    return pairs;
}

fn main() {
    let nums: Vec<i32> = vec![
        2147483647, 2147483647, 2147483647, 2147483647, 2147483647, 2147483647,
    ];

    println!("{}", reverse_pairs(nums));
}
