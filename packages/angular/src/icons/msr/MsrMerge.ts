import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-msr-merge",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class MsrMerge {
  readonly viewBox = "0 -960 960 960";
  readonly nodes: NodeTuple[] = [["path",{"d":"M235-141q-9-9-9-21t9-21l175-175q24-24 32-44t8-59v-265l-69 69q-9 9-21 9t-21-9q-9-9-9-21t9-21l120-120q5-5 10-6.5t11-1.5q6 0 11 1.5t10 6.5l120 120q9 9 9 21t-9 21q-9 9-21 9t-21-9l-69-69v265q0 39 8 59t32 44l175 175q9 9 9 21t-9 21q-9 9-21 9t-21-9L480-344 277-141q-9 9-21 9t-21-9Z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default MsrMerge;
