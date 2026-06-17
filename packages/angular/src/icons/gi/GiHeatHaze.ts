import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-gi-heat-haze",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class GiHeatHaze {
  readonly viewBox = "0 0 512 512";
  readonly nodes: NodeTuple[] = [["path",{"fill":"currentColor","d":"M328.09 16.28c-418.55 189.59 58.11 230.15-86.31 473.53C566.65 247.04 59.72 256.84 328.1 16.28zm10.84 32.44C154.71 186.1 475.23 253.64 369.72 409.06 561.48 253.03 248.22 203.77 338.94 48.72zM141 102.25c-174.24 135.03 104.33 215.75 61.06 367C307.03 285.77 42.89 268.31 141 102.25z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default GiHeatHaze;
