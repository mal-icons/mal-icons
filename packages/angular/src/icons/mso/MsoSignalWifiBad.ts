import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-mso-signal-wifi-bad",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class MsoSignalWifiBad {
  readonly viewBox = "0 -960 960 960";
  readonly nodes: NodeTuple[] = [["path",{"d":"M480-471ZM656-94l-42-42 84-84-84-84 42-42 84 84 84-84 42 42-83 84 83 84-42 42-84-83-84 83Zm-122-80-54 54L0-600q99-94 221-147t259-53q137 0 259 53t221 147L786-426q-10.86-2.27-22.36-3.64Q752.14-431 740-431q-8.32 0-17.160.5T706-428l166-166q-87-68-184.5-107T480-740q-110 0-207.5 39T88-594l392 392 52-52q-2 8-2.5 16.84T529-220q0 12.14 1.36 23.64 1.36 11.5 3.64 22.36Z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default MsoSignalWifiBad;
