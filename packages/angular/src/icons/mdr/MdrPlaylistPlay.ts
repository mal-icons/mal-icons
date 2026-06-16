import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-mdr-playlist-play",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class MdrPlaylistPlay {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"d":"M5 10h10c0.55 0 1 0.45 1 1s-0.45 1-1 1H5c-0.55 0-1-0.45-1-1s0.45-1 1-1zm0-4h10c0.55 0 1 0.45 1 1s-0.45 1-1 1H5c-0.55 0-1-0.45-1-1s0.45-1 1-1zm0 8h6c0.55 0 1 0.45 1 1s-0.45 1-1 1H5c-0.55 0-1-0.45-1-1s0.45-1 1-1zm9 0.88v4.23c0 0.390.420.630.760.43l3.53-2.12c0.32-0.190.32-0.66 0-0.86l-3.53-2.12a0.510.51 0 0 0-0.760.44z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default MdrPlaylistPlay;
