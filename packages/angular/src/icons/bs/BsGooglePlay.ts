import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-bs-google-play",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class BsGooglePlay {
  readonly viewBox = "0 0 16 16";
  readonly nodes: NodeTuple[] = [["path",{"d":"M14.22 9.37c1.04-0.61 1.04-2.14 0-2.75L11.53 5.04 8.32 8l3.21 2.96zm-3.59 2.12L7.58 8.68 1.03 14.73c0.2 1.03 1.36 1.61 2.3 1.06zM1 13.4V2.6L6.85 8zM1.03 1.27l6.55 6.05 3.04-2.81L3.330.22C2.39-0.34 1.230.24 1.03 1.27"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default BsGooglePlay;
