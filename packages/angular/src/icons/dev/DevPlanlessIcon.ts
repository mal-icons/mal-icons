import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-dev-planless-icon",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class DevPlanlessIcon {
  readonly viewBox = "0 0 600 600";
  readonly nodes: NodeTuple[] = [["path",{"fill":"currentColor","d":"m297.3 345.8 186.5 77.8L65.2 597.2c-16 6.5-22.8 1.8-23.4-14.8V460c0-6.9 3.8-13.1 9.6-16.3l1.8-0.8zm261-125.7v159.1l-188.5-73.7c-2.7-0.7-4-3.5-4-5.5a6 6 0 0 1 2.7-5zM41.7 19.9C41.8 2.3 47.8-3.5 63 2l2.10.8L483.8 177l-186.5 77.2L53.2 158a19 19 0 0 1-11.3-15.6l-0.1-2.2z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default DevPlanlessIcon;
