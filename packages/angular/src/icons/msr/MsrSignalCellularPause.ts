import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-msr-signal-cellular-pause",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class MsrSignalCellularPause {
  readonly viewBox = "0 -960 960 960";
  readonly nodes: NodeTuple[] = [["path",{"d":"M152-80q-19.69 0-27.34-18.5Q117-117 131-131l698-698q14-14 32.5-6.34T880-808v388q0 12.75-8.68 21.38-8.68 8.63-21.5 8.63-12.82 0-21.32-8.62T820-420v-315L224-140h316q12.75 0 21.38 8.68 8.63 8.68 8.63 21.5Q570-97 561.38-88.5T540-80H152Zm527.83 0Q667-80 658.5-88.62T650-110v-170q0-12.75 8.68-21.37 8.68-8.62 21.5-8.62 12.83 0 21.33 8.63T710-280v170q0 12.75-8.68 21.38Q692.65-80 679.83-80Zm140 0Q807-80 798.5-88.62T790-110v-170q0-12.75 8.68-21.37 8.68-8.62 21.5-8.62 12.83 0 21.33 8.63T850-280v170q0 12.75-8.68 21.38Q832.65-80 819.83-80ZM522-438Z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default MsrSignalCellularPause;
