import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-cg-corner-left-down",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class CgCornerLeftDown {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"d":"M10.6 6.85C10.6 5.75 11.5 4.85 12.6 4.85L20.6 4.86L20.61 2.86L12.61 2.85C10.4 2.85 8.6 4.64 8.6 6.85L8.59 17.15L4.81 13.37L3.4 14.78L9.75 21.15L16.12 14.79L14.71 13.37L10.59 17.49L10.6 6.85Z","fill":"currentColor"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default CgCornerLeftDown;
