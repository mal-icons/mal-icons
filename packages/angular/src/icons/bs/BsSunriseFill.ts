import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-bs-sunrise-fill",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class BsSunriseFill {
  readonly viewBox = "0 0 16 16";
  readonly nodes: NodeTuple[] = [["path",{"d":"M7.65 1.15a0.50.5 0 0 1 0.71 0l1.5 1.5a0.50.5 0 0 1-0.710.71L8.5 2.71V4.5a0.50.5 0 0 1-1 0V2.71l-0.650.65a0.50.5 0 1 1-0.71-0.71zM2.34 4.34a0.50.5 0 0 1 0.71 0l1.41 1.41a0.50.5 0 0 1-0.710.71L2.34 5.05a0.50.5 0 0 1 0-0.71m11.31 0a0.50.5 0 0 1 0 0.71l-1.41 1.41a0.50.5 0 1 1-0.71-0.71l1.41-1.41a0.50.5 0 0 1 0.71 0M11.71 11.5a4 4 0 1 0-7.42 0H0.5a0.50.5 0 0 0 0 1h15a0.50.5 0 0 0 0-1h-3.79zM0 10a0.50.5 0 0 1 0.5-0.5h2a0.50.5 0 0 1 0 1h-2A0.50.5 0 0 1 0 10m13 0a0.50.5 0 0 1 0.5-0.5h2a0.50.5 0 0 1 0 1h-2a0.50.5 0 0 1-0.5-0.5"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default BsSunriseFill;
