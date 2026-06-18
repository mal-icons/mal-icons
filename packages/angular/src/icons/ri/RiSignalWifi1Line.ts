import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-ri-signal-wifi-1-line",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class RiSignalWifi1Line {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"d":"M12 3C16.28 3 20.22 4.5 23.31 7L12 21L0.69 7C3.78 4.5 7.72 3 12 3ZM12 15C11.31 15 10.63 15.12 10 15.34L12 17.82L14 15.34C13.37 15.12 12.69 15 12 15ZM12 5C8.97 5 6.08 5.84 3.58 7.39L8.69 13.72C9.7 13.26 10.82 13 12 13C13.18 13 14.3 13.26 15.31 13.72L20.42 7.39C17.92 5.84 15.03 5 12 5Z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default RiSignalWifi1Line;
