import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-lu-camera-off",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class LuCameraOff {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"d":"M14.56 14.56a3 3 0 1 1-4.12-4.12"}],["path",{"d":"m2 2 20 20"}],["path",{"d":"M20 20H4a2 2 0 0 1-2-2V9a2 2 0 0 1 2-2h2a2 2 0 0 0 0.82-0.17"}],["path",{"d":"M9.7 4.02A2 2 0 0 1 10 4h3.99a2 2 0 0 1 1.76 1.05l0.490.9A2 2 0 0 0 18 7H20a2 2 0 0 1 2 2v7.34"}]];
  readonly defaultAttr = {"fill":"none","stroke-width":2,"stroke-linecap":"round","stroke-linejoin":"round"};
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default LuCameraOff;
