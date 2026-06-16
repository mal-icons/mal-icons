import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-mdr-device-hub",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class MdrDeviceHub {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"d":"m17 16-4-4V8.82c1.35-0.49 2.26-1.89 1.93-3.46a3.01 3.01 0 0 0-2.42-2.32A3 3 0 0 0 9 6c0 1.30.84 2.4 2 2.82V12l-4 4H4c-0.55 0-1 0.45-1 1v3c0 0.550.45 1 1 1h3c0.55 0 1-0.45 1-1v-2.05l4-4.2 4 4.2V20c0 0.550.45 1 1 1h3c0.55 0 1-0.45 1-1v-3c0-0.55-0.45-1-1-1h-3z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default MdrDeviceHub;
