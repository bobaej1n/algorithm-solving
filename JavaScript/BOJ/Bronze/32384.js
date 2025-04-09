// 사랑은 고려대입니다

const input = +require("fs").readFileSync(0, "utf8").trim();

for (let i = 0; i < input; i++)
{
	if (i >= 1)
	{
		process.stdout.write(" LoveisKoreaUniversity");
	}
	else
	{
		process.stdout.write("LoveisKoreaUniversity");
	}
}