import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-mss-dns",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class MssDns {
  readonly viewBox = "0 -960 960 960";
  readonly nodes: NodeTuple[] = [["path",{"d":"M286.88-717Q266-717 251.5-702.38q-14.5 14.62-14.5 35.5Q237-646 251.62-631.5q14.62 14.5 35.5 14.5Q308-617 322.5-631.62q14.5-14.62 14.5-35.5Q337-688 322.38-702.5q-14.62-14.5-35.5-14.5Zm0 414Q266-303 251.5-288.38q-14.5 14.62-14.5 35.5Q237-232 251.62-217.5q14.62 14.5 35.5 14.5Q308-203 322.5-217.62q14.5-14.62 14.5-35.5Q337-274 322.38-288.5q-14.62-14.5-35.5-14.5ZM120-494v-345h720v345H120Zm60-285v225h600v-225H180ZM120-80v-346h720v346H120Zm60-286v226h600v-226H180Zm0-413v225-225Zm0 413v226-226Z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default MssDns;
