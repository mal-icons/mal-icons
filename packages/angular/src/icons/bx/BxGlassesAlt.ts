import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-bx-glasses-alt",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class BxGlassesAlt {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"d":"m21.95 11.68-2-6A11 0 0 0 19 5h-3v2h2.28l1.33 4H15c-1.1 0-2 0.9-2 2h-2c0-1.1-0.9-2-2-2H4.39l1.33-4H8V5H5a11 0 0 0-0.950.68l-2 6 0.010A0.930.93 0 0 0 2 12v4c0 1.65 1.35 3 3 3h3c1.65 0 3-1.35 3-3v-1h2v1c0 1.65 1.35 3 3 3h3c1.65 0 3-1.35 3-3v-4a0.960.96 0 0 0-0.06-0.31l0.010zM9 16c0 0.55-0.45 1-1 1H5c-0.55 0-1-0.45-1-1v-3h5v3zm11 0c0 0.55-0.45 1-1 1h-3c-0.55 0-1-0.45-1-1v-3h5v3z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default BxGlassesAlt;
