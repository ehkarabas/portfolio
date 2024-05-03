export default {
  name: 'files',
  title: 'Files',
  type: 'document',
  fields: [
    {
      name: 'title', // Alanın adı
      title: 'Title', // Alanın insan dostu başlığı
      type: 'string', // Alanın tipi (string, number, date gibi)
      description: 'File title', // Alan hakkında açıklama
      validation: (Rule) => Rule.required().error('Title field is required.'),
    },
    {
      name: 'file', // Dosya alanının adı
      title: 'File', // Dosya alanının insan dostu başlığı
      type: 'file', // Dosya tipi
      description: 'Upload file here', // Dosya alanı hakkında açıklama
      validation: (Rule) =>
        // string donuldugunde hata, bool true donuldugunde gecerli
        Rule.custom((file, context) => {
          if (!file) {
            return 'File field is required.' // Dosya yüklenmemişse hata mesajı döndür
          }
          if (!file.asset) {
            // Dosya yüklenmemişse, yani file.asset mevcut değilse, bu durumda dosyanın boyutunu kontrol etmek mümkün değildir. Bu durumda dosyanın boyutuyla ilgili bir kısıtlama koymak gereksiz olacaktır çünkü dosya yüklenmemiştir ve boyutu bilinmemektedir.
            return true // Dosya yüklenmemişse, geçerli kabul edilir.
          }
          const fileSizeInMB = file.asset.size / (1024 * 1024) // Dosyanın boyutunu MB cinsinden hesapla
          if (fileSizeInMB > 10) {
            // Maksimum boyut 10 MB
            return 'File size must be lower than 10mb.' // Hata mesajı
          }
          return true // Geçerli kabul edilir
        }).required(),
    },
  ],
}
