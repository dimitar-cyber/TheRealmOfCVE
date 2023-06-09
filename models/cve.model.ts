export class CveModel {
    conn;
    constructor(db: any) {
        this.conn = db.conn;
    }

    async getAllCves() {
        const [rows] = await this.conn.query("SELECT * FROM cve");
        return rows;
    }

    async getSingleCve(id: number) {
        const [rows] = await this.conn.query("SELECT * FROM cve WHERE id = ?", [id]);
        return rows[0];
    }

    async createCve(cveData: any) {
        await this.conn.query("INSERT INTO cve VALUES(NULL, ?, ?, ?)",
            [cveData.cve, cveData.url, cveData.date_of_add])
    }

    async updateCve(id: number, cveData: any): Promise<boolean> {
        const updateUserDataArray = Object.entries(cveData);
        let setStatement = "";
        let preparedStatementData = [];
        for (let i = 0; i < updateUserDataArray.length; i++) {
            setStatement += `${updateUserDataArray[i][0]} = ?`;
            setStatement += (i + 1 !== updateUserDataArray.length) ? ", " : " ";
            preparedStatementData.push(updateUserDataArray[i][1]);
        }
        preparedStatementData.push(id);
        await this.conn.execute(`UPDATE cve SET ${setStatement} WHERE id = ?`, preparedStatementData);
        return true;
    }

    async deleteCve(id: number) {
        await this.conn.query("DELETE FROM cve WHERE id = ?",
            [id])
    }
}