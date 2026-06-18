import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-ri-building-2-line",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class RiBuilding2Line {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"d":"M3 19V5.7C3 5.28 3.26 4.9 3.66 4.76L13.33 1.24C13.59 1.15 13.88 1.28 13.97 1.54C13.99 1.6 14 1.66 14 1.71V6.67L20.32 8.77C20.72 8.91 21 9.29 21 9.72V19H23V21H1V19H3ZM5 19H12V3.86L5 6.4V19ZM19 19V10.44L14 8.77V19H19Z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default RiBuilding2Line;
