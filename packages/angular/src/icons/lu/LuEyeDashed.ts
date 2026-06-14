import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-lu-eye-dashed",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class LuEyeDashed {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"d":"M13.05 18.95a11 11 0 0 1-2.11 0"}],["path",{"d":"M13.05 5.05a11 11 0 0 0-2.110"}],["path",{"d":"M17.07 6.27a11 11 0 0 1 1.75 1.17"}],["path",{"d":"M18.83 16.55a11 11 0 0 1-1.75 1.17"}],["path",{"d":"M2.51 13.3a11 11 0 0 1-0.45-0.95 1 1 0 0 1 0-0.7 11 11 0 0 1 0.45-0.95"}],["path",{"d":"M21.49 10.7a11 11 0 0 1 0.450.96 1 1 0 0 1 0 0.7 11 11 0 0 1-0.450.95"}],["path",{"d":"M5.17 7.45a11 11 0 0 1 1.75-1.17"}],["path",{"d":"M6.93 17.73a11 11 0 0 1-1.75-1.17"}],["circle",{"cx":"12","cy":"12","r":"3"}]];
  readonly defaultAttr = {"fill":"none","stroke-width":2,"stroke-linecap":"round","stroke-linejoin":"round"};
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default LuEyeDashed;
