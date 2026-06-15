import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-cg-bell",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class CgBell {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"fill-rule":"evenodd","clip-rule":"evenodd","d":"M14 3V3.29C16.89 4.15 19 6.83 19 10V17H20V19H4V17H5V10C5 6.83 7.11 4.15 10 3.29V3C10 1.9 10.9 1 12 1C13.1 1 14 1.9 14 3ZM7 17H17V10C17 7.24 14.76 5 12 5C9.24 5 7 7.24 7 10V17ZM14 21V20H10V21C10 22.1 10.9 23 12 23C13.1 23 14 22.1 14 21Z","fill":"currentColor"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default CgBell;
