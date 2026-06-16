import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-msr-house-siding",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class MsrHouseSiding {
  readonly viewBox = "0 -960 960 960";
  readonly nodes: NodeTuple[] = [["path",{"d":"M229.83-160Q217-160 208.5-168.62T200-190v-290h-81q-10.5 0-14.25-9.5T109-506l351-316q8.19-8 20.09-8T500-822l351 316q8 7 4.25 16.5T841-480h-81v290q0 12.75-8.68 21.38-8.68 8.63-21.5 8.63-12.82 0-21.32-8.62T700-190v-60H260v60q0 12.75-8.68 21.38-8.68 8.63-21.5 8.63ZM336-630h288L480-759 336-630Zm-76 160h440v-92l-9-8H269l-9 8v92Zm0 160h440v-100H260v100Z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default MsrHouseSiding;
