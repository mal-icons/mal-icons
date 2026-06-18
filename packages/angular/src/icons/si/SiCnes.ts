import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-si-cnes",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class SiCnes {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"d":"M10.17 0h0.95V13.8c0 2.88 3.68 8.73 9.73 4.83l0.12-0.07C19.62 21.74 16.26 24 12.32 24 7.19 24 3.03 20.17 3.03 15.44c0-4.05 3.05-7.44 7.15-8.33V0Zm10.4 11.51c-1.52-2.71-4.58-4.57-8.1-4.62-0.06 1.110.82 7.13 4.96 7.47 1.080.09 3.84-0.55 3.14-2.85Z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default SiCnes;
