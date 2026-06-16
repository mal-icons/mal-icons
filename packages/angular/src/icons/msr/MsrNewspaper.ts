import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-msr-newspaper",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class MsrNewspaper {
  readonly viewBox = "0 -960 960 960";
  readonly nodes: NodeTuple[] = [["path",{"d":"M140-120q-24.75 0-42.37-17.62T80-180v-626q0-14.17 7-17.08Q94-826 104-816l43 43 45-45q5-5 10.13-7 5.13-2 11-2Q219-827 224-825.5q5 1.5 10 6.5l46 46 46-46q5-5 10.13-6.5 5.13-1.5 11-1.5Q353-827 358-825q5 2 10 7l45 45 46-46q5-5 10.13-7 5.13-2 11-2Q486-828 491-826q5 2 10 7l46 46 45-45q5-5 10.13-7 5.13-2 11-2Q619-827 624-825.5q5 1.5 10 6.5l46 46 46-46q5-5 10.13-6.5 5.13-1.5 11-1.5Q753-827 758-825q5 2 10 7l45 45 43-43q10-10 17-7.08 7 2.92 7 17.08v626q0 24.75-17.62 42.38T820-120H140Zm0-60h310v-280H140v280Zm370 0h310v-110H510v110Zm0-170h310v-110H510v110ZM140-520h680v-120H140v120Z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default MsrNewspaper;
