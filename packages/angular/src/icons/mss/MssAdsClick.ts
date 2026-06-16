import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-mss-ads-click",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class MssAdsClick {
  readonly viewBox = "0 -960 960 960";
  readonly nodes: NodeTuple[] = [["path",{"d":"M468-240q-96-5-162-74t-66-166q0-100 70-170t170-70q97 0 166 66t74 163l-63-20q-11-64-60-106.5T480-660q-75 0-127.5 52.5T300-480q0 67 42.5 116.5T449-303l19 63Zm48 158q-9 1-18 1.5t-18 0.5q-83 0-156-31.5T197-197q-54-54-85.5-127T80-480q0-83 31.5-156T197-763q54-54 127-85.5T480-880q83 0 156 31.5T763-763q54 54 85.5 127T880-480q0 9-0.5 18t-1.5 18l-58-18v-18q0-142-99-241t-241-99q-142 0-241 99t-99 241q0 142 99 241t241 99h18l18 58Zm305 22L650-231 600-80 480-480l400 120-151 50 171 171-79 79Z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default MssAdsClick;
