use std::fs;

fn part1() -> i32 {
    fs::read_to_string("input.txt")
        .unwrap()
        .lines()
        .map(|line| {
            let mut first_num = 0;
            let mut last_num = 0;
            line.chars().for_each(|c| {
                if c.is_digit(10) {
                    last_num = c.to_digit(10).unwrap();
                    if first_num == 0 {
                        first_num = last_num;
                    }
                }
            });
            return (first_num * 10 + last_num) as i32;
        })
        .sum()
}

fn main() {
    dbg!(part1());
}
