import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-mds-accessible",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class MdsAccessible {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["circle",{"cx":"12","cy":"4","r":"2"}],["path",{"d":"M19 13v-2c-1.540.02-3.09-0.75-4.07-1.83l-1.29-1.43c-0.17-0.19-0.38-0.34-0.61-0.45-0.01 0-0.01-0.01-0.02-0.01H13c-0.37-0.21-0.78-0.31-1.25-0.25C10.73 7.15 10 8.07 10 9.1V17h7v5h2v-7.5h-5v-3.45c1.29 1.07 3.25 1.94 5 1.95zm-6.17 5c-0.41 1.16-1.52 2-2.83 2-1.66 0-3-1.34-3-3 0-1.310.84-2.41 2-2.83V12.1a5 5 0 1 0 5.9 5.9h-2.07z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default MdsAccessible;
