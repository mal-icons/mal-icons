import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-si-jsr",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class SiJsr {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"d":"M3.69 5.54v3.69H0v7.38h7.39v1.85h12.92v-3.69H24V7.39h-7.38V5.54Zm1.85 1.85h1.85v7.38H1.85v-3.69h1.85v1.85h1.85zm3.69 0h5.54V9.23h-3.69v1.85h3.69v5.54H9.23V14.77h3.69v-1.85H9.23Zm7.38 1.85h5.54v3.69h-1.85v-1.85h-1.85v5.54h-1.85z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default SiJsr;
