module Jekyll
  class RenderArticle < Liquid::Block
    require "kramdown"

    def initialize(tag_name, input, tokens)
      super
      @input = input;
    end

    def render(context)
      text = Kramdown::Document.new(super).to_html
      "<article class=\"#{@input.chop}\">#{text}</article>"
    end
  end
end

Liquid::Template.register_tag("article", Jekyll::RenderArticle)
