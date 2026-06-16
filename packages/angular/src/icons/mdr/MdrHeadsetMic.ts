import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-mdr-headset-mic",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class MdrHeadsetMic {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"d":"M11.4 1.02C6.62 1.33 3 5.52 3 10.31V17c0 1.66 1.34 3 3 3h1c1.1 0 2-0.9 2-2v-4c0-1.1-0.9-2-2-2H5v-1.71C5 6.45 7.96 3.11 11.79 3A7 7 0 0 1 19 10v2h-2c-1.1 0-2 0.9-2 2v4c0 1.10.9 2 2 2h2v1h-6c-0.55 0-1 0.45-1 1s0.45 1 1 1h5c1.66 0 3-1.34 3-3V10c0-5.17-4.36-9.32-9.6-8.98z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default MdrHeadsetMic;
