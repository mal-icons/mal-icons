import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-lu-paintbrush",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class LuPaintbrush {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"d":"m14.62 17.9-10.68-2.91"}],["path",{"d":"M18.38 2.62a1 1 0 1 1 3 3L17.36 9.64a0.50.5 0 0 0 0 0.71l0.940.94a2.41 2.41 0 0 1 0 3.41l-0.940.94a0.50.5 0 0 1-0.71 0L8.35 7.35a0.50.5 0 0 1 0-0.71l0.94-0.94a2.41 2.41 0 0 1 3.41 0l0.940.94a0.50.5 0 0 0 0.71 0z"}],["path",{"d":"M9 8c-1.8 2.71-3.97 3.46-6.58 3.95a0.510.51 0 0 0-0.30.82l7.32 8.88a1 1 0 0 0 1.190.2C12.74 20.41 16 16.79 16 15"}]];
  readonly defaultAttr = {"fill":"none","stroke-width":2,"stroke-linecap":"round","stroke-linejoin":"round"};
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default LuPaintbrush;
