import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-lu-save-all",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class LuSaveAll {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"d":"M10 2v3a1 1 0 0 0 1 1h5"}],["path",{"d":"M18 18v-6a1 1 0 0 0-1-1h-6a1 1 0 0 0-1 1v6"}],["path",{"d":"M18 22H4a2 2 0 0 1-2-2V6"}],["path",{"d":"M8 18a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9.17a2 2 0 0 1 1.410.59l2.83 2.83A2 2 0 0 1 22 6.83V16a2 2 0 0 1-2.01 2z"}]];
  readonly defaultAttr = {"fill":"none","stroke-width":2,"stroke-linecap":"round","stroke-linejoin":"round"};
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default LuSaveAll;
