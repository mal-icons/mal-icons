import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-si-mqtt",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class SiMqtt {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"d":"M10.66 23.99h-9.45A1.21 1.21 0 0 1 0 22.79v-9.18h0.07c5.78 0 10.5 4.65 10.59 10.39Zm7.61 0h-4.04C14.14 16.25 7.8 9.98 0 9.94V6.04h0.07c9.98 0 18.12 8.04 18.19 17.96Zm4.53 0h-0.97C21.75 12.07 12 2.41 0 2.37v-1.16C0 0.550.540.01 1.210.01h7.64C15.73 2.49 21.26 7.79 24 14.51v8.29c0 0.66-0.54 1.2-1.21 1.2ZM16.710.01h6.09A1.19 1.19 0 0 1 24 1.2v5.91c-0.91-1.24-2.05-2.65-3.16-3.76C19.59 2.11 18.120.99 16.710.01Z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default SiMqtt;
