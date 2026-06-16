import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-mdr-transgender",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class MdrTransgender {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"d":"M21.5 1h-4c-0.55 0-1 0.45-1 1s0.45 1 1 1h1.58l-3.97 3.97C14.23 6.36 13.16 6 12 6s-2.230.36-3.110.97l-0.65-0.650.7-0.7a11 0 1 0-1.41-1.41l-0.70.7L4.92 3H6.5c0.55 0 1-0.45 1-1s-0.45-1-1-1h-4c-0.55 0-1 0.45-1 1v4c0 0.550.45 1 1 1s1-0.45 1-1V4.42l1.91 1.9-0.710.71a11 0 1 0 1.41 1.41l0.71-0.710.650.65A5.5 5.5 0 0 0 11 16.91V19h-1c-0.55 0-1 0.45-1 1s0.45 1 1 1h1v1c0 0.550.45 1 1 1s1-0.45 1-1v-1h1c0.55 0 1-0.45 1-1s-0.45-1-1-1h-1v-2.09a5.5 5.5 0 0 0 3.53-8.53l3.97-3.96V6c0 0.550.45 1 1 1s1-0.45 1-1V2c0-0.55-0.45-1-1-1zM12 15c-1.93 0-3.5-1.57-3.5-3.5S10.07 8 12 8s3.5 1.57 3.5 3.5S13.93 15 12 15z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default MdrTransgender;
