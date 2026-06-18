import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-si-gravatar",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class SiGravatar {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"d":"M12 0c-1.33 0-2.4 1.07-2.4 2.4v8.4c0 1.32 1.07 2.4 2.4 2.4s2.4-1.07 2.4-2.4V5.21c2.80.99 4.8 3.65 4.8 6.79 0 3.98-3.22 7.2-7.2 7.2S4.8 15.98 4.8 12c0-1.990.81-3.79 2.11-5.090.94-0.940.94-2.46 0-3.4s-2.46-0.94-3.4 0C1.34 5.69 0 8.69 0 12c0 6.63 5.37 12 12 12s12-5.37 12-12S18.63 0 12 0"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default SiGravatar;
