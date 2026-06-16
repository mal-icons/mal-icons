import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-msr-cast-warning",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class MsrCastWarning {
  readonly viewBox = "0 -960 960 960";
  readonly nodes: NodeTuple[] = [["path",{"d":"M481-480Zm340 320H601q0-15-1-30t-3-30h224v-278q17-7 31.5-15t28.5-19v312q0 24.75-17.62 42.38T821-160ZM81-684v-56q0-24.75 17.63-42.37T141-800h349q-5 14-7 29t-3 31H141v60q-15-2-30-3t-30-1Zm649 144q-78 0-134-55.4-56-55.4-56-134Q540-808 596-864t134-56q78 0 134 55.87Q920-808.26 920-729q0 78.44-56 133.72Q808-540 730-540Zm-0.5-76q9.5 0 16-6t6.5-16q0-10-6.6-16t-15.4-6q-10 0-16 6t-6 16q0 10 6 16t15.5 6Zm0.5-85q8 0 12.5-5t4.5-13v-108q0-8-5-12.5t-13-4.5q-8 0-12.5 5t-4.5 13v108q0 8 5 12.5t13 4.5ZM130.76-160Q109-160 94-175.23q-15-15.24-15-37Q79-234 94.24-249q15.24-15 37-15Q153-264 168-248.76q15 15.24 15 37Q183-190 167.77-175q-15.24 15-37 15Zm179.77 0Q298.8-160 290-167.33q-8.8-7.33-11-19.67-9-69-56.5-117.5T107-362q-11-2-18.5-11.05-7.5-9.05-7.5-20.64Q81-406 88.5-415q7.5-9 18.5-8 93 9 158 75.5T340-188q2 11.79-7.5 19.9Q323-160 310.53-160ZM471-160q-12 0-21-8t-10-20q-11-134-103.5-229T111-523q-13-1-21.5-10.05-8.5-9.05-8.5-21.12Q81-567 91.5-575.5T116-583q154.76 12.78 263.38 123.39Q488-349 500-193q1 14-7.62 23.5T471-160Z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default MsrCastWarning;
