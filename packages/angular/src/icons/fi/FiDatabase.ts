import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icon/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-fi-database",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icon [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icon>`,
})
export class FiDatabase {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["ellipse",{"cx":"12","cy":"5","rx":"9","ry":"3"}],["path",{"d":"M21 12c0 1.66-4 3-9 3s-9-1.34-9-3"}],["path",{"d":"M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5"}]];
  readonly defaultAttr = {"fill":"none","stroke-width":2,"stroke-linecap":"round","stroke-linejoin":"round"};
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}
