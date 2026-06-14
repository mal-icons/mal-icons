import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-lu-theater",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class LuTheater {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"d":"M2 10s3-3 3-8"}],["path",{"d":"M22 10s-3-3-3-8"}],["path",{"d":"M10 2c0 4.4-3.6 8-8 8"}],["path",{"d":"M14 2c0 4.4 3.6 8 8 8"}],["path",{"d":"M2 10s2 2 2 5"}],["path",{"d":"M22 10s-2 2-2 5"}],["path",{"d":"M8 15h8"}],["path",{"d":"M2 22v-1a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v1"}],["path",{"d":"M14 22v-1a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v1"}]];
  readonly defaultAttr = {"fill":"none","stroke-width":2,"stroke-linecap":"round","stroke-linejoin":"round"};
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default LuTheater;
