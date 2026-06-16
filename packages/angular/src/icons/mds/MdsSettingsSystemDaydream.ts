import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-mds-settings-system-daydream",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class MdsSettingsSystemDaydream {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"d":"M9 16h6.5a2.5 2.5 0 0 0 0-5h-0.05c-0.24-1.69-1.69-3-3.45-3-1.4 0-2.60.83-3.16 2.02h-0.16A2.99 2.99 0 0 0 6 13c0 1.66 1.34 3 3 3zM23 3H1v18h22V3zm-2 16.01H3V4.99h18v14.02z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default MdsSettingsSystemDaydream;
