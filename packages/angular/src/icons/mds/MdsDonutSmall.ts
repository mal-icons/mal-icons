import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-mds-donut-small",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class MdsDonutSmall {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"d":"M13 9.18c0.850.3 1.510.97 1.82 1.82h7.13c-0.47-4.72-4.23-8.48-8.95-8.95v7.13zm-2 5.64C9.84 14.4 9 13.3 9 12c0-1.30.84-2.4 2-2.82V2.05c-5.050.5-9 4.76-9 9.95 0 5.19 3.95 9.45 9 9.95v-7.13zM14.82 13c-0.30.85-0.97 1.51-1.82 1.82v7.13c4.72-0.47 8.48-4.23 8.95-8.95h-7.13z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default MdsDonutSmall;
