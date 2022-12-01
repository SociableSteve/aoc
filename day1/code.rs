use std::fs::File;
use std::io::{self, prelude::*, BufReader};

fn main() -> io::Result<()> {
    let file = File::open("input.txt")?;
    let reader = BufReader::new(file);

    let mut counts = Vec::new();
    let mut running_total: u32 = 0;

    for line in reader.lines() {
        match line {
            Ok(value) => {
                match value.len() {
                    0 => {
                        counts.push(running_total);
                        running_total = 0;
                    },
                    _ => running_total += value.parse::<u32>().unwrap(),
                }
            },
            Err(_) => panic!("Error reading file!")
        }
    }

    counts.sort_by(|a, b| b.cmp(a));

    println!("Maximum: {}", counts[0]);
    println!("Top three: {}", counts[0] + counts[1] + counts[2]);

    Ok(())
}