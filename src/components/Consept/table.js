import React from "react";




function Table() {
 



  // conceptId bağımlılığını ekliyoruz

  return (
    <div>
      <table className="table container">
        <thead></thead>
        <tbody>
          <tr>
            <th scope="row">Adı</th>
            <td></td>
          </tr>
          <tr>
            <th scope="row">İçindekiler</th>
            <td>Jacob</td>
          </tr>
          {/* Diğer tablo satırları buraya eklenir */}
        </tbody>
      </table>
    </div>
  );
}

export default Table;
