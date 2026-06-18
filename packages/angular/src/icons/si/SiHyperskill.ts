import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-si-hyperskill",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class SiHyperskill {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"d":"M22 22.6a1.4 1.4 0 0 1-1.4 1.4h-1.2a1.4 1.4 0 0 1-1.4-1.4V1.4A1.4 1.4 0 0 1 19.4 0h1.2A1.4 1.4 0 0 1 22 1.4zm-8-14a1.4 1.4 0 0 1-1.4 1.4h-1.2A1.4 1.4 0 0 1 10 8.6V3.4A1.4 1.4 0 0 1 11.4 2h1.2A1.4 1.4 0 0 1 14 3.4zm-8 8a1.4 1.4 0 0 1-1.4 1.4H3.4A1.4 1.4 0 0 1 2 16.6V7.4A1.4 1.4 0 0 1 3.4 6h1.2A1.4 1.4 0 0 1 6 7.4v9.2zm8 4a1.4 1.4 0 0 1-1.4 1.4h-1.2a1.4 1.4 0 0 1-1.4-1.4v-5.2a1.4 1.4 0 0 1 1.4-1.4h1.2a1.4 1.4 0 0 1 1.4 1.4z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default SiHyperskill;
