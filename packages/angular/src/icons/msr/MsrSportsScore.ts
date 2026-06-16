import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-msr-sports-score",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class MsrSportsScore {
  readonly viewBox = "0 -960 960 960";
  readonly nodes: NodeTuple[] = [["path",{"d":"M390-740h60v-60h-60v60Zm120 0v-60h60v60h-60ZM390-500v-60h60v60h-60Zm240-120v-60h60v60h-60Zm0 120v-60h60v60h-60Zm-120 0v-60h60v60h-60Zm120-240v-60h60v60h-60Zm-180 60v-60h60v60h-60ZM299.83-160Q287-160 278.5-168.62T270-190v-580q0-12.75 8.68-21.37 8.68-8.62 21.5-8.62 12.83 0 21.42 8.63 8.6 8.63 8.6 21.38v30H390v60h-59.81v60H390v60h-60v370q0 12.75-8.68 21.38-8.68 8.63-21.5 8.63ZM570-560v-60h60v60h-60Zm-120 0v-60h60v60h-60Zm-60-60v-60h60v60h-60Zm120 0v-60h60v60h-60Zm60-60v-60h60v60h-60Z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default MsrSportsScore;
