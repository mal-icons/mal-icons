import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-mdr-align-horizontal-center",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class MdrAlignHorizontalCenter {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"d":"M12 2c0.55 0 1 0.45 1 1v4h6.5c0.83 0 1.50.67 1.5 1.5s-0.67 1.5-1.5 1.5H13v4h3.5c0.83 0 1.50.67 1.5 1.5s-0.67 1.5-1.5 1.5H13v4c0 0.55-0.45 1-1 1s-1-0.45-1-1v-4H7.5c-0.83 0-1.5-0.67-1.5-1.5S6.67 14 7.5 14H11v-4H4.5C3.67 10 3 9.33 3 8.5S3.67 7 4.5 7H11V3c0-0.550.45-1 1-1z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default MdrAlignHorizontalCenter;
