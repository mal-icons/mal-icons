import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-mss-person-search",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class MssPersonSearch {
  readonly viewBox = "0 -960 960 960";
  readonly nodes: NodeTuple[] = [["path",{"d":"M440.5-500Q378-500 334-544.06 290-588.12 290-650q0-63 44.06-106.5Q378.13-800 440-800q63 0 106.5 43.5t43.5 106q0 62.5-43.5 106.5t-106 44Zm-0.5-60q38 0 64-26.44 26-26.44 26-63.56 0-38-26-64t-63.5-26q-37.5 0-64 26T350-650.5q0 37.5 26.44 64Q402.88-560 440-560ZM898-20 758-160q-23 17-47.5 23.5t-50.06 6.5q-71.01 0-120.72-49.62Q490-229.23 490-300.12 490-371 539.62-420.5q49.62-49.5 120.5-49.5Q731-470 780.5-420.29T830-299.56q0 25.57-6.5 50.07Q817-225 800-202L940-62l-42 42ZM660-190q47 0 78.5-31.5T770-300q0-47-31.5-78.5T660-410q-47 0-78.5 31.5T550-300q0 47 31.5 78.5T660-190Zm-540 30v-94q0-37 17.5-63t50.5-43q47-23 122.5-43.5T464-419q-8 13-15 28.5T438-360q-78-1-136 18.5T212-306q-14 8-23 21.5t-9 30.5v34h258q11 17 20 31.5t20 28.5H120Zm320-490Zm-2 430Z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default MssPersonSearch;
