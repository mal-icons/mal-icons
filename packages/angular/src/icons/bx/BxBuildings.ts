import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-bx-buildings",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class BxBuildings {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"d":"M19 2H9c-1.1 0-2 0.9-2 2v6H5c-1.1 0-2 0.9-2 2v9a1 1 0 0 0 1 1h16a1 1 0 0 0 1-1V4c0-1.1-0.9-2-2-2zM5 12h6v8H5v-8zm14 8h-6v-8c0-1.1-0.9-2-2-2H9V4h10v16z"}],["path",{"d":"M11 6h2v2h-2zm4 0h2v2h-2zm0 4.03h2V12h-2zM15 14h2v2h-2zm-8 0h2v2H7z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default BxBuildings;
