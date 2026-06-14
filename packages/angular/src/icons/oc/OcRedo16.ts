import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-oc-redo-16",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class OcRedo16 {
  readonly viewBox = "0 0 16 16";
  readonly nodes: NodeTuple[] = [["path",{"d":"M14.78 6.28a0.750.75 0 0 0 0-1.06l-3.5-3.5a0.750.75 0 1 0-1.06 1.06L12.44 5H5.25l00.01L5.25 5a0.80.8 0 0 0-0.170.02A4.5 4.5 0 0 0 5.5 14h1.7a0.750.75 0 0 0 0-1.5H5.5a3 3 0 1 1 0-6h6.94L10.22 8.72a0.750.75 0 1 0 1.06 1.06l3.5-3.5Z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default OcRedo16;
