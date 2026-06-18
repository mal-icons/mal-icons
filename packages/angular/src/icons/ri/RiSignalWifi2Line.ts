import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-ri-signal-wifi-2-line",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class RiSignalWifi2Line {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"d":"M12 3C16.28 3 20.22 4.5 23.31 7L12 21L0.69 7C3.78 4.5 7.72 3 12 3ZM12 12C10.58 12 9.24 12.33 8.04 12.92L12 17.82L15.96 12.92C14.76 12.33 13.42 12 12 12ZM12 5C8.97 5 6.08 5.84 3.58 7.39L6.76 11.33C8.32 10.48 10.1 10 12 10C13.9 10 15.68 10.48 17.24 11.33L20.42 7.39C17.92 5.84 15.03 5 12 5Z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default RiSignalWifi2Line;
