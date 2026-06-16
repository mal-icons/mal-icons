import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-mdr-power",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class MdrPower {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"d":"M16.01 7 16 4c0-0.55-0.45-1-1-1s-1 0.45-1 1v3h-4V4c0-0.55-0.45-1-1-1s-1 0.45-1 1v3h-0.01C6.9 7 6 7.9 6 8.99v4.66c0 0.530.21 1.040.58 1.41L9.5 18v2c0 0.550.45 1 1 1h3c0.55 0 1-0.45 1-1v-2l2.92-2.92c0.37-0.380.58-0.890.58-1.42V8.99C18 7.89 17.11 7 16.01 7z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default MdrPower;
