import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-la-sms-solid",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class LaSmsSolid {
  readonly viewBox = "0 0 32 32";
  readonly nodes: NodeTuple[] = [["path",{"d":"M 2 5 L 2 25 L 7 25 L 7 30.09 L 8.63 28.78 L 13.34 25 L 30 25 L 30 5 Z M 4 7 L 28 7 L 28 23 L 12.66 23 L 12.38 23.22 L 9 25.91 L 9 23 L 4 23 Z M 8 12 L 8 14 L 24 14 L 24 12 Z M 8 16 L 8 18 L 20 18 L 20 16 Z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default LaSmsSolid;
