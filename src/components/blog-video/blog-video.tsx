import { Component, Prop, h } from '@stencil/core';

@Component({
  tag: 'blog-video',
  shadow: true,
})
export class BlogVideo {
  @Prop() filename: string;

  postAssetPath() {
    // This should exist on every page.
    const assetPath:HTMLInputElement = document.getElementById('asset-path') as HTMLInputElement;
    return `${assetPath.value}/${this.filename}`;
  }

  render() {
    return (
      <div class="post-video">
        <video class="plyr-video" playsinline controls>
          <source src={this.postAssetPath()} type="video/mp4" />
        </video>
      </div>
    );
  }
}
