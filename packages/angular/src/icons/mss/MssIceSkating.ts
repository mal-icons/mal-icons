import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-mss-ice-skating",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class MssIceSkating {
  readonly viewBox = "0 -960 960 960";
  readonly nodes: NodeTuple[] = [["path",{"d":"M80-80v-60h160v-110H120v-590h360v180q0 30.42 13.5 55.21Q507-580 536-572l224 56v266H640v110h90q54.17 0 92.08-37.92Q860-215.83 860-270h60q0 75-57.5 132.5T730-80H80Zm241-620q0-6 4.5-10.5T336-715h84v-65H180v470h520v-158l-181-47q-38-11-57.5-34.5T431-605h-95q-6 0-10.5-4.5T321-620q0-6 4.5-10.5T336-635h86q-2-13-2-24.5V-685h-84q-6 0-10.5-4.5T321-700Zm-21 560h280v-110H300v110ZM180-310Z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default MssIceSkating;
