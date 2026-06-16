import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-msr-upcoming",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class MsrUpcoming {
  readonly viewBox = "0 -960 960 960";
  readonly nodes: NodeTuple[] = [["path",{"d":"M140-120q-24 0-42-18t-18-42v-215q0-24 18-42t42-18h185q11.35 0 19.68 7Q353-441 355-430q7 45 42 73.5t83 28.5q48 0 83-28.5t42-73.5q2-11 10.32-18 8.32-7 19.68-7h185q24 0 42 18t18 42v215q0 24-18 42t-42 18H140Zm0-60h680v-215H656q-18 57-65.5 92T480-268q-63 0-112.5-35T304-395H140v215Zm552-377q-9-9-9-21.5t9-21.5l92-92q9-9 21-8.5t21 9.5q9 9 9 21.5t-9 21.5l-92 92q-9 9-21 8.5t-21-9.5Zm-423 0q-9 9-21.5 9t-21.5-9l-93-92q-9-9-8.5-21t9.5-21q9-9 21.5-9t21.5 9l92 92q9 9 9 21t-9 21Zm210.83-96Q467-653 458.5-661.62T450-683v-127q0-12.75 8.68-21.37 8.68-8.62 21.5-8.62 12.83 0 21.33 8.63T510-810v127q0 12.75-8.68 21.38-8.68 8.63-21.5 8.63ZM140-180h680-680Z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default MsrUpcoming;
