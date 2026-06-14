import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-oc-tag-16",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class OcTag16 {
  readonly viewBox = "0 0 16 16";
  readonly nodes: NodeTuple[] = [["path",{"d":"M1 7.78V2.75C1 1.78 1.78 1 2.75 1h5.03c0.46 0 0.910.18 1.240.51l6.25 6.25a1.75 1.75 0 0 1 0 2.47l-5.03 5.03a1.75 1.75 0 0 1-2.47 0l-6.25-6.25A1.75 1.75 0 0 1 1 7.78Zm1.5 0c0 0.070.030.130.070.18l6.25 6.25a0.250.25 0 0 0 0.35 0l5.03-5.03a0.250.25 0 0 0 0-0.35l-6.25-6.25a0.250.25 0 0 0-0.18-0.07H2.75a0.250.25 0 0 0-0.250.25ZM6 5a1 1 0 1 1 0 2 1 1 0 0 1 0-2Z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default OcTag16;
