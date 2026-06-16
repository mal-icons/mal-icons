import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-mdr-water-damage",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class MdrWaterDamage {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"d":"m11.33 3.6-8.36 7.53c-0.340.3-0.130.870.330.87H5v7c0 0.550.45 1 1 1h12c0.55 0 1-0.45 1-1v-7h1.7c0.46 0 0.68-0.570.33-0.87L12.67 3.6c-0.38-0.34-0.96-0.34-1.34 0zM12 16c-1.1 0-2-0.9-2-2 0-0.780.99-2.44 1.58-3.360.2-0.310.64-0.310.84 0 0.590.92 1.58 2.58 1.58 3.36 0 1.1-0.9 2-2 2z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default MdrWaterDamage;
