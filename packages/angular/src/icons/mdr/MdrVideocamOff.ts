import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-mdr-videocam-off",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class MdrVideocamOff {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"d":"M21 14.2V8.91c0-0.89-1.08-1.34-1.71-0.71L17 10.5V7c0-0.55-0.45-1-1-1h-5.61l8.91 8.91c0.620.63 1.70.18 1.7-0.71zM2.71 2.56a11 0 0 0 0 1.41L4.73 6H4c-0.55 0-1 0.45-1 1v10c0 0.550.45 1 1 1h12c0.21 0 0.39-0.080.55-0.18l2.48 2.48a11 0 1 0 1.41-1.41L4.12 2.56a11 0 0 0-1.41 0z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default MdrVideocamOff;
