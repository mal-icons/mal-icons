import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-cg-laptop",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class CgLaptop {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"fill-rule":"evenodd","clip-rule":"evenodd","d":"M3 6C3 4.9 3.9 4 5 4H19C20.1 4 21 4.9 21 6V14C21 15.1 20.1 16 19 16H5C3.9 16 3 15.1 3 14V6ZM5 6H19V14H5V6Z","fill":"currentColor"}],["path",{"d":"M2 18C1.45 18 1 18.45 1 19C1 19.55 1.45 20 2 20H22C22.55 20 23 19.55 23 19C23 18.45 22.55 18 22 18H2Z","fill":"currentColor"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default CgLaptop;
