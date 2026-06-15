import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-cg-math-equal",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class CgMathEqual {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"d":"M5 9C4.45 9 4 9.45 4 10C4 10.55 4.45 11 5 11H19C19.55 11 20 10.55 20 10C20 9.45 19.55 9 19 9H5Z","fill":"currentColor"}],["path",{"d":"M5 13C4.45 13 4 13.45 4 14C4 14.55 4.45 15 5 15H19C19.55 15 20 14.55 20 14C20 13.45 19.55 13 19 13H5Z","fill":"currentColor"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default CgMathEqual;
