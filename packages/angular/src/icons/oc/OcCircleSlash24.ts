import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-oc-circle-slash-24",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class OcCircleSlash24 {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"d":"M12 1c6.08 0 11 4.93 11 11s-4.92 11-11 11S1 18.08 1 12 5.93 1 12 1ZM5.83 19.23A9.46 9.46 0 0 0 12 21.5a9.5 9.5 0 0 0 9.5-9.5 9.46 9.46 0 0 0-2.27-6.17ZM2.5 12a9.46 9.46 0 0 0 2.27 6.17L18.17 4.77A9.46 9.46 0 0 0 12 2.5 9.5 9.5 0 0 0 2.5 12Z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default OcCircleSlash24;
