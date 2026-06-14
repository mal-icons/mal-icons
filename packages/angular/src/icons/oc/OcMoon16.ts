import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-oc-moon-16",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class OcMoon16 {
  readonly viewBox = "0 0 16 16";
  readonly nodes: NodeTuple[] = [["path",{"d":"M9.6 1.59a0.750.75 0 0 1 0.79-0.17 7 7 0 1 1-8.97 8.970.750.75 0 0 1 0.96-0.96 5.5 5.5 0 0 0 7.05-7.050.750.75 0 0 1 0.18-0.79Zm1.62 1.95a7 7 0 0 1-7.68 7.68 5.5 5.5 0 1 0 7.68-7.68Z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default OcMoon16;
