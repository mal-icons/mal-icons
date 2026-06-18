import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-si-levelsdotfyi",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class SiLevelsdotfyi {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"d":"M2.49 18.91h3.52v-3.52c0-0.430.35-0.780.78-0.78h3.52v-3.52c0-0.430.35-0.780.78-0.78h3.52V6.79c0-0.430.35-0.780.78-0.78h3.52V2.49c0-0.430.35-0.780.78-0.78h3.52c0.43 0 0.780.350.780.78v20.72c0 0.43-0.350.78-0.780.78H2.49a0.780.78 0 0 1-0.78-0.78v-3.52c0-0.430.35-0.780.78-0.78ZM0.17 15.93a0.590.59 0 0 1 0-0.83L15.10.17a0.590.59 0 0 1 0.830.83l-14.93 14.93c-0.230.23-0.60.23-0.83 0Z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default SiLevelsdotfyi;
