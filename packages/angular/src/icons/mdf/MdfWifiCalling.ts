import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-mdf-wifi-calling",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class MdfWifiCalling {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"d":"M22 4.95C21.79 4.78 19.67 3 16.5 3c-3.18 0-5.29 1.78-5.5 1.95L16.5 12 22 4.95z"}],["path",{"d":"M20 15.51c-1.24 0-2.45-0.2-3.57-0.57a0.990.99 0 0 0-1.020.24l-2.2 2.2a15.15 15.15 0 0 1-6.59-6.59l2.2-2.2c0.28-0.280.36-0.670.25-1.02A11.36 11.36 0 0 1 8.5 4c0-0.55-0.45-1-1-1H4c-0.55 0-1 0.45-1 1 0 9.39 7.61 17 17 17 0.55 0 1-0.45 1-1v-3.49c0-0.55-0.45-1-1-1z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default MdfWifiCalling;
