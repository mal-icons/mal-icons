import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-bs-cloud-drizzle-fill",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class BsCloudDrizzleFill {
  readonly viewBox = "0 0 16 16";
  readonly nodes: NodeTuple[] = [["path",{"d":"M4.16 12.03a0.50.5 0 0 1 0.320.63l-0.5 1.5a0.50.5 0 0 1-0.95-0.32l0.5-1.5a0.50.5 0 0 1 0.63-0.32m6 0a0.50.5 0 0 1 0.320.63l-0.5 1.5a0.50.5 0 0 1-0.95-0.32l0.5-1.5a0.50.5 0 0 1 0.63-0.32m-3.5 1.5a0.50.5 0 0 1 0.320.63l-0.5 1.5a0.50.5 0 0 1-0.95-0.32l0.5-1.5a0.50.5 0 0 1 0.63-0.32m6 0a0.50.5 0 0 1 0.320.63l-0.5 1.5a0.50.5 0 1 1-0.95-0.32l0.5-1.5a0.50.5 0 0 1 0.63-0.32m0.75-8.5a5 5 0 0 0-9.5-1A3.5 3.5 0 1 0 3.5 11H13a3 3 0 0 0 0.41-5.97"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default BsCloudDrizzleFill;
