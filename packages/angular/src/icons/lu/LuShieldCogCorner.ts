import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-lu-shield-cog-corner",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class LuShieldCogCorner {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"d":"M11 22c-3.81-1.45-7-3.97-7-9V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1v4"}],["path",{"d":"M14.92 16.55 14 16.16"}],["path",{"d":"m14.92 18.84-0.920.38"}],["path",{"d":"M16.55 14.92 16.16 14"}],["path",{"d":"m16.55 20.47-0.380.92"}],["path",{"d":"m18.84 14.920.38-0.92"}],["path",{"d":"m19.23 21.39-0.38-0.92"}],["path",{"d":"m20.47 16.550.92-0.38"}],["path",{"d":"m20.47 18.840.920.38"}],["circle",{"cx":"17.7","cy":"17.7","r":"3"}]];
  readonly defaultAttr = {"fill":"none","stroke-width":2,"stroke-linecap":"round","stroke-linejoin":"round"};
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default LuShieldCogCorner;
