import { Component, Element, Prop, h } from '@stencil/core';
import Plyr from 'plyr';

@Component({
  tag: 'blog-video',
  shadow: false,
})
/**
 * Render the given URL inside an HTML5 video player. Applies a .plyr-video CSS class which is
 * used by https://plyr.io/ on the blog.
 */
export class BlogVideo {
  /**
   * The full URL of the video to render in the HTML5 video player.
   */
  @Prop() src: string;
  
  @Element() el: HTMLElement;

  componentDidRender() {
    new Plyr(this._videoEl());
  }

  _videoEl():HTMLElement {
    return this.el.querySelector('> video');
  }

  render() {
    return (
      <div class="post-video">
        <video class="plyr-video" playsinline controls>
          <source src={this.src} type="video/mp4" />
        </video>
      </div>
    );
  }
}
