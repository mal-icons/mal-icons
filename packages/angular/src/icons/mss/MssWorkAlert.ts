import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-mss-work-alert",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class MssWorkAlert {
  readonly viewBox = "0 -960 960 960";
  readonly nodes: NodeTuple[] = [["path",{"d":"M140-180v-21.75V-180v-480 480Zm-60 60v-600h240v-160h320v160h240v285q-14-11-28.5-20T820-472v-188H140v480h334q4 16 10 31t14 29H80Zm300-600h200v-100H380v100ZM720-47q-79 0-136-57t-57-136q0-79 57-136t136-57q79 0 136 57t57 136q0 79-57 136T720-47Zm-0.5-79q9.5 0 16-6t6.5-16q0-10-6.6-16t-15.4-6q-10 0-16 6t-6 16q0 10 6 16t15.5 6ZM702-211h35v-143h-35v143Z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default MssWorkAlert;
