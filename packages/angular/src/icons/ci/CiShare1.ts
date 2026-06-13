import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-ci-share-1",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class CiShare1 {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["g",{"data-name":"Share 1"}],["path",{"d":"M12.22,11.08a0.50.5,0,0,0,0.70.71l7-7v3.58a0.510.51,0,0,0,0.50.50.50.5,0,0,0,0.5-0.5V3.58a0.50.5,0,0,0-0.5-0.5h-4.79a0.50.5,0,0,0,0,1h3.58Z"}],["path",{"d":"M17.88,20.93H6.12a3.05,3.05,0,0,1-3.05-3.05V6.12a3.05,3.05,0,0,1,3.05-3.05h6.03a0.50.5,0,0,1,0,1H6.12a2.05,2.05,0,0,0-2.05,2.05V17.88a2.05,2.05,0,0,0,2.05,2.05H17.88a2.05,2.05,0,0,0,2.05-2.05V11.85a0.50.5,0,0,1,1,0v6.03A3.05,3.05,0,0,1,17.88,20.93Z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default CiShare1;
