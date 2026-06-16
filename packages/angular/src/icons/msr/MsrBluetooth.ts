import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-msr-bluetooth",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class MsrBluetooth {
  readonly viewBox = "0 -960 960 960";
  readonly nodes: NodeTuple[] = [["path",{"d":"M450-408 277-235q-9 9-21 9t-21-9q-9-9-9-21t9-21l203-203-203-203q-9-9-9-21t9-21q9-9 21-9t21 9l173 173v-273q0-13 7.5-20.5T477-853q8 0 16 4t17 13l163 163q5 5 7 10t2 11q0 6-2 11t-7 10L522-480l151 151q5 5 7 10t2 11q0 6-2 11t-7 10L510-124q-9 9-17 13t-16 4q-12 0-19.5-7.5T450-135v-273Zm60-144 100-100-100-98v198Zm0 342 100-98-100-100v198Z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default MsrBluetooth;
