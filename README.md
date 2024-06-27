# Not Paylaşım Uygulaması

Bu depoda, [Spring Boot API servisini](https://github.com/Mehmettakkan/NoteSharingApp) uygulamasının frontend kodlarını içermektedir. Bu uygulama, üniversite öğrencilerinin ders notlarını paylaşmasını ve bu notlara kolayca erişim sağlamasını amaçlar.

## Başlangıç

### Gereksinimler

- Node.js
- npm veya yarn
- Git

### Kurulum

1. **Depoyu klonlayın:**
    ```sh
    git clone https://github.com/kullaniciadi/not-paylasim.git
    cd not-paylasim
    ```

2. **Gerekli paketleri yükleyin:**
    ```sh
    npm install
    ```

3. **Uygulamayı başlatın:**
    ```sh
    npm start
    ```

4. **Backend'i çalıştırın:**
    - Backend için [Spring Boot API servisini](https://github.com/Mehmettakkan/NoteSharingApp) klonlayın ve talimatları izleyin.

### Kullanım

- `npm start` komutu ile uygulamayı başlattıktan sonra, tarayıcınızda `http://localhost:3000` adresine gidin.
- Ders notları paylaşabilir, favorilerinize ekleyebilir ve notlar arasında arama yapabilirsiniz.

## Proje Yapısı

- **src**: Uygulamanın ana kaynak kodları
  - **components**: Tekrar kullanılabilir React bileşenleri
  - **pages**: Farklı sayfalar (örn. ana sayfa, not detayı, kullanıcı profili)
  - **services**: API çağrıları için servisler
  - **store**: Redux store ve ilgili dosyalar
  - **styles**: CSS dosyaları
- **public**: Statik dosyalar

## Katkıda Bulunma

1. Bu projeyi forklayın.
2. Kendi branşınızı oluşturun (`git checkout -b ozellik-adi`).
3. Değişikliklerinizi yapın (`git commit -am 'Yeni özellik ekle'`).
4. Branşınıza push edin (`git push origin ozellik-adi`).
5. Bir pull request açın.

## Özellikler

- **Ders Notlarını Paylaşma:** Kullanıcılar, ders notlarını yükleyerek diğer öğrencilerle paylaşabilirler.
- **Favori Notlar:** Beğenilen notlar favorilere eklenebilir ve daha sonra kolayca erişilebilir.
- **Not Arama:** Anahtar kelimelerle notlar arasında arama yaparak istenilen notlar bulunabilir.
- **Kategori Bazlı Filtreleme:** Notlar, derslere ve kategorilere göre filtrelenebilir.
- **Kullanıcı Profilleri:** Öğrenciler, kendi profillerini oluşturabilir ve paylaştıkları notları yönetebilirler.

## Teknolojiler

- **Frontend:** React, Redux, Semantic UI React, React Router, Axios
- **Backend:** Spring Boot (API servisi)
- **Veri Tabanı:** PostgreSQL
- **Diğer:** Git, GitHub, Redux DevTools, React Toastify
