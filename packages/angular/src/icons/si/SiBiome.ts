import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-si-biome",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class SiBiome {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"d":"m12 1.61-5.35 9.26a12.07 12.07 0 0 1 6.33-0.22l1.810.43-1.7 7.21-1.81-0.43c-2.22-0.52-4.360.64-5.26 2.51l-1.67-0.81c1.28-2.64 4.28-4.23 7.36-3.5l0.85-3.59A10.21 10.21 0 0 0 0 22.39h24L12 1.61Z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default SiBiome;
