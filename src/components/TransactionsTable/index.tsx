import { Container } from "./styles"

export function TranscationsTable() {
  return (
    <Container>
      <table>
        <thead>
          <tr>
            <th>Title</th>
            <th>Value</th>
            <th>Category</th>
            <th>Date</th>
          </tr>
        </thead>

        <tbody>
          <tr>
            <td>Website Dev</td>
            <td className="deposit">$8,000</td>
            <td>Development</td>
            <td>04-02-22</td>
          </tr>

          <tr>
            <td>Rent</td>
            <td className="withdraw">-$1,700</td>
            <td>Flat</td>
            <td>10-02-22</td>
          </tr>

          <tr>
            <td>Dev Course</td>
            <td className="withdraw">-$700</td>
            <td>Course</td>
            <td>08-02-22</td>
          </tr>

          <tr>
            <td>Camera</td>
            <td className="deposit">$4700</td>
            <td>Sold</td>
            <td>06-02-22</td>
          </tr>
        </tbody>
      </table>
    </Container>
  )
}