import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-bx-wifi",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class BxWifi {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"d":"M12 6c3.54 0 6.84 1.35 9.29 3.81l1.41-1.41C19.87 5.56 16.07 4 12 4c-4.070-7.87 1.56-10.71 4.39l1.41 1.41C5.16 7.35 8.46 6 12 6zm5.67 8.31c-3.07-3.07-8.27-3.07-11.34 0l1.41 1.41c2.31-2.31 6.21-2.31 8.51 0l1.41-1.41z"}],["path",{"d":"M20.44 11.29c-4.57-4.57-12.3-4.57-16.87 0l1.41 1.41c3.81-3.81 10.24-3.81 14.05 0l1.41-1.41z"}],["circle",{"cx":"12","cy":"18","r":"2"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default BxWifi;
