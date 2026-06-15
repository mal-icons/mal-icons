import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-cg-home",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class CgHome {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"fill-rule":"evenodd","clip-rule":"evenodd","d":"M21 8.77L14.02 1.79C12.85 0.62 10.95 0.62 9.78 1.79L3 8.57V23.09H10V17.09C10 15.98 10.9 15.09 12 15.09C13.1 15.09 14 15.98 14 17.09V23.09H21V8.77ZM11.19 3.21L5 9.4V21.09H8V17.09C8 14.88 9.79 13.09 12 13.09C14.21 13.09 16 14.88 16 17.09V21.09H19V9.6L12.61 3.21C12.22 2.82 11.58 2.82 11.19 3.21Z","fill":"currentColor"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default CgHome;
