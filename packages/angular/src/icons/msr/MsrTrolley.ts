import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-msr-trolley",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class MsrTrolley {
  readonly viewBox = "0 -960 960 960";
  readonly nodes: NodeTuple[] = [["path",{"d":"M810-260H220q-24.75 0-42.37-17.62T160-320v-460h-50q-12.75 0-21.37-8.68Q80-797.35 80-810.17 80-823 88.63-831.5T110-840h50q24.75 0 42.38 17.63T220-780v460h590q12.75 0 21.38 8.68 8.63 8.68 8.63 21.5 0 12.83-8.62 21.33T810-260ZM219.12-80Q194-80 177-97.68q-17-17.68-17-42.5t17-42.32q17-17.5 42.12-17.5 25.12 0 43 17.68t17.89 42.5Q280-115 262.12-97.5t-43 17.5ZM320-390q-12.75 0-21.37-8.62T290-420v-160q0-12.75 8.63-21.37T320-610h160q12.75 0 21.38 8.63T510-580v160q0 12.75-8.62 21.38T480-390H320Zm30-60h100v-100H350v100Zm250 60q-12.75 0-21.37-8.62T570-420v-160q0-12.75 8.63-21.37T600-610h160q12.75 0 21.38 8.63T790-580v160q0 12.75-8.62 21.38T760-390H600Zm30-60h100v-100H630v100ZM779.82-80Q755-80 737.5-97.68t-17.5-42.5Q720-165 737.68-182.5t42.5-17.5Q805-200 822.5-182.32t17.5 42.5Q840-115 822.32-97.5t-42.5 17.5ZM350-450h100-100Zm280 0h100-100Z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default MsrTrolley;
