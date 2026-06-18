import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-ri-list-ordered-2",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class RiListOrdered2 {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"d":"M5.75 3.5H4.72L3.25 3.89V5.45L4.25 5.18L4.25 8.5H3V10H7V8.5H5.75V3.5ZM10 4H21V6H10V4ZM10 11H21V13H10V11ZM10 18H21V20H10V18ZM2.88 15.63C2.88 14.45 3.83 13.5 5 13.5C6.17 13.5 7.13 14.45 7.13 15.63C7.13 16.11 6.96 16.56 6.69 16.92L6.68 16.92L5.32 18.5H7V20H3L3 18.88L5.47 16.04C5.57 15.93 5.63 15.78 5.63 15.63C5.63 15.28 5.35 15 5 15C4.67 15 4.41 15.25 4.38 15.57L4.37 15.88H2.88V15.63Z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default RiListOrdered2;
