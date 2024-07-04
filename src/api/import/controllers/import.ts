const XLSX = require("xlsx");

module.exports = {
  async importExcel(ctx) {
    try {
      console.log(JSON.stringify(ctx, null, 2));
      const { file } = ctx.request.files;

      if (!file) {
        return ctx.badRequest("No file uploaded");
      }

      const workbook = XLSX.read(file.buffer, { type: "buffer" });
      const sheetName = workbook.SheetNames[0];
      const sheet = workbook.Sheets[sheetName];
      const data = XLSX.utils.sheet_to_json(sheet);

      for (const row of data) {
        // Assuming your collection type is named 'article'
        // and the Excel columns match your collection fields
        await strapi.entityService.create("api::committee.committee", {
          data: {
            name: row.name,
            university: row.university,
            year: row.year,
            // Add other fields as necessary
          },
        });
      }

      return ctx.send({
        message: `Successfully imported ${data.length} records`,
      });
    } catch (error) {
      return ctx.badRequest("Failed to import data", { error: error.message });
    }
  },
};
