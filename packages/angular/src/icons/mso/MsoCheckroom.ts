import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-mso-checkroom",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class MsoCheckroom {
  readonly viewBox = "0 -960 960 960";
  readonly nodes: NodeTuple[] = [["path",{"d":"M110-160q-21 0-28-20t10-34l358-281v-55q0-12 8.5-21t20.5-9q34 1 57.5-22.5T560-660q0-33-23.5-56.5T480-740q-33 0-56.5 23.5T400-660h-60q0-58 41-99t99-41q58 0 99 40t41 98q0 49-31 87t-79 52v28l358 281q17 14 10 34t-28 20H110Zm90-60h560L480-443 200-220Z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default MsoCheckroom;
