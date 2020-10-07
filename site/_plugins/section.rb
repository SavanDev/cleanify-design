module Jekyll
  class RenderStandardSection < Liquid::Block
    require "kramdown"

    def render(context)
      text = Kramdown::Document.new(super).to_html
      "<section>#{text}</section>"
    end
  end

  class RenderTransparentSection < Liquid::Block
    require "kramdown"

    def render(context)
      text = Kramdown::Document.new(super).to_html
      "<section class=\"transparent\">#{text}</section>"
    end
  end
end

Liquid::Template.register_tag("section", Jekyll::RenderStandardSection)
Liquid::Template.register_tag("section_transparent", Jekyll::RenderTransparentSection)
