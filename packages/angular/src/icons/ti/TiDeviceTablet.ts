import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-ti-device-tablet",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class TiDeviceTablet {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"d":"M17 4h-9c-0.55 0-1 0.45-1 1v12c0 0.550.45 1 1 1h3.5c0 0.550.45 1 1 1s1-0.45 1-1h3.5c0.55 0 1-0.45 1-1v-12c0-0.55-0.45-1-1-1zm0 13h-9v-12h9v12zM18 1h-11c-1.65 0-3 1.35-3 3v15c0 1.65 1.35 3 3 3h11c1.65 0 3-1.35 3-3v-15c0-1.65-1.35-3-3-3zm1 18c0 0.55-0.45 1-1 1h-11c-0.55 0-1-0.45-1-1v-15c0-0.550.45-1 1-1h11c0.55 0 1 0.45 1 1v15z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default TiDeviceTablet;
