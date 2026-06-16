import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-mdt-oil-barrel",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class MdtOilBarrel {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"d":"M7 11c0.55 0 1 0.45 1 1s-0.45 1-1 1v6h10v-6c-0.55 0-1-0.45-1-1s0.45-1 1-1V5H7v6zm5-2.5c2.47 2.86 3 3.24 3 4.55 0 1.63-1.34 2.95-3 2.95s-3-1.32-3-2.95c0-1.30.52-1.67 3-4.55z","opacity":".3"}],["path",{"d":"M12 16c1.66 0 3-1.32 3-2.95 0-1.31-0.53-1.69-3-4.55-2.48 2.88-3 3.25-3 4.55C9 14.68 10.34 16 12 16z"}],["path",{"d":"M20 13c0.55 0 1-0.45 1-1s-0.45-1-1-1h-1V5h1c0.55 0 1-0.45 1-1s-0.45-1-1-1H4c-0.55 0-1 0.45-1 1s0.45 1 1 1h1v6H4c-0.55 0-1 0.45-1 1s0.45 1 1 1h1v6H4c-0.55 0-1 0.45-1 1s0.45 1 1 1h16c0.55 0 1-0.45 1-1s-0.45-1-1-1h-1v-6h1zm-3-2c-0.55 0-1 0.45-1 1s0.45 1 1 1v6H7v-6c0.55 0 1-0.45 1-1s-0.45-1-1-1V5h10v6z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default MdtOilBarrel;
