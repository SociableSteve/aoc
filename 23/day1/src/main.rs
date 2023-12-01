use std::fs;

use fancy_regex::Regex;

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

fn convert(m: &str) -> u32 {
    match m {
        "one" => 1,
        "two" => 2,
        "three" => 3,
        "four" => 4,
        "five" => 5,
        "six" => 6,
        "seven" => 7,
        "eight" => 8,
        "nine" => 9,
        _ => m.chars().last().unwrap().to_digit(10).unwrap(),
    }
}

fn part2() -> i32 {
    let re = Regex::new(r"(?=(one|two|three|four|five|six|seven|eight|nine|[0-9]))").unwrap();
    fs::read_to_string("input.txt")
        .unwrap()
        .lines()
        .map(|line| {
            let caps = re.captures_iter(line);
            if caps.count() == 0 {
                return 0;
            }
            let first_match = convert(
                re.captures_iter(line)
                    .next()
                    .unwrap()
                    .unwrap()
                    .get(1)
                    .unwrap()
                    .as_str(),
            );
            let last_match = convert(
                re.captures_iter(line)
                    .last()
                    .unwrap()
                    .unwrap()
                    .get(1)
                    .unwrap()
                    .as_str(),
            );
            return (first_match * 10 + last_match) as i32;
        })
        .sum()
}

fn main() {
    dbg!(part1());
    dbg!(part2());
}
