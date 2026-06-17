import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-bs-house-door-fill",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class BsHouseDoorFill {
  readonly viewBox = "0 0 16 16";
  readonly nodes: NodeTuple[] = [["path",{"d":"M6.5 14.5v-3.5c0-0.240.25-0.490.5-0.49h2c0.25 0 0.50.250.50.5v3.5a0.50.5 0 0 0 0.50.5h4a0.50.5 0 0 0 0.5-0.5v-7a0.50.5 0 0 0-0.15-0.35L13 5.79V2.5a0.50.5 0 0 0-0.5-0.5h-1a0.50.5 0 0 0-0.50.5v1.29L8.35 1.15a0.50.5 0 0 0-0.71 0l-6 6A0.50.5 0 0 0 1.5 7.5v7a0.50.5 0 0 0 0.50.5h4a0.50.5 0 0 0 0.5-0.5"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default BsHouseDoorFill;
