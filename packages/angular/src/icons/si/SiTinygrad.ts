import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-si-tinygrad",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class SiTinygrad {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"d":"M1.85 7.39V9.23H0v1.85h1.85v3.69h3.69v-1.85H3.69v-1.85h1.85V9.23H3.69V7.39zm5.54 0V9.23H9.23V7.39zm3.69 1.85v5.54h1.85v-3.69h1.85V9.23h-1.85zm3.69 1.85v3.69h1.85v-3.69zm3.69-1.85v3.69h3.69v1.85H24V9.23h-1.85v1.85h-1.85V9.23Zm3.69 5.54h-3.69v1.85h3.69zm-14.77-3.69v3.69h1.85v-3.69z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default SiTinygrad;
