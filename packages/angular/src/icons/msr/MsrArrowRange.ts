import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-msr-arrow-range",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class MsrArrowRange {
  readonly viewBox = "0 -960 960 960";
  readonly nodes: NodeTuple[] = [["path",{"d":"m209-450 92 93q8 9 8.5 21t-8.5 21q-9 9-21 9t-21-9L115-459q-9-9-9-21t9-21l144-143q9-9 21-9t21 9q9 9 9 21t-9 21l-92 92h541l-92-92q-9-9-8.5-21t9.5-21q9-9 21-9t21 9l143 143q9 9 9 21t-9 21L701-315q-9 9-21 9t-21-9q-9-9-9.5-21.5T658-358l92-92H209Z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default MsrArrowRange;
