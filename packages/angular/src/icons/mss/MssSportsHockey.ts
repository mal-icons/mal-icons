import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-mss-sports-hockey",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class MssSportsHockey {
  readonly viewBox = "0 -960 960 960";
  readonly nodes: NodeTuple[] = [["path",{"d":"M80-160v-85q0-18 11-29t29-11h20v125H80Zm104 0v-125h175l43-94 49 97-46 101q-5 11-14.5 16t-21.5 5H184Zm636 0v-125h20q18 0 29 11t11 29v85h-60Zm-44 0H591q-12 0-21.5-5T555-181L273-800h93l114 250 114-250h93L527-447l74 162h175v125Z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default MssSportsHockey;
