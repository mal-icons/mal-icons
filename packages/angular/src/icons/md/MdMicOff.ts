import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-md-mic-off",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class MdMicOff {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"d":"M10.8 4.9c0-0.660.54-1.2 1.2-1.2s1.20.54 1.2 1.2l-0.01 3.91L15 10.6V5c0-1.66-1.34-3-3-3-1.54 0-2.79 1.16-2.96 2.65l1.76 1.76V4.9zM19 11h-1.7c0 0.58-0.1 1.13-0.27 1.64l1.27 1.27c0.44-0.880.7-1.870.7-2.91zM4.41 2.86 3 4.27l6 6V11c0 1.66 1.34 3 3 3 0.23 0 0.44-0.030.65-0.08l1.66 1.66c-0.710.33-1.50.52-2.310.52-2.76 0-5.3-2.1-5.3-5.1H5c0 3.41 2.72 6.23 6 6.72V21h2v-3.28a7.13 7.13 0 0 0 2.55-0.9l4.2 4.2 1.41-1.41L4.41 2.86z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default MdMicOff;
