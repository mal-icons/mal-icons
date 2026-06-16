import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-mdr-360",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class Mdr_360 {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"d":"M12 7C6.48 7 2 9.24 2 12c0 2.24 2.94 4.13 7 4.77v2.02c0 0.450.540.670.850.35l2.79-2.79c0.2-0.20.2-0.51 0-0.71l-2.79-2.79a0.50.5 0 0 0-0.850.36v1.52c-3.15-0.56-5-1.9-5-2.73 0-1.06 3.04-3 8-3s8 1.94 8 3c0 0.66-1.2 1.68-3.32 2.34-0.410.13-0.680.51-0.680.94 0 0.670.65 1.16 1.280.96C20.11 15.36 22 13.79 22 12c0-2.76-4.48-5-10-5z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default Mdr_360;
