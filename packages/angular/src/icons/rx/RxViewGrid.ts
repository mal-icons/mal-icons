import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-rx-view-grid",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class RxViewGrid {
  readonly viewBox = "0 0 15 15";
  readonly nodes: NodeTuple[] = [["path",{"fill-rule":"evenodd","clip-rule":"evenodd","d":"M7 2H1.5C1.22 2 1 2.22 1 2.5V7H7V2ZM8 2V7H14V2.5C14 2.22 13.78 2 13.5 2H8ZM7 8H1V12.5C1 12.78 1.22 13 1.5 13H7V8ZM8 13V8H14V12.5C14 12.78 13.78 13 13.5 13H8ZM1.5 1C0.67 1 0 1.67 0 2.5V12.5C0 13.33 0.67 14 1.5 14H13.5C14.33 14 15 13.33 15 12.5V2.5C15 1.67 14.33 1 13.5 1H1.5Z","fill":"currentColor"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default RxViewGrid;
