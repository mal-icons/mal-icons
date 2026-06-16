import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-mdr-settings-input-hdmi",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class MdrSettingsInputHdmi {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"d":"M18 7V4c0-1.1-0.9-2-2-2H8c-1.1 0-2 0.9-2 2v3c-0.55 0-1 0.45-1 1v4.7c0 0.20.060.390.170.55L8 19v2c0 0.550.45 1 1 1h6c0.55 0 1-0.45 1-1v-2l2.83-5.75a0.990.99 0 0 0 0.17-0.55V8c0-0.55-0.45-1-1-1zm-2 0h-2V5.5c0-0.28-0.22-0.5-0.5-0.5s-0.50.22-0.50.5V7h-2V5.5c0-0.28-0.22-0.5-0.5-0.5s-0.50.22-0.50.5V7H8V4h8v3z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default MdrSettingsInputHdmi;
