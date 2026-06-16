import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-mso-trail-length",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class MsoTrailLength {
  readonly viewBox = "0 -960 960 960";
  readonly nodes: NodeTuple[] = [["path",{"d":"M270-280v-60h267q-21-21-36-51t-19-59H350v-60h132q4-28 18.5-57.5T537-620H120v-60h560q83 0 141.5 58.5T880-480q0 83-58.5 141.5T680-280H270Zm409.77-60Q738-340 779-380.76q41-40.76 41-99Q820-538 779.24-579q-40.76-41-99-41Q622-620 581-579.23q-41 40.76-41 99Q540-422 580.77-381q40.76 41 99 41ZM80-450v-60h240v60H80Zm40 170v-60h120v60H120Zm560-200Z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default MsoTrailLength;
