import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-mds-add-to-drive",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class MdsAddToDrive {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"d":"M19 11c0.17 0 0.330.010.490.02L15 3H9l5.68 9.84A5.99 5.99 0 0 1 19 11zM8.15 4.52 2 15.5 5 21l6.33-10.97zM13.2 15.5H9.9L6.73 21h7.81A5.93 5.93 0 0 1 13 17c0-0.520.07-1.020.2-1.5zm6.80.5v-3h-2v3h-3v2h3v3h2v-3h3v-2z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default MdsAddToDrive;
