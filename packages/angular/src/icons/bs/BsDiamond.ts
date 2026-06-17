import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-bs-diamond",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class BsDiamond {
  readonly viewBox = "0 0 16 16";
  readonly nodes: NodeTuple[] = [["path",{"d":"M6.950.44c0.58-0.58 1.52-0.58 2.1 0l6.52 6.52c0.580.580.58 1.52 0 2.1L9.05 15.57c-0.580.58-1.520.58-2.1 0L0.44 9.05a1.48 1.48 0 0 1 0-2.1zm1.40.7a0.50.5 0 0 0-0.7 0L1.13 7.65a0.50.5 0 0 0 0 0.7l6.52 6.52a0.50.5 0 0 0 0.7 0l6.52-6.52a0.50.5 0 0 0 0-0.7L8.35 1.13z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default BsDiamond;
