import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-mso-golf-course",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class MsoGolfCourse {
  readonly viewBox = "0 -960 960 960";
  readonly nodes: NodeTuple[] = [["path",{"d":"M791-123q-20.42 0-34.71-14.29Q742-151.58 742-172q0-20.42 14.29-34.71Q770.58-221 791-221q20.42 0 34.71 14.29Q840-192.42 840-172q0 20.42-14.29 34.71Q811.42-123 791-123ZM396-80q-97 0-166.5-19T160-148.64Q160-170 200-188.5t94-27.5v76h72v-740l292 142-232 122v395.54Q516-215 574-195t58 46q0 31-69.5 50T396-80Z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default MsoGolfCourse;
