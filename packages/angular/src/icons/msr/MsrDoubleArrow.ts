import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-msr-double-arrow",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class MsrDoubleArrow {
  readonly viewBox = "0 -960 960 960";
  readonly nodes: NodeTuple[] = [["path",{"d":"M554-200q-18 0-27-16.5t2-30.5l175-233-175-233q-11-14-2-30.5t27-16.5q8 0 14 3.5t11 9.5l186 249q3 4 4.5 8.5t1.5 9.5q0 5-1.5 9t-4.5 9L579-213q-5 6-11 9.5t-14 3.5Zm-252 0q-18 0-27-16.5t2-30.5l175-233-175-233q-11-14-2-30.5t27-16.5q8 0 14 3.5t11 9.5l186 249q3 4 4.5 8.5t1.5 9.5q0 5-1.5 9t-4.5 9L327-213q-5 6-11 9.5t-14 3.5Z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default MsrDoubleArrow;
