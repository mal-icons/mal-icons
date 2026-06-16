import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-msr-volume-down",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class MsrVolumeDown {
  readonly viewBox = "0 -960 960 960";
  readonly nodes: NodeTuple[] = [["path",{"d":"M360-360H230q-13 0-21.5-8.5T200-390v-180q0-13 8.5-21.5T230-600h130l149-149q14-14 32.5-6.5T560-728v496q0 20-18.5 27.5T509-211L360-360Zm380-120q0 52-26 94t-73 64q-8 4-14.5-1t-6.5-13v-289q0-8 6.5-13t14.5-1q47 22 73 65t26 94ZM500-648 387-540H260v120h127l113 109v-337ZM378-480Z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default MsrVolumeDown;
