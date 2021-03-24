import { Component, Element, Prop, h } from '@stencil/core';
import Plyr from 'plyr';

@Component({
  tag: 'blog-video',
  shadow: false,
})
export class BlogVideo {
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
