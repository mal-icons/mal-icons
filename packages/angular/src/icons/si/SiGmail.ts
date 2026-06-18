import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-si-gmail",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class SiGmail {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"d":"M24 5.46v13.91c0 0.9-0.73 1.64-1.64 1.64h-3.82V11.73L12 16.64l-6.54-4.91v9.27H1.64A1.64 1.64 0 0 1 0 19.37V5.46c0-2.02 2.31-3.18 3.93-1.96L5.46 4.64 12 9.55l6.55-4.91 1.53-1.14C21.69 2.28 24 3.43 24 5.46z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default SiGmail;
