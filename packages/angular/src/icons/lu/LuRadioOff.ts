import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-lu-radio-off",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class LuRadioOff {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"d":"M13.41 13.41a2 2 0 1 1-2.83-2.83"}],["path",{"d":"M16.25 7.76a6 6 0 0 1 1.74 4.57"}],["path",{"d":"M19.08 4.93a10 10 0 0 1 2.23 10.72"}],["path",{"d":"m2 2 20 20"}],["path",{"d":"M4.93 19.07a10 10 0 0 1 0-14.13"}],["path",{"d":"M7.75 16.24a6 6 0 0 1 0-8.48"}]];
  readonly defaultAttr = {"fill":"none","stroke-width":2,"stroke-linecap":"round","stroke-linejoin":"round"};
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default LuRadioOff;
