import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-mss-progress-activity",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class MssProgressActivity {
  readonly viewBox = "0 -960 960 960";
  readonly nodes: NodeTuple[] = [["path",{"d":"M480-80q-84 0-157-31t-127-85q-54-54-85-127T80-480q0-83.73 31-156.86Q142-710 196-764t127-85q73-31 157-31v60q-141.31 0-240.66 99.28T140-480.22Q140-339 239.28-239.5q99.28 99.5 240.5 99.5Q621-140 720.5-239.34T820-480h60q0 84-31 157t-85 127q-54 54-127.14 85T480-80Z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default MssProgressActivity;
