export default function Map() {
  return (
    <div className="w-full h-64 rounded-xl overflow-hidden shadow-lg">
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3456.7830650816645!2d-71.25167872367729!3d-29.956917927224506!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9691cba37491176d%3A0x8918725df180429c!2sTarapac%C3%A1%201352%2C%201800385%20Coquimbo!5e0!3m2!1ses!2scl!4v1776831078183!5m2!1ses!2scl"
        width="100%"
        height="100%"
        style={{ border: 0 }}
        allowFullScreen
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      />
    </div>
  );
}
