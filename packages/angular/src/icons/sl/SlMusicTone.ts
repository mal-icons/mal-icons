import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-sl-music-tone",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class SlMusicTone {
  readonly viewBox = "0 0 1024 1024";
  readonly nodes: NodeTuple[] = [["path",{"d":"M852.61 323.3L539.69 10.38c-9.92-9.92-24.67-11.84-36.61-6.02-12.54 4.34-21.6 16.11-21.6 30.13v708.4c-33.92-25.12-78.43-40.53-127.38-40.53-106.06 0-192.11 71.78-192.11 160.29 0 88.54 86.05 160.34 192.11 160.34 106.11 0 192.08-71.78 192.08-160.34 0-3.92-0.37-7.76-0.7-11.63V106.69l261.87 261.86c12.48 12.5 32.75 12.5 45.25 0s12.5-32.77 0-45.25zm-499.23 635.28c-75.65 0-128.35-50.54-128.35-95.87s52.72-95.82 128.35-95.82c74.03 0 126 48.4 128.13 92.99v5.68c-2.14 44.58-54.1 93.02-128.13 93.02z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default SlMusicTone;
