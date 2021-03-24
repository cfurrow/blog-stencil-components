import { Component, Prop, h } from '@stencil/core';

@Component({
  tag: 'blog-video',
  shadow: false,
})
export class BlogVideo {
  @Prop() src: string;

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
