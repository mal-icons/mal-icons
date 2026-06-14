import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-fc-trademark",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class FcTrademark {
  readonly viewBox = "0 0 48 48";
  readonly nodes: NodeTuple[] = [["circle",{"fill":"#9C27B0","cx":"24","cy":"24","r":"21"}],["path",{"fill":"#E1BEE7","d":"M20.6,18.5h-4.2v14.2h-3.5V18.5H8.7v-2.9h11.9V18.5z"}],["path",{"fill":"#E1BEE7","d":"M27.1,15.6L30.3,28l3.2-12.4h4.5v17.1h-3.5v-4.6l0.3-7.1l-3.4,11.8h-2.4L25.7,21l0.3,7.1v4.6h-3.5V15.6 H27.1z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default FcTrademark;
