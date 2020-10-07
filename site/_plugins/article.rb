module Jekyll
  class RenderStandardArticle < Liquid::Block
    require "kramdown"

    def render(context)
      text = Kramdown::Document.new(super).to_html
      "<article>#{text}</article>"
    end
  end

  class RenderGridArticle < Liquid::Block
    require "kramdown"

    def render(context)
      text = Kramdown::Document.new(super).to_html
      "<article class=\"grid\">#{text}</article>"
    end
  end
end

Liquid::Template.register_tag("article", Jekyll::RenderStandardArticle)
Liquid::Template.register_tag("article_grid", Jekyll::RenderGridArticle)
