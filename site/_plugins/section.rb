module Jekyll
  class RenderSection < Liquid::Block
    require "kramdown"

    def initialize(tag_name, input, tokens)
      super
      @input = input;
    end

    def render(context)
      text = Kramdown::Document.new(super).to_html
      "<section class=\"#{@input}\">#{text}</section>"
    end
  end
end

Liquid::Template.register_tag("section", Jekyll::RenderSection)
