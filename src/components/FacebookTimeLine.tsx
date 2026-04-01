const FacebookTimeline = () => {
  return (
    <section className="py-12 md:py-16 text-center">
      <h2 className="text-3xl md:text-4xl font-bold mb-8">
        Nossa Timeline no Facebook
      </h2>

      <div className="flex justify-center px-4">
        {/* 🔥 BORDA COM DEGRADÊ */}
        <div className="p-[2px] rounded-2xl bg-gradient-to-r from-primary via-orange-400 to-primary max-w-full w-full sm:max-w-[500px]">
          {/* CONTEÚDO */}
          <div className="bg-background rounded-2xl overflow-hidden">
            <iframe
              src="https://www.facebook.com/plugins/page.php?href=https://www.facebook.com/jangopesquepague/&tabs=timeline&width=500&height=700"
              className="w-full h-[500px] sm:h-[800px]"
              style={{ border: "none" }}
              frameBorder="0"
            ></iframe>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FacebookTimeline;
