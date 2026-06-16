import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-msr-star-rate-half",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class MsrStarRateHalf {
  readonly viewBox = "0 -960 960 960";
  readonly nodes: NodeTuple[] = [["path",{"d":"M480-671v324l137 104-55-173 126-82H537l-57-173Zm0 403L307-136q-9 7-18 6t-17-6q-8-5-11.5-13.5T260-169l66-215-170-122q-9-6-11.5-15.5t0.5-17.5q3-8 10-14.5t18-6.5h211l67-224q3-11 11.5-16.5T480-806q9 0 17.5 5.5T509-784l67 224h211q11 0 18 6.5t10 14.5q3 8 0.5 17.5T804-506L634-384l66 215q3 11-0.5 19.5T688-136q-8 5-17 6t-18-6L480-268Z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default MsrStarRateHalf;
