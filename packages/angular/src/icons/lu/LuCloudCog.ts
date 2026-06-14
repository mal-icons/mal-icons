import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-lu-cloud-cog",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class LuCloudCog {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"d":"m10.85 19.77-0.380.92"}],["path",{"d":"m13.15 14.230.38-0.92"}],["path",{"d":"M13.15 19.77a3 3 0 1 0-2.3-5.54l-0.38-0.92"}],["path",{"d":"m13.53 20.7-0.38-0.92a3 3 0 1 1-2.3-5.54"}],["path",{"d":"m14.77 15.850.92-0.38"}],["path",{"d":"m14.77 18.150.920.38"}],["path",{"d":"M4.2 15.1a7 7 0 1 1 9.93-9.86A7 7 0 0 1 15.71 8h1.79a4.5 4.5 0 0 1 2.5 8.2"}],["path",{"d":"m9.23 15.85-0.92-0.38"}],["path",{"d":"m9.23 18.15-0.920.38"}]];
  readonly defaultAttr = {"fill":"none","stroke-width":2,"stroke-linecap":"round","stroke-linejoin":"round"};
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default LuCloudCog;
