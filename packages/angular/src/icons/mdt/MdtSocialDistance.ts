import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-mdt-social-distance",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class MdtSocialDistance {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"d":"M4 5c0-1.10.9-2 2-2s2 0.9 2 2-0.9 2-2 2-2-0.9-2-2zm4.78 3.58a6.95 6.95 0 0 0-5.56 0A2.01 2.01 0 0 0 2 10.43V11h8v-0.57c0-0.81-0.48-1.53-1.22-1.85zM18 7c1.1 0 2-0.9 2-2s-0.9-2-2-2-2 0.9-2 2 0.9 2 2 2zm2.78 1.58a6.95 6.95 0 0 0-5.56 0A2.01 2.01 0 0 0 14 10.43V11h8v-0.57c0-0.81-0.48-1.53-1.22-1.85zM22 17l-4-4v3H6v-3l-4 4 4 4v-3h12v3l4-4z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default MdtSocialDistance;
