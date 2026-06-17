import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-bs-radar",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class BsRadar {
  readonly viewBox = "0 0 16 16";
  readonly nodes: NodeTuple[] = [["path",{"d":"M6.63 1.14A7 7 0 0 1 15 8a0.50.5 0 0 1-1 0 6 6 0 1 0-6.5 5.98v-1A5 5 0 1 1 13 8a0.50.5 0 0 1-1 0 4 4 0 1 0-4.5 3.97v-1.01A3 3 0 1 1 11 8a0.50.5 0 0 1-1 0 2 2 0 1 0-2.5 1.94v-1.07a1 1 0 1 1 1 0V15.5a0.50.5 0 0 1-1 0v-0.52a7 7 0 0 1-0.87-13.85"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default BsRadar;
