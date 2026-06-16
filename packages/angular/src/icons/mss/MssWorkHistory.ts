import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-mss-work-history",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class MssWorkHistory {
  readonly viewBox = "0 -960 960 960";
  readonly nodes: NodeTuple[] = [["path",{"d":"M140-180v-480 480-21.75V-180Zm-60 60v-600h240v-160h320v160h240v285q-14-11-29-20t-31-17v-188H140v480h334q4 16 10 31t14 29H80Zm300-600h200v-100H380v100ZM720-47q-79 0-136-57t-57-136q0-79 57-136t136-57q79 0 136 57t57 136q0 79-57 136T720-47Zm17-195v-124h-42v135.78L794-139l27-27-84-76Z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default MssWorkHistory;
