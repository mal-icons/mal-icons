import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-lu-triangle-dashed",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class LuTriangleDashed {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"d":"M10.17 4.19a2 2 0 0 1 3.670.01"}],["path",{"d":"M14 21h2"}],["path",{"d":"m15.87 7.74 1 1.73"}],["path",{"d":"m18.85 12.95 1 1.73"}],["path",{"d":"M21.82 18.18a2 2 0 0 1-1.83 2.82"}],["path",{"d":"M4.02 21a2 2 0 0 1-1.84-2.84"}],["path",{"d":"m5.14 12.95-1 1.73"}],["path",{"d":"M8 21h2"}],["path",{"d":"m8.1 7.74-1 1.73"}]];
  readonly defaultAttr = {"fill":"none","stroke-width":2,"stroke-linecap":"round","stroke-linejoin":"round"};
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default LuTriangleDashed;
