import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-mss-door-open",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class MssDoorOpen {
  readonly viewBox = "0 -960 960 960";
  readonly nodes: NodeTuple[] = [["path",{"d":"M440-450q13 0 21.5-9t8.5-21q0-13-8.5-21.5T440-510q-12 0-21 8.5t-9 21.5q0 12 9 21t21 9ZM260-120v-60l280-49v-499l-280-43v-59l340 59v591l-340 60Zm0-60h440v-590l-440-1v591Zm-140 60v-60h80v-650h560v650h80v60H120Z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default MssDoorOpen;
