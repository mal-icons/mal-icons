import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-ci-monitor",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class CiMonitor {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"d":"M18.43,3.06H5.57a2.5,2.5,0,0,0-2.5,2.5v8.88a2.51,2.51,0,0,0,2.5,2.5h2.91l-0.37,3H7a0.50.5,0,0,0,0,1h10.01a0.50.5,0,0,0,0-1H15.9l-0.37-3h2.91a2.51,2.51,0,0,0,2.5-2.5V5.56A2.5,2.5,0,0,0,18.43,3.06ZM14.9,19.94H9.12l0.37-3h5.03Zm5.04-5.5a1.5,1.5,0,0,1-1.5,1.5H5.57a1.5,1.5,0,0,1-1.5-1.5V5.56a1.5,1.5,0,0,1,1.5-1.5h12.87a1.5,1.5,0,0,1,1.5,1.5Z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default CiMonitor;
