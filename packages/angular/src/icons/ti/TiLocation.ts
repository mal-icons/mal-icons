import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-ti-location",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class TiLocation {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"d":"M17.66 5.3c-3.12-3.07-8.19-3.07-11.31 0-3.12 3.07-3.12 8.06 0 11.13l5.66 5.57 5.66-5.56c3.12-3.07 3.12-8.06 0-11.13zm-5.66 8.2c-0.67 0-1.29-0.26-1.77-0.73-0.97-0.97-0.97-2.56 0-3.540.47-0.47 1.1-0.73 1.77-0.73s1.30.26 1.770.73c0.980.980.98 2.56 0 3.54-0.470.47-1.10.73-1.770.73z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default TiLocation;
