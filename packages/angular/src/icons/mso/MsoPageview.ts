import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-mso-pageview",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class MsoPageview {
  readonly viewBox = "0 -960 960 960";
  readonly nodes: NodeTuple[] = [["path",{"d":"M140-160q-24.75 0-42.37-17.62T80-220v-520q0-24.75 17.63-42.37T140-800h680q24.75 0 42.38 17.63T880-740v520q0 24.75-17.62 42.38T820-160H140Zm0-60h680v-520H140v520Zm0 0v-520 520Zm517-48 42-42-99-99q14-21.31 21-44.56 7-23.25 7-48.44 0-70.42-48.71-119.71Q530.58-671 461-671q-71.25 0-121.12 49T290-502q0 71 49.88 120T461-333q26 0 51.5-8.5T558-367l99 99ZM461-393q-46 0-78.5-31.65t-32.5-77.5Q350-548 382.5-579.5t78-31.5q45.5 0 76.5 32t31 77q0 45-31.03 77T461-393Z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default MsoPageview;
