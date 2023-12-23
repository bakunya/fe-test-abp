const months = [
	"Januari",
	"Februari",
	"Maret",
	"April",
	"Mei",
	"Juni",
	"Juli",
	"Agustus",
	"September",
	"Oktober",
	"November",
	"Desember",
]

export default function readableDate(date: string) {
	const x = date.split("T")[0].split("-").map((x) => parseInt(x));

	return `${x[2]} ${months[x[1] - 1]} ${x[0]}`;
}