import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-msr-unfold-more-double",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class MsrUnfoldMoreDouble {
  readonly viewBox = "0 -960 960 960";
  readonly nodes: NodeTuple[] = [["path",{"d":"M480-874 375-769q-9 9-21 9t-21-9q-9-9-9-21.5t9-21.5l127-127q9-9 21-9t21 9l127 127q9 9 8.5 21.5T628-769q-9 9-21 9t-21-9L480-874Zm0 200L375-569q-9 9-21 9t-21-9q-9-9-9-21.5t9-21.5l127-127q9-9 21-9t21 9l127 127q9 9 8.5 21.5T628-569q-9 9-21 9t-21-9L480-674Zm1 389 106-106q9-9 21-9t21 9q9 9 9 21t-9 21L501-221q-9 9-21 9t-21-9L333-348q-9-9-9-21t9-21q9-9 21-9t21 9l106 105Zm0 200 106-106q9-9 21-9t21 9q9 9 9 21t-9 21L501-21q-9 9-21 9t-21-9L333-148q-9-9-9-21t9-21q9-9 21-9t21 9L481-85Z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default MsrUnfoldMoreDouble;
