import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-tb-database-exclamation",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class TbDatabaseExclamation {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"d":"M4 6c0 1.66 3.58 3 8 3s8 -1.34 8 -3s-3.58 -3 -8 -3s-8 1.34 -8 3"}],["path",{"d":"M4 6v6c0 1.66 3.58 3 8 3c1.12 0 2.18 -0.09 3.15 -0.24m4.85 -2.76v-6"}],["path",{"d":"M4 12v6c0 1.66 3.58 3 8 3c1.06 0 2.08 -0.08 3.01 -0.22"}],["path",{"d":"M19 16v3"}],["path",{"d":"M19 22v0.01"}]];
  readonly defaultAttr = {"fill":"none","stroke-width":2,"stroke-linecap":"round","stroke-linejoin":"round"};
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default TbDatabaseExclamation;
