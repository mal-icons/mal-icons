import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-mds-baby-changing-station",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class MdsBabyChangingStation {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"d":"M14 8v2h-3L8.31 8.82 7 12.75V22H3V12l1.58-4.63A2 2 0 0 1 6.46 6c0.28 0 0.560.050.840.18l4.15 1.83L14 8zM8 1c-1.1 0-2 0.9-2 2s0.9 2 2 2 2-0.9 2-2-0.9-2-2-2zm1 18h12v-2H9v2zm10.5-3c0.83 0 1.5-0.67 1.5-1.5s-0.67-1.5-1.5-1.5-1.50.67-1.5 1.50.67 1.5 1.5 1.5zM13 13v-2H9v2h2v3h6v-5h-2v2h-2z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default MdsBabyChangingStation;
