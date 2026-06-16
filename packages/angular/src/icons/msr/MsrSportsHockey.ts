import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-msr-sports-hockey",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class MsrSportsHockey {
  readonly viewBox = "0 -960 960 960";
  readonly nodes: NodeTuple[] = [["path",{"d":"M110-160q-13 0-21.5-8.5T80-190v-55q0-18 11-29t29-11h20v125h-30Zm74 0v-125h175l43-94 49 97-46 101q-5 11-14.5 16t-21.5 5H184Zm636 0v-125h20q18 0 29 11t11 29v55q0 13-8.5 21.5T850-160h-30Zm-229 0q-12 0-21.5-5T555-181L300-740q-11-25 0.5-42.5T340-800q11 0 21.5 7t15.5 17l103 226 103-226q5-10 16-17t22-7q27 0 38.5 17.5t0.5 42.5L527-447l74 162h175v125H591Z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default MsrSportsHockey;
