import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-si-v0",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class SiV0 {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"d":"M14.07 6.03v2.22h5.73q0.0800.150.01l-5.85 5.75a2 2 0 0 1-0.02-0.31V8.25h-2.35v5.45c0 2.32 1.94 4.22 4.26 4.22h5.68v-2.22h-5.67q-0.03 0-0.060l5.73-5.63q0.010.080.010.17v5.47H24v-5.46a4.2 4.2 0 0 0-4.2-4.2zM0 8.24l8.28 9.27c0.840.94 2.40.35 2.4-0.91V8.24H8.19v5.44l-4.86-5.44Z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default SiV0;
