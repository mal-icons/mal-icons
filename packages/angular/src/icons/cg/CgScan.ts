import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-cg-scan",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class CgScan {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"d":"M11 3H13V21H11V3Z","fill":"currentColor"}],["path",{"d":"M5 8C5 7.45 5.45 7 6 7H9V5H6C4.34 5 3 6.34 3 8V16C3 17.66 4.34 19 6 19H9V17H6C5.45 17 5 16.55 5 16V8Z","fill":"currentColor"}],["path",{"d":"M19 8C19 7.45 18.55 7 18 7H15V5H18C19.66 5 21 6.34 21 8V16C21 17.66 19.66 19 18 19H15V17H18C18.55 17 19 16.55 19 16V8Z","fill":"currentColor"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default CgScan;
