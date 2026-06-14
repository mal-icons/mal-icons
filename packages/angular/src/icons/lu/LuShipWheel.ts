import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-lu-ship-wheel",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class LuShipWheel {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["circle",{"cx":"12","cy":"12","r":"8"}],["path",{"d":"M12 2v7.5"}],["path",{"d":"m19 5-5.23 5.23"}],["path",{"d":"M22 12h-7.5"}],["path",{"d":"m19 19-5.23-5.23"}],["path",{"d":"M12 14.5V22"}],["path",{"d":"M10.23 13.77 5 19"}],["path",{"d":"M9.5 12H2"}],["path",{"d":"M10.23 10.23 5 5"}],["circle",{"cx":"12","cy":"12","r":"2.5"}]];
  readonly defaultAttr = {"fill":"none","stroke-width":2,"stroke-linecap":"round","stroke-linejoin":"round"};
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default LuShipWheel;
