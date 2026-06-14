import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-oc-plus-circle-24",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class OcPlusCircle24 {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"d":"M12.75 7.75a0.750.75 0 0 0-1.5 0v3.5h-3.5a0.750.75 0 0 0 0 1.5h3.5v3.5a0.750.75 0 0 0 1.5 0v-3.5h3.5a0.750.75 0 0 0 0-1.5h-3.5v-3.5Z"}],["path",{"d":"M12 1c6.08 0 11 4.93 11 11s-4.92 11-11 11S1 18.08 1 12 5.93 1 12 1ZM2.5 12a9.5 9.5 0 0 0 9.5 9.5 9.5 9.5 0 0 0 9.5-9.5A9.5 9.5 0 0 0 12 2.5 9.5 9.5 0 0 0 2.5 12Z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default OcPlusCircle24;
