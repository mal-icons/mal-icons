import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-lu-eye-off",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class LuEyeOff {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"d":"M10.73 5.08a10.74 10.74 0 0 1 11.21 6.58 1 1 0 0 1 0 0.7 10.75 10.75 0 0 1-1.44 2.49"}],["path",{"d":"M14.08 14.16a3 3 0 0 1-4.24-4.24"}],["path",{"d":"M17.48 17.5a10.75 10.75 0 0 1-15.42-5.15 1 1 0 0 1 0-0.7 10.75 10.75 0 0 1 4.45-5.14"}],["path",{"d":"m2 2 20 20"}]];
  readonly defaultAttr = {"fill":"none","stroke-width":2,"stroke-linecap":"round","stroke-linejoin":"round"};
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default LuEyeOff;
