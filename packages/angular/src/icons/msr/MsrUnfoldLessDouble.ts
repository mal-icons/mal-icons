import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-msr-unfold-less-double",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class MsrUnfoldLessDouble {
  readonly viewBox = "0 -960 960 960";
  readonly nodes: NodeTuple[] = [["path",{"d":"m480-634 106-104q9-9 21-9t21 9q9 9 9.5 21.5T629-695L502-569q-9 9-21 9t-21-9L333-696q-9-9-9-21.5t9-21.5q9-9 21-9t21 9l105 105Zm0-200 106-104q9-9 21-9t21 9q9 9 9.5 21.5T629-895L502-769q-9 9-21 9t-21-9L333-896q-9-9-9-21.5t9-21.5q9-9 21-9t21 9l105 105Zm1 707L375-22q-9 9-21 9t-21-9q-9-9-9-21t9-21l126-127q9-9 21-9t21 9L629-63q9 9 9 21t-9 21q-9 9-21 9t-21-9L481-127Zm0-200L375-222q-9 9-21 9t-21-9q-9-9-9-21t9-21l126-127q9-9 21-9t21 9l128 128q9 9 9 21t-9 21q-9 9-21 9t-21-9L481-327Z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default MsrUnfoldLessDouble;
