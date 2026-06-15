import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-rx-table",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class RxTable {
  readonly viewBox = "0 0 15 15";
  readonly nodes: NodeTuple[] = [["path",{"fill-rule":"evenodd","clip-rule":"evenodd","d":"M8 2H12.5C12.78 2 13 2.22 13 2.5V5H8V2ZM7 5V2H2.5C2.22 2 2 2.22 2 2.5V5H7ZM2 6V9H7V6H2ZM8 6H13V9H8V6ZM8 10H13V12.5C13 12.78 12.78 13 12.5 13H8V10ZM2 12.5V10H7V13H2.5C2.22 13 2 12.78 2 12.5ZM1 2.5C1 1.67 1.67 1 2.5 1H12.5C13.33 1 14 1.67 14 2.5V12.5C14 13.33 13.33 14 12.5 14H2.5C1.67 14 1 13.33 1 12.5V2.5Z","fill":"currentColor"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default RxTable;
