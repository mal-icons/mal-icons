import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-si-vivino",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class SiVivino {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"d":"M12.48 18.03c0-1.090.89-1.99 1.99-1.99 1.1 0 1.990.9 1.99 1.99 0 1.1-0.89 1.99-1.99 1.99-1.1 0-1.99-0.89-1.99-1.99M12.04 24c-1.1 0-1.99-0.9-1.99-1.99 0-1.10.89-1.99 1.99-1.99 1.09 0 1.990.89 1.99 1.99A2 2 0 112.04 24M5.2 14.01c0-1.090.89-1.99 1.99-1.99 1.09 0 1.990.9 1.99 1.99 0 1.1-0.9 1.99-1.99 1.99-1.1 0-1.99-0.89-1.99-1.99m4.39-5.89c1.1 0 1.990.9 1.99 1.99 0 1.1-0.89 1.98-1.99 1.98-1.1 0-1.99-0.88-1.99-1.98 0-1.090.89-1.99 1.99-1.99m2.38-4.19c1.1 0 1.990.89 1.99 1.99 0 1.09-0.89 1.99-1.99 1.99A2 2 0 19.98 5.92c0-1.10.9-1.99 1.99-1.99M14.4 0c1.1 0 1.990.89 1.99 1.99 0 1.09-0.89 1.99-1.99 1.99a2 2 0 1-1.99-1.99c0-1.10.9-1.99 1.99-1.99M11.6 18.03c0 1.1-0.89 1.99-1.99 1.99a2 2 0 1-1.99-1.99c0-1.090.9-1.99 1.99-1.99 1.1 0 1.990.9 1.99 1.99m-1.54-4.03c0-1.090.89-1.99 1.99-1.99 1.09 0 1.990.9 1.99 1.99 0 1.1-0.9 1.99-1.99 1.99-1.1 0-1.99-0.89-1.99-1.99m4.39-1.93c-1.1 0-1.99-0.88-1.99-1.98 0-1.090.89-1.99 1.99-1.99 1.1 0 1.990.9 1.99 1.99 0 1.1-0.89 1.98-1.99 1.98m4.36 1.93c0 1.1-0.89 1.99-1.99 1.99-1.1 0-1.99-0.89-1.99-1.99 0-1.090.89-1.99 1.99-1.99 1.1 0 1.990.9 1.99 1.99Z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default SiVivino;
