import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-bs-truck-flatbed",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class BsTruckFlatbed {
  readonly viewBox = "0 0 16 16";
  readonly nodes: NodeTuple[] = [["path",{"d":"M11.5 4a0.50.5 0 0 1 0.50.5V5h1.02a1.5 1.5 0 0 1 1.170.56l1.48 1.85a1.5 1.5 0 0 1 0.330.94V10.5a1.5 1.5 0 0 1-1.5 1.5H14a2 2 0 1 1-4 0H5a2 2 0 1 1-4 0 1 1 0 0 1-1-1v-1h11V4.5a0.50.5 0 0 1 0.5-0.5M3 11a1 1 0 1 0 0 2 1 1 0 0 0 0-2m9 0a1 1 0 1 0 0 2 1 1 0 0 0 0-2m1.73 0h0.77a0.50.5 0 0 0 0.5-0.5V8.35a0.50.5 0 0 0-0.11-0.31l-1.48-1.85A0.50.5 0 0 0 13.02 6H12v4a2 2 0 0 1 1.73 1"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default BsTruckFlatbed;
