export default function BasicFormatters() {

    const padStartFormatter = (value: number | string, count: number, cases: string) => {
        return String(value).padStart(count, cases)
    }
    return {
        padStartFormatter
    }
}