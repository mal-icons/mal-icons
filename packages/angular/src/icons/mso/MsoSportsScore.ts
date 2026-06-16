import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-mso-sports-score",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class MsoSportsScore {
  readonly viewBox = "0 -960 960 960";
  readonly nodes: NodeTuple[] = [["path",{"d":"M390-740h60v-60h-60v60Zm120 0v-60h60v60h-60ZM390-500v-60h60v60h-60Zm240-120v-60h60v60h-60Zm0 120v-60h60v60h-60Zm-120 0v-60h60v60h-60Zm120-240v-60h60v60h-60Zm-180 60v-60h60v60h-60ZM270-160v-640h60v60h60v60h-60v60h60v60h-60v400h-60Zm300-400v-60h60v60h-60Zm-120 0v-60h60v60h-60Zm-60-60v-60h60v60h-60Zm120 0v-60h60v60h-60Zm60-60v-60h60v60h-60Z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default MsoSportsScore;
