import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-fab-rev",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class FabRev {
  readonly viewBox = "0 0 448 512";
  readonly nodes: NodeTuple[] = [["path",{"d":"M289.67 274.89a65.57 65.57 0 1 1-65.56-65.56 65.64 65.64 0 0 1 65.56 65.56zm139.55-5.05h-0.13a204.69 204.69 0 0 0-74.32-153l-45.38 26.2a157.07 157.07 0 0 1 71.81 131.84C381.2 361.5 310.73 432 224.11 432S67 361.5 67 274.88c0-81.88 63-149.27 143-156.43v39.12l108.77-62.79L210 32v38.32c-106.7 7.25-191 96-191 204.57 0 111.59 89.12 202.29 200.06 205v0.11h210.16V269.84z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default FabRev;
