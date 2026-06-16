import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-mdr-taxi-alert",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class MdrTaxiAlert {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"d":"M18 13c-1.91 0-3.63-0.76-4.89-2h-8.3l1.04-3h5.44C11.1 7.37 11 6.7 11 6s0.1-1.370.29-2H9c-0.55 0-1 0.45-1 1v1H5.5c-0.66 0-1.210.42-1.42 1.01L2 13v7.5c0 0.820.67 1.5 1.5 1.5S5 21.32 5 20.5V20h12v0.5c0 0.820.67 1.5 1.5 1.5s1.5-0.68 1.5-1.5V13l-0.09-0.27c-0.610.17-1.250.27-1.910.27zM6.5 17c-0.83 0-1.5-0.67-1.5-1.5S5.67 14 6.5 14s1.50.67 1.5 1.5S7.33 17 6.5 17zm9 0c-0.83 0-1.5-0.67-1.5-1.5s0.67-1.5 1.5-1.5 1.50.67 1.5 1.5-0.67 1.5-1.5 1.5z"}],["path",{"d":"M18 1c-2.76 0-5 2.24-5 5s2.24 5 5 5 5-2.24 5-5-2.24-5-5-5zm0 8c-0.28 0-0.5-0.22-0.5-0.5s0.22-0.50.5-0.50.50.220.50.5-0.220.5-0.50.5zm0.5-2.5c0 0.28-0.220.5-0.50.5s-0.5-0.22-0.5-0.5v-3c0-0.280.22-0.50.5-0.5s0.50.220.50.5v3z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default MdrTaxiAlert;
