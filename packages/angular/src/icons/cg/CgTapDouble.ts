import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-cg-tap-double",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class CgTapDouble {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"fill-rule":"evenodd","clip-rule":"evenodd","d":"M14.92 18V14C14.92 12.34 13.58 11 11.92 11C10.27 11 8.92 12.34 8.92 14V18C8.92 19.66 10.27 21 11.92 21C13.58 21 14.92 19.66 14.92 18ZM11.92 9C9.16 9 6.92 11.24 6.92 14V18C6.92 20.76 9.16 23 11.92 23C14.69 23 16.92 20.76 16.92 18V14C16.92 11.24 14.69 9 11.92 9Z","fill":"currentColor"}],["path",{"d":"M10.92 14C10.92 13.45 11.37 13 11.92 13C12.48 13 12.92 13.45 12.92 14V17H10.92V14Z","fill":"currentColor"}],["path",{"d":"M11.92 1C14.7 1 17.22 2.13 19.03 3.96L17.61 5.38C16.16 3.91 14.15 3 11.92 3C9.77 3 7.82 3.85 6.39 5.23L4.97 3.81C6.77 2.07 9.22 1 11.92 1Z","fill":"currentColor"}],["path",{"fill-rule":"evenodd","clip-rule":"evenodd","d":"M11.92 5C13.58 5 15.1 5.58 16.3 6.54L14.88 7.97C14.05 7.36 13.03 7 11.92 7C10.85 7 9.85 7.34 9.04 7.92L7.61 6.49C8.8 5.56 10.3 5 11.92 5Z","fill":"currentColor"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default CgTapDouble;
