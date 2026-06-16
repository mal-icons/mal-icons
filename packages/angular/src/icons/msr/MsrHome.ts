import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-msr-home",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class MsrHome {
  readonly viewBox = "0 -960 960 960";
  readonly nodes: NodeTuple[] = [["path",{"d":"M220-180h150v-250h220v250h150v-390L480-765 220-570v390Zm0 60q-24.75 0-42.37-17.62T160-180v-390q0-14.25 6.38-27T184-618l260-195q8.3-6 17.34-9 9.05-3 18.85-3 9.8 0 18.72 3 8.91 3 17.09 9l260 195q11.25 8.25 17.63 21T800-570v390q0 24.75-17.62 42.38T740-120H530v-250H430v250H220Zm260-353Z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default MsrHome;
