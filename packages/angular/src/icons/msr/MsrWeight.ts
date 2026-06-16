import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-msr-weight",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class MsrWeight {
  readonly viewBox = "0 -960 960 960";
  readonly nodes: NodeTuple[] = [["path",{"d":"M217-180h526l-63-440H280l-63 440Zm263-500q25.5 0 42.75-17.25T540-740q0-25.5-17.25-42.75T480-800q-25.5 0-42.75 17.25T420-740q0 25.5 17.25 42.75T480-680Zm104 0h96q23.11 0 40.05 14.5T740-628l62 440q4 27-13.62 47.5T743-120H217q-27.75 0-45.37-20.5T158-188l62-440q3-23 19.95-37.5T280-680h96q-8-14-12-28.57-4-14.57-4-31.43 0-50 35-85t85-35q50 0 85 35t35 85q0 17-4 31.5T584-680ZM217-180h526-526Z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default MsrWeight;
