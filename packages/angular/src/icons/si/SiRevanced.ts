import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-si-revanced",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class SiRevanced {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"d":"M5.1 0a0.280.28 0 0 0-0.230.42l6.88 11.93a0.280.28 0 0 0 0.48 0L19.130.42A0.280.28 0 0 0 18.9 0ZM0.5 0a0.330.33 0 0 0-0.30.46L10.43 23.8c0.050.120.170.20.30.2h2.54c0.13 0 0.25-0.080.3-0.2L23.80.46a0.330.33 0 0 0-0.3-0.46h-2.32a0.240.24 0 0 0-0.210.14L12.2 20.08a0.230.23 0 0 1-0.42 0L3.030.14A0.230.23 0 0 0 2.82 0Z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default SiRevanced;
