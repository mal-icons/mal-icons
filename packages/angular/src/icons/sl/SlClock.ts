import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-sl-clock",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class SlClock {
  readonly viewBox = "0 0 1024 1024";
  readonly nodes: NodeTuple[] = [["path",{"d":"M512 0C229.23 0 0 229.23 0 512c0 282.78 229.23 512 512 512 282.78 0 512-229.22 512-512C1024 229.23 794.78 0 512 0zm0 961.01c-247.02 0-448-201.98-448-449.01 0-247.02 200.98-448 448-448s448 200.98 448 448-200.98 449.01-448 449.01zm32-462V192c0-17.66-14.34-32-32-32s-32 14.34-32 32v320c0 9.06 3.79 17.2 9.86 23.010.530.620.96 1.3 1.54 1.89l158.38 158.4c12.5 12.48 32.75 12.48 45.25 0 12.5-12.5 12.5-32.77 0-45.26z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default SlClock;
