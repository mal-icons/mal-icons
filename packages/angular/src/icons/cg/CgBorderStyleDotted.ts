import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-cg-border-style-dotted",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class CgBorderStyleDotted {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"d":"M3 11H1V13H3V11Z","fill":"currentColor"}],["path",{"d":"M7 11H5V13H7V11Z","fill":"currentColor"}],["path",{"d":"M9 11H11V13H9V11Z","fill":"currentColor"}],["path",{"d":"M15 11H13V13H15V11Z","fill":"currentColor"}],["path",{"d":"M17 11H19V13H17V11Z","fill":"currentColor"}],["path",{"d":"M23 11H21V13H23V11Z","fill":"currentColor"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default CgBorderStyleDotted;
